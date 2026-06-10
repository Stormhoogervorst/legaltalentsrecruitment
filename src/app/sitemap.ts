import { MetadataRoute } from "next";
import { getAllVacatures } from "@/lib/vacatures";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://legaltalentsrecruitment.nl";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/vacatures`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/voor-opdrachtgevers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/scale-ups`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/voor-kandidaten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Nieuwe /recruitment/*-landingspagina's: voeg hier simpelweg de slug toe.
  const recruitmentSlugs = [
    "advocaat",
    "bedrijfsjurist",
    "compliance-officer",
    "general-counsel",
    "legal-counsel",
  ];
  const recruitmentPages: MetadataRoute.Sitemap = recruitmentSlugs.map((slug) => ({
    url: `${baseUrl}/recruitment/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const vacatures = await getAllVacatures();
  const vacaturePages: MetadataRoute.Sitemap = vacatures.map((vacature) => ({
    url: `${baseUrl}/vacatures/${vacature.slug}`,
    lastModified: new Date(vacature.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...recruitmentPages, ...vacaturePages];
}
