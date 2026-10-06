import type { Metadata } from "next";
import { CandidatesCTA } from "@/components/candidates/CandidatesCTA";
import {
  CandidatesFAQ,
  candidatesFaqItems,
} from "@/components/candidates/CandidatesFAQ";
import { CandidatesForWhom } from "@/components/candidates/CandidatesForWhom";
import { PageHero } from "@/components/shared/PageHero";
import { DiscretionPromise } from "@/components/candidates/DiscretionPromise";
import { WhatWeOffer } from "@/components/candidates/WhatWeOffer";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";

const title = "Nieuwe juridische functie zoeken | Legal Talents Recruitment";
const description =
  "Nieuwe juridische functie? We spreken je eerst, bespreken alleen posities die passen en stellen je alleen voor met jouw akkoord. Kosteloos, vertrouwelijk.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/voor-kandidaten",
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
    title: "Kennismaking",
    body: "Een vrijblijvend gesprek, telefonisch, digitaal of op locatie. We willen weten waar je vandaan komt en waar je naartoe wilt, en wat je belangrijk vindt in werk en cultuur.",
  },
  {
    index: "002",
    title: "Match",
    body: "Pas als we elkaar goed begrijpen, bespreken we posities, uit ons netwerk of via gerichte search. Geen massamailing met losse vacatures. Alleen functies die passen bij wat we hebben besproken.",
  },
  {
    index: "003",
    title: "Voorstellen",
    body: "We stellen je alleen voor met jouw toestemming. Vooraf vertellen we wat de opdrachtgever zoekt, wat ze bieden en hoe de cultuur is. Dat weten we omdat we bij hen op locatie zijn geweest. Jij beslist of we doorzetten.",
  },
  {
    index: "004",
    title: "Begeleiding",
    body: "We begeleiden je van het eerste gesprek tot na je eerste werkdag: bij de voorbereiding, de salarisonderhandeling en de eerste maanden in de nieuwe functie. Klikt het toch niet, dan geven we eerlijke feedback, beide kanten op.",
  },
];

const organizationId = "https://www.legaltalentsrecruitment.nl/#organization";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Loopbaanbegeleiding voor juridisch talent",
  provider: {
    "@type": "Organization",
    "@id": organizationId,
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  description,
  audience: "Juristen, advocaten, bedrijfsjuristen en in-house counsel",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: candidatesFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        variant="light"
        title="Je volgende juridische functie, vertrouwelijk besproken."
        subtitle="Een gesprek hoeft niet tot iets te leiden. We denken vrijblijvend met je mee over je loopbaan en bespreken alleen juridische functies die passen. Wat je vertelt, blijft bij ons."
        ctaLabel="Plan een gesprek →"
        ctaHref="/contact"
      />
      <MeanderingProcess
        eyebrow="/ ONZE AANPAK"
        title="Vier stappen. / Geen druk."
        steps={processSteps}
        footerText="Werkgever? Bekijk hoe wij werving & selectie voor opdrachtgevers doen."
        footerLink={{ label: "Voor opdrachtgevers", href: "/voor-opdrachtgevers" }}
        background="slate"
      />
      <WhatWeOffer />
      <CandidatesForWhom />
      <DiscretionPromise />
      <CandidatesFAQ />
      <CandidatesCTA />
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
