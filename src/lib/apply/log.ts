import type { CvPayload } from "@/lib/apply/cv";

export type ApplyInput = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  vacancy: string;
  page: string;
  cv: CvPayload;
};

export type SafeApplicationLog = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  vacancy: string;
  page: string;
  gdprConsent: true;
  cv: { filename: string; mime: string; size: number };
};

export function toSafeLog(input: ApplyInput): SafeApplicationLog {
  return {
    name: input.name,
    email: input.email,
    phone: input.phone,
    linkedin: input.linkedin,
    vacancy: input.vacancy,
    page: input.page,
    gdprConsent: true,
    cv: {
      filename: input.cv.filename,
      mime: input.cv.mime,
      size: input.cv.bytes.byteLength,
    },
  };
}

export function logApplicationProblem(
  reason: string,
  input: ApplyInput,
  extra?: unknown,
) {
  console.error("[apply] Twenty-probleem", {
    reason,
    ...toSafeLog(input),
    extra: extra instanceof Error ? extra.message : extra,
  });
}
