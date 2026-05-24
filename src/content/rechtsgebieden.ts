export interface Rechtsgebied {
  slug: string;
  title: string;
  description?: string;
  order: number;
}

export const rechtsgebieden: Rechtsgebied[] = [
  { slug: "ondernemingsrecht", title: "Ondernemingsrecht", order: 1 },
  { slug: "arbeidsrecht", title: "Arbeidsrecht", order: 2 },
  { slug: "vastgoed-bouw", title: "Vastgoed & Bouw", order: 3 },
  { slug: "insolventie", title: "Insolventie", order: 4 },
  { slug: "it-privacy", title: "IT & Privacy", order: 5 },
  { slug: "familie-erfrecht", title: "Familie- en Erfrecht", order: 6 },
  { slug: "fiscaal-recht", title: "Fiscaal Recht", order: 7 },
  { slug: "strafrecht", title: "Strafrecht", order: 8 },
  { slug: "litigation", title: "Litigation", order: 9 },
];

export function getRechtsgebiedBySlug(slug: string): Rechtsgebied | undefined {
  return rechtsgebieden.find((r) => r.slug === slug);
}
