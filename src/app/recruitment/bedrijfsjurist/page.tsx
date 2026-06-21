import type { Metadata } from "next";
import { BedrijfsjuristCTA } from "@/components/landing/BedrijfsjuristCTA";
import {
  BedrijfsjuristFAQ,
  bedrijfsjuristFaqItems,
} from "@/components/landing/BedrijfsjuristFAQ";
import { BedrijfsjuristExpertise } from "@/components/landing/BedrijfsjuristExpertise";
import { BedrijfsjuristHero } from "@/components/landing/BedrijfsjuristHero";
import { BedrijfsjuristMarkt } from "@/components/landing/BedrijfsjuristMarkt";
import { BedrijfsjuristPosities } from "@/components/landing/BedrijfsjuristPosities";
import { BedrijfsjuristResultaat } from "@/components/landing/BedrijfsjuristResultaat";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title =
  "Werving van Bedrijfsjuristen — Recruitment voor Corporates | Legal Talents";
const description =
  "Werving van bedrijfsjuristen en in-house counsel. Specialist in juridische recruitment voor corporates en mid-market. Persoonlijk netwerk, no cure no pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/recruitment/bedrijfsjurist",
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
    title: "Intake & business context",
    body: "Bij voorkeur op kantoor — om jullie organisatie, fase en juridische uitdagingen écht te leren kennen. Welke business-context, welke rol binnen het team, welke groei-ambitie?",
  },
  {
    index: "002",
    title: "Gerichte search in beide markten",
    body: "Wij benaderen zowel in-house juristen die open staan voor een overstap, als advocaten die naar de business-kant willen. Geen vacaturesite, maar persoonlijke één-op-één outreach.",
  },
  {
    index: "003",
    title: "Voordracht met business-onderbouwing",
    body: "Bij elke kandidaat een onderbouwing: vakinhoudelijke fit, business-sensitiviteit, motivatie voor in-house, persoonlijke vergelijking met andere kandidaten in het traject.",
  },
  {
    index: "004",
    title: "Begeleiding tot start",
    body: "Van eerste gesprek tot ondertekening, en tijdens de eerste maanden. Bij in-house posities — vooral bij de eerste jurist — is een goede landing crucial. Wij blijven betrokken.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Werving en selectie van bedrijfsjuristen en in-house counsel",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  audience: "Corporates en mid-market organisaties",
  areaServed: "NL",
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: bedrijfsjuristFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BedrijfsjuristRecruitmentPage() {
  return (
    <>
      <BedrijfsjuristHero />
      <TrustStrip />
      <BedrijfsjuristExpertise />
      <BedrijfsjuristPosities />
      <div id="aanpak">
        <MeanderingProcess
          eyebrow="/ AANPAK"
          title="Vier stappen. / Eén match."
          steps={processSteps}
          footerText="Zelf bedrijfsjurist en op zoek?"
          footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
          background="slate"
        />
      </div>
      <BedrijfsjuristResultaat />
      <BedrijfsjuristMarkt />
      <BedrijfsjuristFAQ />
      <BedrijfsjuristCTA />
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
