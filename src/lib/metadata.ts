export const SITE_TITLE_BRAND = "Legal Talents Recruitment";
export const SITE_TITLE_MAX = 60;

const TITLE_SEP = " | ";
const MAX_SEGMENT =
  SITE_TITLE_MAX - TITLE_SEP.length - SITE_TITLE_BRAND.length;

function stripLegacyBrand(segment: string): string {
  return segment
    .replace(/\s*\|\s*Legal Talents(?: Recruitment)?\s*$/i, "")
    .replace(/\s*—\s*Legal Talents(?: Recruitment)?\s*$/i, "")
    .trim();
}

function truncateSegment(segment: string): string {
  if (segment.length <= MAX_SEGMENT) return segment;

  const sliced = segment.slice(0, Math.max(0, MAX_SEGMENT - 1));
  const lastSpace = sliced.lastIndexOf(" ");
  const base = lastSpace > 12 ? sliced.slice(0, lastSpace) : sliced;
  return `${base.trimEnd()}…`;
}

/** Keywords first, single brand suffix, always ≤ 60 characters. */
export function formatDocumentTitle(segment: string): string {
  return `${truncateSegment(stripLegacyBrand(segment))}${TITLE_SEP}${SITE_TITLE_BRAND}`;
}

/** Prefer "title — plaats", drop plaats before truncating. */
export function formatVacatureDocumentTitle(
  title: string,
  plaats: string,
  metaTitle?: string,
): string {
  if (metaTitle?.trim()) {
    return formatDocumentTitle(metaTitle);
  }

  const withPlace = `${title} — ${plaats}`;
  if (stripLegacyBrand(withPlace).length <= MAX_SEGMENT) {
    return formatDocumentTitle(withPlace);
  }

  return formatDocumentTitle(title);
}
