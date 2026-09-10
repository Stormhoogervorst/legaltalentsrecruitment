export const blogAudiences = ["kandidaat", "opdrachtgever"] as const;

export type BlogAudience = (typeof blogAudiences)[number];

export const blogCategories = {
  loopbaan: {
    slug: "loopbaan",
    title: "Loopbaan",
    audience: "kandidaat",
  },
  markt: {
    slug: "markt",
    title: "Markt",
    audience: "opdrachtgever",
  },
  advocatuur: {
    slug: "advocatuur",
    title: "Advocatuur",
    audience: "kandidaat",
  },
  "in-house": {
    slug: "in-house",
    title: "In-house",
    audience: "kandidaat",
  },
  recruitment: {
    slug: "recruitment",
    title: "Recruitment",
    audience: "opdrachtgever",
  },
} as const;

export type BlogCategorySlug = keyof typeof blogCategories;
export type BlogCategory = (typeof blogCategories)[BlogCategorySlug];

export const blogCategorySlugs = Object.keys(blogCategories) as [
  BlogCategorySlug,
  ...BlogCategorySlug[],
];

export const audienceCtas = {
  kandidaat: {
    primary: { href: "/vacatures", label: "Bekijk vacatures →" },
    secondary: { href: "/voor-kandidaten", label: "Meer voor kandidaten" },
  },
  opdrachtgever: {
    primary: { href: "/contact", label: "Plan een kennismaking →" },
    secondary: {
      href: "/voor-opdrachtgevers",
      label: "Meer voor opdrachtgevers",
    },
  },
} as const;

const relatedPageLabels: Record<string, string> = {
  "/vacatures": "Vacatures",
  "/voor-kandidaten": "Voor kandidaten",
  "/voor-opdrachtgevers": "Voor opdrachtgevers",
  "/over-ons": "Over ons",
  "/contact": "Contact",
  "/scale-ups": "Scale-ups",
  "/recruitment/advocaat": "Advocaat recruitment",
  "/recruitment/bedrijfsjurist": "Bedrijfsjurist recruitment",
  "/recruitment/compliance-officer": "Compliance officer recruitment",
  "/recruitment/general-counsel": "General counsel recruitment",
  "/recruitment/legal-counsel": "Legal counsel recruitment",
  "/recruitment/legal-engineer": "Legal engineer recruitment",
};

export function getBlogCategory(slug: string): BlogCategory {
  if (slug in blogCategories) {
    return blogCategories[slug as BlogCategorySlug];
  }

  throw new Error(`Onbekende blog-categorie: ${slug}`);
}

export function getRelatedPageLabel(href: string): string {
  if (relatedPageLabels[href]) return relatedPageLabels[href];

  const segment = href.split("/").filter(Boolean).at(-1) ?? href;
  return segment.replace(/-/g, " ");
}
