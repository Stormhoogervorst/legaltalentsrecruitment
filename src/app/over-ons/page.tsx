import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
import { OurStory } from "@/components/about/OurStory";
import { PageHero } from "@/components/about/PageHero";
import { TeamGrid } from "@/components/about/TeamGrid";
import { Values } from "@/components/about/Values";
import { aboutPageSchema } from "@/lib/schema";

const title = "Over Ons | Legal Talents Recruitment";
const description =
  "Opgericht door twee rechtenstudenten, nu specialist in legal recruitment voor starters, medior en senior juristen én legal tech. Maak kennis met ons.";

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
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AboutPage() {
  const jsonLd = aboutPageSchema();

  return (
    <>
      <PageHero />
      <OurStory />
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
