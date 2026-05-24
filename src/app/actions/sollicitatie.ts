"use server";

import { Resend } from "resend";
import {
  acceptedCvTypes,
  maxCvSize,
  sollicitatieServerSchema,
  type SollicitatieValues,
} from "@/lib/validations/sollicitatie";

const resend = new Resend(process.env.RESEND_API_KEY);

type CvAttachment = {
  filename: string;
  content: Buffer;
};

function normalizeInput(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());

  return {
    name: raw.name,
    email: raw.email,
    phone: raw.phone,
    linkedin: raw.linkedin,
    vacatureSlug: raw.vacatureSlug,
    vacatureTitle: raw.vacatureTitle,
    honeypot: raw.honeypot ?? raw.website,
  };
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
      <td style="padding: 12px 16px; border-bottom: 1px solid #E5E5EA; color: #6B6B76; width: 160px;">${label}</td>
      <td style="padding: 12px 16px; border-bottom: 1px solid #E5E5EA; color: #0A0A0F;">${displayValue(value)}</td>
    </tr>
  `;
}

function vacatureUrl(slug: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    "https://legaltalentsrecruitment.nl";
  const normalizedBaseUrl = baseUrl.startsWith("http")
    ? baseUrl
    : `https://${baseUrl}`;

  return `${normalizedBaseUrl.replace(/\/$/, "")}/vacatures/${slug}`;
}

function notificationHtml(values: SollicitatieValues) {
  const url = vacatureUrl(values.vacatureSlug);

  return `
    <div style="font-family: Inter, Helvetica, Arial, sans-serif; color: #0A0A0F; line-height: 1.5;">
      <h1 style="font-size: 24px; line-height: 1.2; margin: 0 0 20px;">Nieuwe sollicitatie</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 680px; background: #FFFFFF; border: 1px solid #E5E5EA;">
        ${fieldRow("Naam", values.name)}
        ${fieldRow("Email", values.email)}
        ${fieldRow("Telefoon", values.phone)}
        ${values.linkedin ? fieldRow("LinkedIn", values.linkedin) : ""}
        ${fieldRow("Vacature", values.vacatureTitle)}
        ${fieldRow("Slug", values.vacatureSlug)}
        <tr>
          <td style="padding: 12px 16px; color: #6B6B76;">Vacaturelink</td>
          <td style="padding: 12px 16px; color: #0A0A0F;">
            <a href="${escapeHtml(url)}" style="color: #0A0A0F; text-decoration: underline;">${escapeHtml(url)}</a>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function confirmationHtml(values: SollicitatieValues) {
  return `
    <div style="font-family: Inter, Helvetica, Arial, sans-serif; color: #0A0A0F; line-height: 1.6; max-width: 640px;">
      <p>Beste ${escapeHtml(values.name)},</p>
      <p>Bedankt voor je sollicitatie op <strong>${escapeHtml(values.vacatureTitle)}</strong>. We hebben je gegevens goed ontvangen.</p>
      <p>We bekijken je sollicitatie zorgvuldig en komen binnen 5 werkdagen persoonlijk bij je terug. Vaak lukt dat sneller.</p>
      <p>Heb je in de tussentijd iets toe te voegen, dan kun je een mailtje sturen naar <a href="mailto:storm@legal-talents.nl">storm@legal-talents.nl</a></p>
      <p style="margin-top: 24px;">Team Legal Talents</p>
    </div>
  `;
}

async function getCvAttachment(formData: FormData): Promise<
  | { success: true; attachment?: CvAttachment }
  | { success: false; error: string }
> {
  const cv = formData.get("cv");

  if (!(cv instanceof File) || cv.size === 0) {
    return { success: true };
  }

  if (!acceptedCvTypes.includes(cv.type as (typeof acceptedCvTypes)[number])) {
    return {
      success: false,
      error: "Upload je CV als PDF- of Word-bestand.",
    };
  }

  if (cv.size > maxCvSize) {
    return {
      success: false,
      error: "Je CV mag maximaal 5MB zijn.",
    };
  }

  const arrayBuffer = await cv.arrayBuffer();

  return {
    success: true,
    attachment: {
      filename: cv.name,
      content: Buffer.from(arrayBuffer),
    },
  };
}

export async function submitSollicitatie(formData: FormData) {
  const honeypot = formData.get("honeypot") ?? formData.get("website");

  if (typeof honeypot === "string" && honeypot.trim()) {
    return { success: true };
  }

  const validation = sollicitatieServerSchema.safeParse(normalizeInput(formData));

  if (!validation.success) {
    return {
      success: false,
      error: "Controleer je gegevens en probeer opnieuw.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const cvResult = await getCvAttachment(formData);

  if (!cvResult.success) {
    return { success: false, error: cvResult.error };
  }

  const values = validation.data;

  try {
    const to = process.env.CONTACT_EMAIL_TO;
    const from = process.env.CONTACT_EMAIL_FROM;

    if (!to || !from) {
      throw new Error("Missing contact email configuration.");
    }

    const attachments = cvResult.attachment ? [cvResult.attachment] : undefined;
    const [notification, confirmation] = await Promise.all([
      resend.emails.send({
        from,
        to,
        replyTo: values.email,
        subject: `[Sollicitatie] ${values.vacatureTitle} — ${values.name}`,
        html: notificationHtml(values),
        attachments,
      }),
      resend.emails.send({
        from,
        to: values.email,
        replyTo: to,
        subject: "Bedankt voor je sollicitatie — Legal Talents",
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
    console.error("Sollicitatie submission failed:", error);

    return {
      success: false,
      error: "Versturen mislukt. Probeer opnieuw of mail direct naar storm@legal-talents.nl.",
    };
  }
}
