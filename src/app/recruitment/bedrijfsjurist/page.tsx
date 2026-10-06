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

const title = "Werving bedrijfsjuristen | Legal Talents Recruitment";
const description =
  "Werving van bedrijfsjuristen en in-house counsel voor corporates en mid-market. Intake op locatie, alleen kandidaten die we zelf spraken. No cure, no pay.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
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
    body: "Bij voorkeur op kantoor, zodat we jullie organisatie, fase en juridische uitdagingen zelf zien. We bespreken de business-context, de rol binnen het team en de groei-ambitie.",
  },
  {
    index: "002",
    title: "Gerichte search in beide markten",
    body: "We benaderen in-house juristen die openstaan voor een overstap en advocaten die naar de business-kant willen, persoonlijk en één-op-één. Geen vacaturesite.",
  },
  {
    index: "003",
    title: "Voordracht met business-onderbouwing",
    body: "Bij elke kandidaat leggen we uit hoe die vakinhoudelijk past, hoe die met de business omgaat, waarom die in-house wil werken en hoe die zich verhoudt tot de andere kandidaten. We stellen alleen kandidaten voor die we zelf hebben gesproken.",
  },
  {
    index: "004",
    title: "Begeleiding tot start",
    body: "We begeleiden van het eerste gesprek tot ondertekening en tijdens de eerste maanden. Bij in-house posities, vooral bij de eerste jurist, is een goede landing belangrijk. We blijven betrokken.",
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
          footerText="Zelf bedrijfsjurist en op zoek naar een vacature?"
          footerLink={{
            label: "Bedrijfsjurist vacature",
            href: "/bedrijfsjurist-vacature",
          }}
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
