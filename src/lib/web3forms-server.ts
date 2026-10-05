import type { ApplyInput } from "@/lib/apply/log";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsServerResult = {
  ok: boolean;
  attachmentIncluded: boolean;
  blocked: boolean;
  message?: string;
};

/**
 * Web3Forms expects browser calls. Server IPs often get a Cloudflare 403
 * unless the IP is safelisted on a paid plan. Callers keep the application
 * when Twenty succeeds, and the browser retries the mail when this fails.
 */
export async function sendApplicationMail(
  input: ApplyInput,
): Promise<Web3FormsServerResult> {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("[apply] WEB3FORMS_ACCESS_KEY ontbreekt.");
    return {
      ok: false,
      attachmentIncluded: false,
      blocked: false,
      message: "Configuratie ontbreekt.",
    };
  }

  const fields = mailFields(input);
  const withFile = await postWeb3Forms(accessKey, fields, input.cv);
  if (withFile.ok) return withFile;
  if (withFile.blocked) return withFile;

  const withoutFile = await postWeb3Forms(accessKey, fields, null);
  return { ...withoutFile, attachmentIncluded: false };
}

function mailFields(input: ApplyInput): Record<string, string> {
  return {
    subject: `Nieuwe sollicitatie: ${input.vacancy} — ${input.name}`,
    from_name: "Legal Talents Sollicitatie",
    name: input.name,
    email: input.email,
    phone: input.phone,
    linkedin: input.linkedin,
    vacancy: input.vacancy,
    page: input.page,
  };
}

async function postWeb3Forms(
  accessKey: string,
  fields: Record<string, string>,
  cv: ApplyInput["cv"] | null,
): Promise<Web3FormsServerResult> {
  const form = new FormData();
  form.append("access_key", accessKey);
  for (const [key, value] of Object.entries(fields)) {
    form.append(key, value);
  }
  if (cv) {
    form.append(
      "attachment",
      new Blob([toBlobPart(cv.bytes)], { type: cv.mime }),
      cv.filename,
    );
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: form,
      signal: AbortSignal.timeout(12_000),
    });
    const rawBody = await response.text();
    if (response.status === 403 || rawBody.trimStart().startsWith("<")) {
      console.error("[apply] Web3Forms server-side geblokkeerd.", {
        status: response.status,
      });
      return {
        ok: false,
        attachmentIncluded: Boolean(cv),
        blocked: true,
        message: "Web3Forms blokkeert server-side verzoeken.",
      };
    }

    let result: { success?: boolean; message?: string } | null = null;
    try {
      result = JSON.parse(rawBody) as { success?: boolean; message?: string };
    } catch {
      console.error("[apply] Web3Forms antwoord was geen JSON.", {
        status: response.status,
        rawBody: rawBody.slice(0, 300),
      });
      return {
        ok: false,
        attachmentIncluded: Boolean(cv),
        blocked: false,
        message: "Onverwacht antwoord van Web3Forms.",
      };
    }

    if (!response.ok || !result.success) {
      console.error("[apply] Web3Forms mislukt.", {
        status: response.status,
        message: result.message,
        withAttachment: Boolean(cv),
      });
      return {
        ok: false,
        attachmentIncluded: Boolean(cv),
        blocked: false,
        message: result.message ?? "Versturen mislukt.",
      };
    }

    return { ok: true, attachmentIncluded: Boolean(cv), blocked: false };
  } catch (error) {
    console.error("[apply] Web3Forms verzoek mislukt.", {
      message: error instanceof Error ? error.message : "onbekend",
      withAttachment: Boolean(cv),
    });
    return {
      ok: false,
      attachmentIncluded: Boolean(cv),
      blocked: false,
      message: "Versturen mislukt.",
    };
  }
}

function toBlobPart(bytes: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}
