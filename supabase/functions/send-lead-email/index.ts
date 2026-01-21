import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Odoo configuration
const ODOO_URL = Deno.env.get("ODOO_URL");
const ODOO_DB = Deno.env.get("ODOO_DB");
const ODOO_USER = Deno.env.get("ODOO_USER");
const ODOO_API_KEY = Deno.env.get("ODOO_API_KEY");

// Allowed origins for CORS - restrict to known domains
const ALLOWED_ORIGINS = [
  "https://stream-inquiry-form.lovable.app",
  "https://id-preview--58b24a45-b0e8-4667-b4f5-3cd9ca534db1.lovable.app",
];

const getCorsHeaders = (origin: string | null) => {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Vary": "Origin",
  };
};

// Input validation schema
const LeadEmailSchema = z.object({
  businessName: z.string().min(1, "Business name is required").max(200, "Business name too long"),
  eventType: z.string().min(1, "Event type is required").max(100, "Event type too long"),
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  phone: z.string().min(5, "Phone too short").max(20, "Phone too long"),
  email: z.string().email("Invalid email").max(254, "Email too long"),
});

// HTML sanitization to prevent XSS
const sanitizeHtml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
};

// Odoo JSON-RPC helper
async function odooJsonRpc(url: string, method: string, params: Record<string, unknown>) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: { ...params },
      id: Date.now(),
    }),
  });
  
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error.data?.message || result.error.message || "Odoo API error");
  }
  return result.result;
}

// Authenticate with Odoo and get user ID
async function odooAuthenticate(): Promise<number> {
  const authUrl = `${ODOO_URL}/web/session/authenticate`;
  const result = await odooJsonRpc(authUrl, "call", {
    db: ODOO_DB,
    login: ODOO_USER,
    password: ODOO_API_KEY,
  });
  
  if (!result.uid) {
    throw new Error("Failed to authenticate with Odoo");
  }
  
  console.log("Odoo authentication successful, user ID:", result.uid);
  return result.uid;
}

// Create a lead in Odoo CRM
async function createOdooLead(data: {
  businessName: string;
  eventType: string;
  eventDate: string;
  phone: string;
  email: string;
}): Promise<number> {
  // First authenticate
  await odooAuthenticate();
  
  const createUrl = `${ODOO_URL}/web/dataset/call_kw`;
  
  const leadData = {
    name: `${data.businessName} - ${data.eventType}`,
    contact_name: data.businessName,
    email_from: data.email,
    phone: data.phone,
    description: `Tipo de evento: ${data.eventType}\nFecha del evento: ${data.eventDate}\nTeléfono: ${data.phone}\nEmail: ${data.email}`,
    type: "lead",
  };
  
  const result = await odooJsonRpc(createUrl, "call", {
    model: "crm.lead",
    method: "create",
    args: [leadData],
    kwargs: {},
  });
  
  console.log("Odoo lead created with ID:", result);
  return result;
}

const getClientIp = (req: Request): string => {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
};

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Validate origin - reject requests from unknown origins
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    console.warn(`Request from unauthorized origin: ${origin}`);
    return new Response(
      JSON.stringify({ error: "Origin not allowed" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const clientIp = getClientIp(req);
  console.log(`Request from IP: ${clientIp}, Origin: ${origin || 'none'}`);

  // Check rate limit
  if (!checkRateLimit(clientIp)) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const rawData = await req.json();

    // Validate input with zod
    const parseResult = LeadEmailSchema.safeParse(rawData);
    
    if (!parseResult.success) {
      console.warn("Validation failed:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input", 
          details: parseResult.error.errors.map(e => e.message) 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { businessName, eventType, eventDate, phone, email } = parseResult.data;

    // Sanitize all user inputs before using in HTML
    const safeBusinessName = sanitizeHtml(businessName);
    const safeEventType = sanitizeHtml(eventType);
    const safeEventDate = sanitizeHtml(eventDate);
    const safePhone = sanitizeHtml(phone);
    const safeEmail = sanitizeHtml(email);

    console.log("Sending lead notification email for:", safeBusinessName);

    const emailResponse = await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: ["a.martinro@gmail.com"],
      subject: `Nuevo lead: ${safeBusinessName} - ${safeEventType}`,
      html: `
        <h1>¡Nuevo lead recibido!</h1>
        <p>Se ha recibido una nueva solicitud de información:</p>
        <ul>
          <li><strong>Nombre del negocio:</strong> ${safeBusinessName}</li>
          <li><strong>Tipo de evento:</strong> ${safeEventType}</li>
          <li><strong>Fecha del evento:</strong> ${safeEventDate}</li>
          <li><strong>Teléfono:</strong> ${safePhone}</li>
          <li><strong>Email de contacto:</strong> ${safeEmail}</li>
        </ul>
        <p>¡Contacta con ellos cuanto antes!</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Create lead in Odoo CRM (non-blocking, we don't want to fail the request if Odoo fails)
    let odooLeadId: number | null = null;
    try {
      if (ODOO_URL && ODOO_DB && ODOO_USER && ODOO_API_KEY) {
        odooLeadId = await createOdooLead(parseResult.data);
        console.log("Odoo lead created successfully, ID:", odooLeadId);
      } else {
        console.warn("Odoo configuration incomplete, skipping lead creation");
      }
    } catch (odooError) {
      console.error("Error creating Odoo lead (non-blocking):", odooError);
      // Don't fail the request, email was sent successfully
    }

    return new Response(JSON.stringify({ 
      email: emailResponse,
      odooLeadId: odooLeadId 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
