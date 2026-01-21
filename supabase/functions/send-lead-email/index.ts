import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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

const getClientIp = (req: Request): string => {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const clientIp = getClientIp(req);
  console.log(`Request from IP: ${clientIp}`);

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

    return new Response(JSON.stringify(emailResponse), {
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
