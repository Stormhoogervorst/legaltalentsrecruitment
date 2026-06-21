"use server";

import { contactFormSchema } from "@/lib/validations/contact";

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
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

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
        subject: `Nieuw contactbericht — ${values.name}`,
        from_name: "Legal Talents Website",
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        type: values.type,
        message: values.message,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message ?? "Web3Forms submission error.");
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return { success: false, error: "Versturen mislukt" };
  }
}
