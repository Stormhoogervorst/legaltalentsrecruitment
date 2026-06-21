import type { Metadata } from "next";
import { LegalCounselHero } from "@/components/landing/LegalCounselHero";
import { LegalCounselRol } from "@/components/landing/LegalCounselRol";
import { LegalCounselUitdaging } from "@/components/landing/LegalCounselUitdaging";
import { LegalCounselAanpak } from "@/components/landing/LegalCounselAanpak";
import { LegalCounselOrganisaties } from "@/components/landing/LegalCounselOrganisaties";
import {
  LegalCounselFAQ,
  legalCounselFaqItems,
} from "@/components/landing/LegalCounselFAQ";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Legal Counsel werving & recruitment | Legal Talents";
const description =
  "Een legal counsel werven die de dagelijkse juridische praktijk draagt — contracten, advies en compliance? Wij vinden de juiste jurist via persoonlijke search. No cure, no pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/recruitment/legal-counsel",
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
  serviceType: "Recruitment legal counsel",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  audience: "Startups, scale-ups en corporates",
  areaServed: "NL",
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: legalCounselFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function LegalCounselRecruitmentPage() {
  return (
    <>
      <LegalCounselHero />
      <TrustStrip />
      <LegalCounselRol />
      <LegalCounselUitdaging />
      <LegalCounselAanpak />
      <LegalCounselOrganisaties />
      <LegalCounselFAQ />
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
