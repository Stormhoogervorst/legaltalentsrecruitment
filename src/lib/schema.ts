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

function employmentTypeFor(werkuren?: string) {
  if (werkuren === "parttime") {
    return "PART_TIME";
  }

  if (werkuren === "flexibel") {
    return ["FULL_TIME", "PART_TIME"];
  }

  return "FULL_TIME";
}

function stripUndefined<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  );
}

export function jobPostingSchema(vacature: Vacature) {
  const hiringOrganization =
    vacature.opdrachtgeverVertrouwelijk || !vacature.opdrachtgeverNaam
      ? {
          "@type": "Organization",
          name: "Legal Talents Recruitment",
          sameAs: siteUrl,
        }
      : {
          "@type": "Organization",
          name: vacature.opdrachtgeverNaam,
        };

  return stripUndefined({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacature.title,
    description: vacature.excerpt,
    datePosted: vacature.publishedAt,
    validThrough: vacature.validThrough,
    employmentType: employmentTypeFor(vacature.werkuren),
    hiringOrganization,
    jobLocation: {
      "@type": "Place",
      address: stripUndefined({
        "@type": "PostalAddress",
        streetAddress: vacature.adres?.straat,
        postalCode: vacature.adres?.postcode,
        addressLocality: vacature.plaats,
        addressCountry:
          vacature.adres?.land === "Nederland"
            ? "NL"
            : (vacature.adres?.land ?? "NL"),
      }),
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Nederland",
    },
    baseSalary: vacature.salarisIndicatie
      ? {
          "@type": "MonetaryAmount",
          currency: "EUR",
          value: {
            "@type": "QuantitativeValue",
            value: vacature.salarisIndicatie,
          },
        }
      : undefined,
  });
}
