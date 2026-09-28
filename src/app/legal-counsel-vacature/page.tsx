import type { Metadata } from "next";
import { LegalCounselVacatureCTA } from "@/components/landing/LegalCounselVacatureCTA";
import {
  LegalCounselVacatureFAQ,
  legalCounselVacatureFaqItems,
} from "@/components/landing/LegalCounselVacatureFAQ";
import { LegalCounselVacatureHero } from "@/components/landing/LegalCounselVacatureHero";
import { LegalCounselVacatureProbleem } from "@/components/landing/LegalCounselVacatureProbleem";
import { LegalCounselVacatureRollen } from "@/components/landing/LegalCounselVacatureRollen";
import { LegalCounselVacatureVoorWie } from "@/components/landing/LegalCounselVacatureVoorWie";
import { LegalCounselVacatureWaarom } from "@/components/landing/LegalCounselVacatureWaarom";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Legal counsel vacature | Legal Talents Recruitment";
const description =
  "Op zoek naar een legal counsel vacature? Legal Talents matcht discreet met inhouse-rollen, vaak buiten Indeed en LinkedIn. Kennismaking kosteloos.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/legal-counsel-vacature",
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
    title: "Intake",
    body: "Een vrijblijvend gesprek: achtergrond, rechtsgebied, seniority en wat voor jou telt in team en cultuur. Geen cv-intake-machinerie — we willen jou begrijpen voordat we over een legal counsel vacature praten.",
  },
  {
    index: "002",
    title: "Matching",
    body: "Pas als we elkaar goed begrijpen, brengen we relevante counsel-rollen ter sprake — openstaand of via stille search. Alleen functies die passen bij niveau, vak en moment.",
  },
  {
    index: "003",
    title: "Introductie",
    body: "Wij stellen je alleen voor na expliciete toestemming. Vooraf bespreken we wat de opdrachtgever zoekt, wat zij bieden, en hoe de cultuur voelt. Jij beslist of we doorzetten.",
  },
  {
    index: "004",
    title: "Begeleiding",
    body: "Van eerste gesprek tot ondertekening, en daarna. Voorbereiding, onderhandeling en de eerste periode in de nieuwe rol. Eerlijke feedback, beide kanten op.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legal counsel vacature matching",
  serviceType: "Matching van legal counsel met inhouse juridische rollen",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  audience: [
    "Legal counsel",
    "Corporate counsel",
    "Opdrachtgevers die een legal counsel zoeken",
  ],
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: legalCounselVacatureFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function LegalCounselVacaturePage() {
  return (
    <>
      <LegalCounselVacatureHero />
      <TrustStrip />
      <LegalCounselVacatureProbleem />
      <LegalCounselVacatureVoorWie />
      <LegalCounselVacatureRollen />
      <div id="werkwijze">
        <MeanderingProcess
          eyebrow="/ WERKWIJZE"
          title="Vier stappen. / Geen druk."
          steps={processSteps}
          footerText="Opdrachtgever en een legal counsel nodig?"
          footerLink={{
            label: "Legal counsel werven",
            href: "/recruitment/legal-counsel",
          }}
          background="slate"
        />
      </div>
      <LegalCounselVacatureWaarom />
      <LegalCounselVacatureFAQ />
      <LegalCounselVacatureCTA />
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
