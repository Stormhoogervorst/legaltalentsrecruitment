export const CONSENT_COOKIE_NAME = "lt_consent";
export const CONSENT_COOKIE_VERSION = 1;
export const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 182;

export const GETLEADS_PIXEL_SRC =
  "https://id.getleads.io/pixels/8dc5e76d-81d7-4781-b1d6-3b585fc86382/p.js";
export const GETLEADS_PIXEL_KEY = "8dc5e76d-81d7-4781-b1d6-3b585fc86382";

export type VisitorIdChoice = "granted" | "denied";
export type VisitorIdStatus = VisitorIdChoice | null;

export type ConsentCookieValue = {
  v: typeof CONSENT_COOKIE_VERSION;
  visitorId: VisitorIdChoice;
  ts: number;
};

function isConsentCookieValue(value: unknown): value is ConsentCookieValue {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Partial<ConsentCookieValue>;

  return (
    candidate.v === CONSENT_COOKIE_VERSION &&
    (candidate.visitorId === "granted" || candidate.visitorId === "denied") &&
    typeof candidate.ts === "number"
  );
}

export function parseConsentCookie(raw: string | undefined): VisitorIdStatus {
  if (!raw) {
    return null;
  }

  const candidates = [raw];

  try {
    candidates.push(decodeURIComponent(raw));
  } catch {
    // Cookie was not URI-encoded.
  }

  for (const candidate of candidates) {
    try {
      const parsed: unknown = JSON.parse(candidate);
      if (isConsentCookieValue(parsed)) {
        return parsed.visitorId;
      }
    } catch {
      // Try the next encoding variant.
    }
  }

  return null;
}

export function serializeConsentCookie(visitorId: VisitorIdChoice): string {
  const payload: ConsentCookieValue = {
    v: CONSENT_COOKIE_VERSION,
    visitorId,
    ts: Date.now(),
  };

  return encodeURIComponent(JSON.stringify(payload));
}
