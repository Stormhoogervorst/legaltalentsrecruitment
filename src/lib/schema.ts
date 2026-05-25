import { legalPracticeAreas } from "@/lib/legal";
import type { Vacature } from "@/lib/vacatures";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://legaltalentsrecruitment.nl";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: siteUrl,
    areaServed: "NL",
    knowsAbout: legalPracticeAreas,
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Legal Talents Recruitment",
    url: siteUrl,
    inLanguage: "nl-NL",
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: siteUrl,
    areaServed: "NL",
    knowsAbout: legalPracticeAreas,
    employee: [
      {
        "@type": "Person",
        name: "Max Endrizzi",
        jobTitle: "Eigenaar",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "LLM International and European Business Law",
        },
      },
      {
        "@type": "Person",
        name: "Storm Hoogervorst",
        jobTitle: "Eigenaar",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "LLB European Law School, BBA Business Economics",
        },
      },
      {
        "@type": "Person",
        name: "Justin Bigler",
        jobTitle: "Strategic Business Partner",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "LLM Ondernemingsrecht",
        },
      },
      {
        "@type": "Person",
        name: "Frits Haringa",
        jobTitle: "Senior Legal Recruiter",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "25+ jaar als Senior Recruiter, HR Manager en Recruitment Director",
        },
      },
    ],
  };
}

function stripUndefined<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  );
}

export function getRegionFromPlaats(plaats: string) {
  const regions: Record<string, string> = {
    amsterdam: "Noord-Holland",
    rotterdam: "Zuid-Holland",
    "den haag": "Zuid-Holland",
    utrecht: "Utrecht",
    eindhoven: "Noord-Brabant",
    "den bosch": "Noord-Brabant",
    tilburg: "Noord-Brabant",
    breda: "Noord-Brabant",
    nijmegen: "Gelderland",
    arnhem: "Gelderland",
    groningen: "Groningen",
    leeuwarden: "Friesland",
    zwolle: "Overijssel",
    deventer: "Overijssel",
    maastricht: "Limburg",
    middelburg: "Zeeland",
    almere: "Flevoland",
    lelystad: "Flevoland",
    assen: "Drenthe",
  };

  return regions[plaats.trim().toLowerCase()];
}

function getEmploymentType(plaatsing: string, werkuren: string) {
  if (plaatsing === "ZZP") return "CONTRACTOR";
  if (plaatsing === "Interim") return "TEMPORARY";
  if (werkuren === "Parttime") return "PART_TIME";
  if (werkuren === "Flexibel") return "PART_TIME";

  return "FULL_TIME";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function extractJobDescriptionMarkdown(body: string) {
  const includedSections = new Set([
    "over de functie",
    "wat we vragen",
    "wat we bieden",
  ]);
  const lines = body.split(/\r?\n/);
  const descriptionLines: string[] = [];
  let isIncludedSection = false;

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+)$/);

    if (headingMatch) {
      isIncludedSection = includedSections.has(
        headingMatch[1].trim().toLowerCase(),
      );
    }

    if (isIncludedSection) {
      descriptionLines.push(line);
    }
  }

  return descriptionLines.join("\n").trim();
}

function markdownToHtml(markdown: string) {
  const html: string[] = [];
  const paragraphLines: string[] = [];
  let isListOpen = false;

  function flushParagraph() {
    if (paragraphLines.length === 0) return;

    html.push(`<p>${escapeHtml(paragraphLines.join(" "))}</p>`);
    paragraphLines.length = 0;
  }

  function closeList() {
    if (!isListOpen) return;

    html.push("</ul>");
    isListOpen = false;
  }

  for (const line of markdown.split(/\r?\n/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushParagraph();
      closeList();
      continue;
    }

    const headingMatch = trimmedLine.match(/^#{2,3}\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      closeList();
      html.push(`<h3>${escapeHtml(headingMatch[1])}</h3>`);
      continue;
    }

    const bulletMatch = trimmedLine.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      if (!isListOpen) {
        html.push("<ul>");
        isListOpen = true;
      }
      html.push(`<li>${escapeHtml(bulletMatch[1])}</li>`);
      continue;
    }

    closeList();
    paragraphLines.push(trimmedLine);
  }

  flushParagraph();
  closeList();

  return html.join("");
}

function jobDescriptionHtml(vacature: Vacature) {
  const descriptionMarkdown = extractJobDescriptionMarkdown(vacature.body);

  return markdownToHtml(descriptionMarkdown || vacature.excerpt);
}

function normalizeSalaryNumber(value: string) {
  const usesThousandsSeparator = /^[\d.,]+[,.]\d{3}$/.test(value);
  const normalized = usesThousandsSeparator
    ? value.replace(/[.,]/g, "")
    : value.replace(/\./g, "").replace(",", ".");
  const parsedValue = Number.parseFloat(normalized);

  return Number.isFinite(parsedValue) ? parsedValue : undefined;
}

function parseSalaryRange(salarisIndicatie?: string) {
  if (!salarisIndicatie) return undefined;

  const rangeMatch = salarisIndicatie.match(
    /€?\s*(\d[\d.,]*\s*k?)\s*(?:-|\u2013|\u2014|tot)\s*€?\s*(\d[\d.,]*\s*k?)/i,
  );

  if (!rangeMatch) return undefined;

  const [, rawMin, rawMax] = rangeMatch;
  const minUsesK = /k/i.test(rawMin);
  const maxUsesK = /k/i.test(rawMax);
  const minNumber = normalizeSalaryNumber(rawMin.replace(/k/i, "").trim());
  const maxNumber = normalizeSalaryNumber(rawMax.replace(/k/i, "").trim());

  if (minNumber === undefined || maxNumber === undefined) return undefined;

  const parsedMin = Math.round(minUsesK ? minNumber * 1000 : minNumber);
  const parsedMax = Math.round(maxUsesK ? maxNumber * 1000 : maxNumber);

  if (parsedMin <= 0 || parsedMax <= 0 || parsedMin > parsedMax) {
    return undefined;
  }

  return {
    minValue: parsedMin,
    maxValue: parsedMax,
  };
}

export function jobPostingSchema(vacature: Vacature) {
  const salaryRange = parseSalaryRange(vacature.salarisIndicatie);

  return stripUndefined({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacature.title,
    description: jobDescriptionHtml(vacature),
    datePosted: vacature.publishedAt,
    validThrough: vacature.validThrough || undefined,
    employmentType: getEmploymentType(vacature.plaatsing, vacature.werkuren),
    hiringOrganization: stripUndefined({
      "@type": "Organization",
      name: vacature.opdrachtgeverVertrouwelijk
        ? "Vertrouwelijk"
        : vacature.opdrachtgeverNaam,
      sameAs: vacature.opdrachtgeverVertrouwelijk ? undefined : siteUrl,
    }),
    jobLocation: {
      "@type": "Place",
      address: stripUndefined({
        "@type": "PostalAddress",
        addressLocality: vacature.plaats,
        addressRegion: getRegionFromPlaats(vacature.plaats),
        addressCountry: "NL",
      }),
    },
    directApply: true,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Netherlands",
    },
    baseSalary: salaryRange
      ? {
          "@type": "MonetaryAmount",
          currency: "EUR",
          value: {
            "@type": "QuantitativeValue",
            minValue: salaryRange.minValue,
            maxValue: salaryRange.maxValue,
            unitText: "YEAR",
          },
        }
      : undefined,
  });
}
