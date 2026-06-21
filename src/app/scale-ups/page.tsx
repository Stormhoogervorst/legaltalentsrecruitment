import type { Metadata } from "next";
import { ScaleUpsHero } from "@/components/landing/ScaleUpsHero";
import { ScaleUpsWanneer } from "@/components/landing/ScaleUpsWanneer";
import { ScaleUpsGeneralist } from "@/components/landing/ScaleUpsGeneralist";
import { ScaleUpsPosities } from "@/components/landing/ScaleUpsPosities";
import { ScaleUpsZuidas } from "@/components/landing/ScaleUpsZuidas";
import { ScaleUpsAanpak } from "@/components/landing/ScaleUpsAanpak";
import {
  ScaleUpsFAQ,
  scaleUpsFaqItems,
} from "@/components/landing/ScaleUpsFAQ";
import { ScaleUpsCTA } from "@/components/landing/ScaleUpsCTA";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Legal recruitment voor startups & scale-ups | Legal Talents";
const description =
  "Je eerste jurist of general counsel werven voor je scale-up? Wij vinden juridisch talent dat past bij de snelheid en cultuur van een groeiend bedrijf. No cure, no pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/scale-ups",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Werving en selectie van juridisch talent voor startups en scale-ups",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  audience: "Startups en scale-ups",
  areaServed: "NL",
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: scaleUpsFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ScaleUpsPage() {
  return (
    <>
      <ScaleUpsHero />
      <TrustStrip />
      <ScaleUpsWanneer />
      <ScaleUpsGeneralist />
      <ScaleUpsPosities />
      <ScaleUpsZuidas />
      <ScaleUpsAanpak />
      <ScaleUpsFAQ />
      <ScaleUpsCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
    </>
  );
}
