import type { Metadata } from "next";
import { LegalEngineerCTA } from "@/components/landing/LegalEngineerCTA";
import {
  LegalEngineerFAQ,
  legalEngineerFaqItems,
} from "@/components/landing/LegalEngineerFAQ";
import { LegalEngineerExpertise } from "@/components/landing/LegalEngineerExpertise";
import { LegalEngineerHero } from "@/components/landing/LegalEngineerHero";
import { LegalEngineerMarkt } from "@/components/landing/LegalEngineerMarkt";
import { LegalEngineerPosities } from "@/components/landing/LegalEngineerPosities";
import { LegalEngineerResultaat } from "@/components/landing/LegalEngineerResultaat";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Werving legal engineers | Legal Talents Recruitment";
const description =
  "Werving van legal engineers en legal AI-specialisten, de brug tussen recht en technologie. Persoonlijk netwerk. No cure, no pay.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/recruitment/legal-engineer",
  },
  robots: {
    index: true,
    follow: true,
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

const processSteps = [
  {
    index: "001",
    title: "Intake & profiel",
    body: "Bij voorkeur op locatie, zodat we zien welke tools, processen en teamsamenstelling er al zijn en waar de behoefte aan legal engineering vandaan komt: automatisering, contract lifecycle, legal design of tooling.",
  },
  {
    index: "002",
    title: "Gerichte search",
    body: "We benaderen hybride talent dat niet op vacaturesites staat: juristen met technische affiniteit, developers met juridische interesse en legal ops-specialisten.",
  },
  {
    index: "003",
    title: "Persoonlijke voordracht",
    body: "Alleen kandidaten die we zelf hebben gesproken. Bij elke voordracht leggen we uit hoe de kandidaat technisch en juridisch past, waarom die wil overstappen en wat de aandachtspunten zijn.",
  },
  {
    index: "004",
    title: "Begeleiding tot indiensttreding",
    body: "We begeleiden van het eerste gesprek tot het tekenen van de overeenkomst en tijdens de eerste maanden: onboarding, evaluatie en, als vooraf afgesproken, de garantieregeling.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Legal Engineer Recruitment",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  audience: "Corporates, advocatenkantoren en legal tech-bedrijven",
  areaServed: "NL",
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: legalEngineerFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function LegalEngineerRecruitmentPage() {
  return (
    <>
      <LegalEngineerHero />
      <TrustStrip />
      <LegalEngineerExpertise />
      <LegalEngineerPosities />
      <div id="aanpak">
        <MeanderingProcess
          eyebrow="/ AANPAK"
          title="Vier stappen. / Eén match."
          steps={processSteps}
          footerText="Zelf legal engineer en op zoek?"
          footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
          background="slate"
        />
      </div>
      <LegalEngineerResultaat />
      <LegalEngineerMarkt />
      <LegalEngineerFAQ />
      <LegalEngineerCTA />
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
