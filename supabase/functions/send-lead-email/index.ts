import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadEmailRequest {
  businessName: string;
  eventType: string;
  eventDate: string;
  phone: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { businessName, eventType, eventDate, phone, email }: LeadEmailRequest = await req.json();

    console.log("Sending lead notification email for:", businessName);

    const emailResponse = await resend.emails.send({
      from: "Leads <onboarding@resend.dev>",
      to: ["a.martinro@gmail.com"],
      subject: `Nuevo lead: ${businessName} - ${eventType}`,
      html: `
        <h1>¡Nuevo lead recibido!</h1>
        <p>Se ha recibido una nueva solicitud de información:</p>
        <ul>
          <li><strong>Nombre del negocio:</strong> ${businessName}</li>
          <li><strong>Tipo de evento:</strong> ${eventType}</li>
          <li><strong>Fecha del evento:</strong> ${eventDate}</li>
          <li><strong>Teléfono:</strong> ${phone}</li>
          <li><strong>Email de contacto:</strong> ${email}</li>
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
