import type { Metadata } from "next";
import { GeneralCounselHero } from "@/components/landing/GeneralCounselHero";
import { GeneralCounselRol } from "@/components/landing/GeneralCounselRol";
import { GeneralCounselMoment } from "@/components/landing/GeneralCounselMoment";
import { GeneralCounselAanpak } from "@/components/landing/GeneralCounselAanpak";
import { GeneralCounselOrganisaties } from "@/components/landing/GeneralCounselOrganisaties";
import {
  GeneralCounselFAQ,
  generalCounselFaqItems,
} from "@/components/landing/GeneralCounselFAQ";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "General Counsel werving & recruitment | Legal Talents";
const description =
  "Een general counsel werven die juridische strategie én directieverantwoordelijkheid combineert? Wij vinden de juiste persoon via persoonlijke search. No cure, no pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/recruitment/general-counsel",
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
  serviceType: "Recruitment general counsel",
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
  mainEntity: generalCounselFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function GeneralCounselRecruitmentPage() {
  return (
    <>
      <GeneralCounselHero />
      <TrustStrip />
      <GeneralCounselRol />
      <GeneralCounselMoment />
      <GeneralCounselAanpak />
      <GeneralCounselOrganisaties />
      <GeneralCounselFAQ />
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
