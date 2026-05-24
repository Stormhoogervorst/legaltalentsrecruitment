import type { Metadata } from "next";
import { CandidatesCTA } from "@/components/candidates/CandidatesCTA";
import {
  CandidatesFAQ,
  candidatesFaqItems,
} from "@/components/candidates/CandidatesFAQ";
import { CandidatesForWhom } from "@/components/candidates/CandidatesForWhom";
import { CandidatesHero } from "@/components/candidates/CandidatesHero";
import { DiscretionPromise } from "@/components/candidates/DiscretionPromise";
import { WhatWeOffer } from "@/components/candidates/WhatWeOffer";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";

const title = "Voor Juridisch Werknemers | Legal Talents";
const description =
  "Op zoek naar een nieuwe juridische functie? Wij krijgen doorlopend vacatures binnen, staat er op dit moment niks online wat aansluit op jouw wensen? Laat dan je gegevens achter zodat wij contact kunnen opnemen als wij een nieuwe passende vacature hebben.";

export const metadata: Metadata = {
  title,
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
    body: "Een vrijblijvend gesprek — telefonisch, digitaal of op locatie. We willen jou leren kennen: wat je achtergrond is, waar je naartoe wilt, wat voor jou écht belangrijk is in werk en cultuur.",
  },
  {
    index: "002",
    title: "Match",
    body: "Pas als we elkaar goed begrijpen, brengen wij relevante posities ter sprake — uit ons netwerk of via gerichte search. Geen massa-mailing met losse vacatures. Alleen functies die passen bij wat we hebben besproken.",
  },
  {
    index: "003",
    title: "Voorstellen",
    body: "Wij introduceren je alleen na expliciete toestemming. Vooraf bespreken we wat de opdrachtgever zoekt, wat zij bieden, en wat de cultuur is. Jij beslist of we doorzetten.",
  },
  {
    index: "004",
    title: "Begeleiding",
    body: "Van eerste gesprek tot ondertekening, en daarna. We helpen bij voorbereiding, salarisonderhandeling en de eerste maanden in de nieuwe functie. Ook als het tegen verwachting niet klikt: eerlijke feedback, beide kanten op.",
  },
];

const organizationId = "https://legaltalentsrecruitment.nl/#organization";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Loopbaanbegeleiding voor juridisch talent",
  provider: {
    "@type": "Organization",
    "@id": organizationId,
    name: "Legal Talents Recruitment",
    url: "https://legaltalentsrecruitment.nl",
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
      <CandidatesHero />
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
