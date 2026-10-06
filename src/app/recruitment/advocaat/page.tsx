import type { Metadata } from "next";
import { AdvocaatCTA } from "@/components/landing/AdvocaatCTA";
import {
  AdvocaatFAQ,
  advocaatFaqItems,
} from "@/components/landing/AdvocaatFAQ";
import { AdvocaatExpertise } from "@/components/landing/AdvocaatExpertise";
import { AdvocaatHero } from "@/components/landing/AdvocaatHero";
import { AdvocaatMarkt } from "@/components/landing/AdvocaatMarkt";
import { AdvocaatPosities } from "@/components/landing/AdvocaatPosities";
import { AdvocaatResultaat } from "@/components/landing/AdvocaatResultaat";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Werving van advocaten | Legal Talents Recruitment";
const description =
  "Werving van advocaten, van stagiair tot partner. Intake op kantoor, alleen kandidaten die we zelf spraken. Persoonlijk netwerk, no cure, no pay.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/recruitment/advocaat",
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
    body: "Bij voorkeur op kantoor, zodat we jullie cultuur, dossiers en teamsamenstelling zelf zien. We bespreken hoe de ideale collega eruitziet, vakinhoudelijk en cultureel.",
  },
  {
    index: "002",
    title: "Gerichte search",
    body: "We benaderen advocaten één-op-één, vaak talent dat niet actief zoekt en niet reageert op vacaturesites. Discreet en vertrouwelijk, ook richting hun huidige kantoor.",
  },
  {
    index: "003",
    title: "Persoonlijke voordracht",
    body: "Alleen kandidaten die we zelf hebben gesproken. Bij elke voordracht leggen we uit hoe de kandidaat vakinhoudelijk past, hoe het zit met de cultuurfit, waarom die wil overstappen en wat de aandachtspunten zijn.",
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
  serviceType: "Werving en selectie van advocaten",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  audience: "Advocatenkantoren",
  areaServed: "NL",
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: advocaatFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AdvocaatRecruitmentPage() {
  return (
    <>
      <AdvocaatHero />
      <TrustStrip />
      <AdvocaatExpertise />
      <AdvocaatPosities />
      <div id="aanpak">
        <MeanderingProcess
          eyebrow="/ AANPAK"
          title="Vier stappen. / Eén match."
          steps={processSteps}
          footerText="Zelf advocaat en op zoek?"
          footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
          background="slate"
        />
      </div>
      <AdvocaatResultaat />
      <AdvocaatMarkt />
      <AdvocaatFAQ />
      <AdvocaatCTA />
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
