"use server";

import { Resend } from "resend";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

function normalizeInput(data: FormData | object) {
  if (data instanceof FormData) {
    const raw = Object.fromEntries(data.entries());

    return {
      ...raw,
      honeypot: raw.honeypot ?? raw.website,
    };
  }

  return data;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function displayValue(value?: string) {
  return value?.trim() ? escapeHtml(value) : "Niet ingevuld";
}

function fieldRow(label: string, value?: string) {
  return `
    <tr>
      <td style="padding: 10px 16px; border-bottom: 1px solid #E5E5EA; color: #6B6B76; width: 160px;">${label}</td>
      <td style="padding: 10px 16px; border-bottom: 1px solid #E5E5EA; color: #0A0A0F;">${displayValue(value)}</td>
    </tr>
  `;
}

function notificationHtml(values: ContactFormValues) {
  return `
    <div style="font-family: Inter, Helvetica, Arial, sans-serif; color: #0A0A0F; line-height: 1.5;">
      <h1 style="font-size: 24px; line-height: 1.2; margin: 0 0 20px;">Nieuw contactverzoek</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px; background: #FFFFFF; border: 1px solid #E5E5EA;">
        ${fieldRow("Naam", values.name)}
        ${fieldRow("E-mail", values.email)}
        ${fieldRow("Telefoon", values.phone)}
        ${fieldRow("Bedrijf", values.company)}
        ${fieldRow("Type", values.type)}
        <tr>
          <td style="padding: 10px 16px; color: #6B6B76; vertical-align: top;">Bericht</td>
          <td style="padding: 10px 16px; color: #0A0A0F; white-space: pre-wrap;">${escapeHtml(values.message)}</td>
        </tr>
      </table>
    </div>
  `;
}

function confirmationHtml(values: ContactFormValues) {
  return `
    <div style="font-family: Inter, Helvetica, Arial, sans-serif; color: #0A0A0F; line-height: 1.6; max-width: 640px;">
      <p>Beste ${escapeHtml(values.name)},</p>
      <p>Bedankt voor je bericht. We hebben het ontvangen en nemen binnen 24 uur contact op.</p>
      <p>Samenvatting:</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; background: #FFFFFF; border: 1px solid #E5E5EA;">
        ${fieldRow("Je bent", values.type)}
        ${fieldRow("Telefoon", values.phone)}
        ${fieldRow("Bedrijf", values.company)}
        <tr>
          <td style="padding: 10px 16px; color: #6B6B76; vertical-align: top;">Bericht</td>
          <td style="padding: 10px 16px; color: #0A0A0F; white-space: pre-wrap;">${escapeHtml(values.message)}</td>
        </tr>
      </table>
      <p style="margin-top: 24px;">Team Legal Talents</p>
    </div>
  `;
}

export async function submitContactForm(data: FormData | object) {
  const validation = contactFormSchema.safeParse(normalizeInput(data));

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const values = validation.data;
  const honeypot = values.honeypot ?? values.website;

  if (honeypot?.trim()) {
    return { success: true };
  }

  try {
    const to = process.env.CONTACT_EMAIL_TO;
    const from = process.env.CONTACT_EMAIL_FROM;

    if (!to || !from) {
      throw new Error("Missing contact email configuration.");
    }

    const [notification, confirmation] = await Promise.all([
      resend.emails.send({
        from,
        to,
        replyTo: values.email,
        subject: `[Legal Talents] Nieuw contactverzoek — ${values.name} (${values.type})`,
        html: notificationHtml(values),
      }),
      resend.emails.send({
        from,
        to: values.email,
        replyTo: to,
        subject: "Bedankt voor je bericht — Legal Talents Recruitment",
        html: confirmationHtml(values),
      }),
    ]);

    if (notification.error || confirmation.error) {
      throw new Error(
        notification.error?.message ??
          confirmation.error?.message ??
          "Resend email error.",
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return { success: false, error: "Versturen mislukt" };
  }
}
