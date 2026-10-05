import { ZodError } from "zod";
import { CV_REQUIRED } from "@/lib/apply/constants";
import {
  mimeForExtension,
  safeCvFilename,
  serverCvError,
  cvExtension,
  type CvPayload,
} from "@/lib/apply/cv";
import { normalizeLinkedIn } from "@/lib/apply/linkedin";
import type { ApplyInput } from "@/lib/apply/log";
import { sollicitatieServerSchema } from "@/lib/validations/sollicitatie";

export type FieldErrors = Record<string, string>;

export type ParseResult =
  | { ok: true; data: ApplyInput }
  | { ok: false; fieldErrors: FieldErrors };

function text(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value : "";
}

function zodFieldErrors(error: ZodError): FieldErrors {
  const fieldErrors: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }
  return fieldErrors;
}

export function honeypotFilled(form: FormData): boolean {
  const website = text(form, "website") || text(form, "honeypot");
  return website.trim().length > 0;
}

export async function parseApplyFormData(form: FormData): Promise<ParseResult> {
  const consent = text(form, "gdprConsent").toLowerCase();
  const parsed = sollicitatieServerSchema.safeParse({
    name: text(form, "name"),
    email: text(form, "email"),
    phone: text(form, "phone"),
    linkedin: text(form, "linkedin"),
    vacancy: text(form, "vacancy"),
    page: text(form, "page"),
    gdprConsent: consent === "true" || consent === "on" || consent === "1",
  });

  const fieldErrors = parsed.success ? {} : zodFieldErrors(parsed.error);
  const cv = await readCv(form.get("cv"));
  if ("error" in cv) fieldErrors.cv = cv.error;

  if (!parsed.success || "error" in cv) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      linkedin: normalizeLinkedIn(parsed.data.linkedin),
      vacancy: parsed.data.vacancy,
      page: parsed.data.page,
      cv: cv.file,
    },
  };
}

async function readCv(
  entry: FormDataEntryValue | null,
): Promise<{ file: CvPayload } | { error: string }> {
  if (!(entry instanceof File) || entry.size === 0) {
    return { error: CV_REQUIRED };
  }

  const bytes = new Uint8Array(await entry.arrayBuffer());
  const error = serverCvError({
    name: entry.name,
    type: entry.type,
    bytes,
  });
  if (error) return { error };

  const extension = cvExtension(entry.name);
  if (!extension) return { error: CV_REQUIRED };

  return {
    file: {
      filename: safeCvFilename(entry.name, extension),
      mime: mimeForExtension(extension, entry.type),
      bytes,
    },
  };
}
