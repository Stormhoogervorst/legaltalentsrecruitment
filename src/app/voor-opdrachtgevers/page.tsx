import type { Metadata } from "next";
import { EmployersCTA } from "@/components/employers/EmployersCTA";
import {
  EmployersFAQ,
  employersFaqItems,
} from "@/components/employers/EmployersFAQ";
import { ForWhom } from "@/components/employers/ForWhom";
import { EmployersHero } from "@/components/employers/EmployersHero";
import { Pricing } from "@/components/employers/Pricing";
import { WhatYouGet } from "@/components/employers/WhatYouGet";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title =
  "Voor Opdrachtgevers — Werving & Selectie van Juridisch Talent | Legal Talents";
const description =
  "Op zoek naar juridisch talent dat blijft? Werving & selectie via persoonlijk netwerk. No cure, no pay. Wij vinden de match die inhoudelijk én cultureel past.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/voor-opdrachtgevers",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title,
    description,
    siteName: "Legal Talents Recruitment",
  },
};

const processSteps = [
  {
    index: "001",
    title: "Intake",
    body: "Bij voorkeur op locatie, om jullie organisatie en cultuur écht te leren kennen. We bespreken de functie, het profiel, wat goed werkt en wat niet — en wat een nieuwe collega van jullie kant kan verwachten.",
  },
  {
    index: "002",
    title: "Search",
    body: "Gericht via ons netwerk en actieve, persoonlijke search. We benaderen kandidaten één-op-één, vaak passief beschikbaar talent dat niet op vacaturesites zit. Geen massa-outreach, geen ATS-shortcuts.",
  },
  {
    index: "003",
    title: "Voorstellen",
    body: "Alleen kandidaten die wij zelf hebben gesproken en die passen. Bij elke voordracht een onderbouwing: wat brengt deze persoon mee, waarom past het inhoudelijk én cultureel, wat zijn aandachtspunten.",
  },
  {
    index: "004",
    title: "Begeleiding",
    body: "Van eerste gesprek tot de eerste werkdag — en daarna. We blijven betrokken bij onboarding en houden contact gedurende de garantieperiode. Plaatsen is een begin, geen einde.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Juridisch recruitment - werving en selectie",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  description,
  offers: {
    "@type": "Offer",
    name: "No cure, no pay",
    description:
      "Het honorarium is uitsluitend verschuldigd bij een succesvolle plaatsing.",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description:
        "Percentage van het fulltime bruto jaarsalaris, vooraf schriftelijk overeengekomen.",
    },
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: employersFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function EmployersPage() {
  return (
    <>
      <EmployersHero />
      <TrustStrip />
      <MeanderingProcess
        eyebrow="/ AANPAK"
        title="Vier stappen. / Eén match."
        steps={processSteps}
        footerText="Zelf jurist en op zoek? Bekijk hoe wij kandidaten begeleiden."
        footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
        background="slate"
      />
      <WhatYouGet />
      <ForWhom />
      <Pricing />
      <EmployersFAQ />
      <EmployersCTA />
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
