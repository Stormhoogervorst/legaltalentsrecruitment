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

const title =
  "Werving van Legal Engineers — Recruitment voor Juridische Innovatie | Legal Talents";
const description =
  "Werving van Legal Engineers — de brug tussen recht en technologie. Specialist in juridische recruitment. Persoonlijk netwerk, no cure no pay.";

export const metadata: Metadata = {
  title,
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
    body: "Bij voorkeur op locatie — om te begrijpen welke tools, processen en teamsamenstelling er al zijn, en waar de behoefte aan legal engineering vandaan komt. Automatisering, contract lifecycle, legal design of tooling?",
  },
  {
    index: "002",
    title: "Gerichte search",
    body: "Geen massa-outreach. Wij benaderen het zeldzame hybride talent dat vaak niet als 'recruitmentbaar' op vacaturesites staat — juristen met technische affiniteit, developers met juridische interesse, legal ops-specialisten.",
  },
  {
    index: "003",
    title: "Persoonlijke voordracht",
    body: "Alleen kandidaten die wij zelf gesproken hebben. Bij elke voordracht een onderbouwing: technische en juridische fit, motivatie voor de overstap, aandachtspunten.",
  },
  {
    index: "004",
    title: "Begeleiding tot indiensttreding",
    body: "Van eerste gesprek tot het tekenen van de overeenkomst — en tijdens de eerste maanden. Onboarding, garantieregeling en evaluatie.",
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
