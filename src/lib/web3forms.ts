const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function web3FormsData(
  accessKey: string,
  fields: Record<string, string>,
  attachment: File,
): FormData {
  const form = new FormData();
  form.append("access_key", accessKey);
  for (const [key, value] of Object.entries(fields)) {
    form.append(key, value);
  }
  form.append("attachment", attachment, attachment.name);
  return form;
}

export type Web3FormsResult = {
  success: boolean;
  message?: string;
};

/**
 * Web3Forms blocks server-side requests with a Cloudflare challenge (403 HTML).
 * The API is designed to be called from the browser, where the access key is
 * safe to expose. See https://docs.web3forms.com/getting-started/troubleshooting
 */
export async function submitToWeb3Forms(
  fields: Record<string, string>,
  attachment?: File | null,
): Promise<Web3FormsResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
    return { success: false, message: "Configuratie ontbreekt." };
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: attachment
        ? { Accept: "application/json" }
        : {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
      body: attachment
        ? web3FormsData(accessKey, fields, attachment)
        : JSON.stringify({ access_key: accessKey, ...fields }),
    });

    const rawBody = await response.text();

    let result: Web3FormsResult | null = null;

    try {
      result = JSON.parse(rawBody) as Web3FormsResult;
    } catch {
      console.error("Web3Forms response was not valid JSON.", {
        status: response.status,
        rawBody: rawBody.slice(0, 500),
      });
      return { success: false, message: "Onverwacht antwoord van de server." };
    }

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message ?? "Versturen mislukt.",
      };
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error("Web3Forms submission failed:", error);
    return { success: false, message: "Versturen mislukt." };
  }
}
