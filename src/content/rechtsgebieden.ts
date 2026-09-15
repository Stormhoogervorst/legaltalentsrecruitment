export interface Rechtsgebied {
  slug: string;
  title: string;
  description?: string;
  order: number;
}

export const rechtsgebieden: Rechtsgebied[] = [
  { slug: "ondernemingsrecht", title: "Ondernemingsrecht", order: 1 },
  { slug: "financieel-recht", title: "Financieel Recht", order: 2 },
  { slug: "arbeidsrecht", title: "Arbeidsrecht", order: 3 },
  { slug: "vastgoed-bouw", title: "Vastgoed & Bouw", order: 4 },
  { slug: "insolventie", title: "Insolventie", order: 5 },
  { slug: "it-privacy", title: "IT & Privacy", order: 6 },
  { slug: "familie-erfrecht", title: "Familie- en Erfrecht", order: 7 },
  { slug: "fiscaal-recht", title: "Fiscaal Recht", order: 8 },
  { slug: "strafrecht", title: "Strafrecht", order: 9 },
  { slug: "litigation", title: "Litigation", order: 10 },
  { slug: "personenschade", title: "Personenschade", order: 11 },
  { slug: "bouw-energierecht", title: "Bouw- en energierecht", order: 12 },
  { slug: "aanbesteding", title: "Aanbesteding", order: 13 },
  { slug: "legal-tech", title: "Legal tech", order: 14 },
];

export function getRechtsgebiedBySlug(slug: string): Rechtsgebied | undefined {
  return rechtsgebieden.find((r) => r.slug === slug);
}
