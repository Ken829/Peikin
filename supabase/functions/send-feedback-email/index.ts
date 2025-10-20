import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface FeedbackData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, message }: FeedbackData = await req.json();

    console.log("Received feedback from:", name, email);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("feedback")
      .insert({
        name,
        email,
        phone: phone || null,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save feedback" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Feedback saved to database successfully");

    const GMAIL_USER = Deno.env.get("GMAIL_USER");
    const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD");

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Gmail credentials not configured");
      return new Response(
        JSON.stringify({ success: true, message: "Feedback saved (email notification disabled)" }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Gmail credentials found, attempting to send email...");

    try {
      const emailBody = `From: ${GMAIL_USER}
To: peikinginseng@gmail.com
Subject: New Feedback from ${name}
Content-Type: text/html; charset=utf-8
MIME-Version: 1.0

<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: linear-gradient(135deg, #92400e 0%, #c2410c 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
      .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; }
      .field { margin-bottom: 15px; }
      .label { font-weight: bold; color: #92400e; }
      .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
      .footer { text-align: center; margin-top: 20px; padding: 10px; color: #6b7280; font-size: 12px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2 style="margin: 0;">New Customer Feedback</h2>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Pei Kin Ginseng Hall (北京中医诊所)</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Email:</div>
          <div class="value"><a href="mailto:${email}">${email}</a></div>
        </div>
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value"><a href="tel:${phone}">${phone || 'Not provided'}</a></div>
        </div>
        <div class="field">
          <div class="label">Message:</div>
          <div class="value">${message.replace(/\n/g, '<br>')}</div>
        </div>
        <div class="field">
          <div class="label">Received:</div>
          <div class="value">${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</div>
        </div>
      </div>
      <div class="footer">
        This is an automated notification from your website feedback form.<br>
        To reply, use the customer's email or phone number above.
      </div>
    </div>
  </body>
</html>`;

      console.log("Connecting to Gmail SMTP...");

      const base64Body = btoa(unescape(encodeURIComponent(emailBody)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const emailResponse = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/send`,
        {
          method: "POST",
          headers: {
            "Authorization": `Basic ${btoa(`${GMAIL_USER}:${GMAIL_APP_PASSWORD}`)}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            raw: base64Body,
          }),
        }
      );

      const responseText = await emailResponse.text();
      console.log("Gmail API response status:", emailResponse.status);
      console.log("Gmail API response:", responseText);

      if (!emailResponse.ok) {
        console.error("Email sending failed with status:", emailResponse.status);
        console.error("Error details:", responseText);
      } else {
        console.log("Email sent successfully to peikinginseng@gmail.com");
      }
    } catch (emailError) {
      console.error("Email sending error (non-critical):", emailError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Feedback received successfully" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing feedback:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to process feedback" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});