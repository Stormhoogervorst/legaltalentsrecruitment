"use server";

import { sollicitatieServerSchema } from "@/lib/validations/sollicitatie";

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

  const values = validation.data;

  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    console.log("W3F key present:", Boolean(process.env.WEB3FORMS_ACCESS_KEY));

    if (!accessKey) {
      throw new Error("Missing Web3Forms access key.");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nieuwe sollicitatie: ${values.vacatureTitle} — ${values.name}`,
        from_name: "Legal Talents Sollicitatie",
        name: values.name,
        email: values.email,
        phone: values.phone,
        linkedin: values.linkedin,
        vacatureSlug: values.vacatureSlug,
        vacatureTitle: values.vacatureTitle,
      }),
    });

    const rawBody = await response.text();

    let result: { success?: boolean; message?: string } | null = null;

    try {
      result = JSON.parse(rawBody);
    } catch (parseError) {
      console.error("Web3Forms response was not valid JSON.", {
        status: response.status,
        statusText: response.statusText,
        contentType: response.headers.get("content-type"),
        rawBody: rawBody.slice(0, 1000),
        parseError,
      });
      throw new Error(
        `Web3Forms returned non-JSON response (status ${response.status}).`,
      );
    }

    if (!response.ok || !result?.success) {
      console.error("Web3Forms submission rejected.", {
        status: response.status,
        result,
      });
      throw new Error(result?.message ?? "Web3Forms submission error.");
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
