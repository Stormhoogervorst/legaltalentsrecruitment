import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
import { PageHero } from "@/components/about/PageHero";
import { TeamGrid } from "@/components/about/TeamGrid";
import { Values } from "@/components/about/Values";
import { aboutPageSchema } from "@/lib/schema";

const title = "Over Ons — Legal Talents Recruitment";
const description =
  "Een compact team van juristen en recruiters dat legal recruitment persoonlijker en kwalitatiever maakt. Kwaliteit, service en vertrouwen — ouderwets hoog in het vaandel.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/over-ons",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title,
    description,
    siteName: "Legal Talents Recruitment",
  },
};

export default function AboutPage() {
  const jsonLd = aboutPageSchema();

  return (
    <>
      <PageHero />
      <TeamGrid />
      <Values />
      <AboutCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
