import type { Metadata } from "next";
import { EmployersCTA } from "@/components/employers/EmployersCTA";
import {
  EmployersFAQ,
  employersFaqItems,
} from "@/components/employers/EmployersFAQ";
import { ForWhom } from "@/components/employers/ForWhom";
import { PageHero } from "@/components/shared/PageHero";
import { Pricing } from "@/components/employers/Pricing";
import { WhatYouGet } from "@/components/employers/WhatYouGet";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Werving juridisch talent | Legal Talents Recruitment";
const description =
  "Werving juridisch talent dat blijft. Intake bij jullie op locatie, alleen kandidaten die we zelf uitgebreid spraken. No cure, no pay.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
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
    body: "Bij voorkeur op locatie, zodat we jullie organisatie en cultuur zelf zien. We bespreken de functie en het profiel, wat goed werkt en wat niet, en wat een nieuwe collega bij jullie mag verwachten.",
  },
  {
    index: "002",
    title: "Search",
    body: "Gericht via ons netwerk en actieve, persoonlijke search. We benaderen kandidaten één-op-één, vaak passief beschikbaar talent dat niet op vacaturesites zit.",
  },
  {
    index: "003",
    title: "Voorstellen",
    body: "Alleen kandidaten die we zelf hebben gesproken en die passen. Bij elke voordracht leggen we uit wat deze persoon meebrengt, waarom het inhoudelijk en cultureel past en wat de aandachtspunten zijn.",
  },
  {
    index: "004",
    title: "Begeleiding",
    body: "We begeleiden van het eerste gesprek tot na de eerste werkdag. We blijven betrokken bij de onboarding en houden contact, ook als er een garantieperiode is afgesproken.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Juridisch recruitment - werving en selectie",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
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
      <PageHero
        variant="light"
        title={["Werving van", "juridisch talent."]}
        subtitle="Juristen die blijven. Geen vijftig cv's, maar drie kandidaten die passen. We komen bij jullie langs voor de intake en jullie betalen pas bij een succesvolle plaatsing."
        ctaLabel="Plan een intake →"
        ctaHref="/contact"
      />
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
