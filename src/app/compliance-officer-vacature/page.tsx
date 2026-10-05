import type { Metadata } from "next";
import { ComplianceOfficerVacatureCTA } from "@/components/landing/ComplianceOfficerVacatureCTA";
import {
  ComplianceOfficerVacatureFAQ,
  complianceOfficerVacatureFaqItems,
} from "@/components/landing/ComplianceOfficerVacatureFAQ";
import { ComplianceOfficerVacatureHero } from "@/components/landing/ComplianceOfficerVacatureHero";
import { ComplianceOfficerVacatureProbleem } from "@/components/landing/ComplianceOfficerVacatureProbleem";
import { ComplianceOfficerVacatureRollen } from "@/components/landing/ComplianceOfficerVacatureRollen";
import { ComplianceOfficerVacatureVoorWie } from "@/components/landing/ComplianceOfficerVacatureVoorWie";
import { ComplianceOfficerVacatureWaarom } from "@/components/landing/ComplianceOfficerVacatureWaarom";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Compliance officer vacature | Legal Talents Recruitment";
const description =
  "Op zoek naar een compliance officer vacature? Legal Talents matcht je discreet met rollen die vaak niet op Indeed of LinkedIn staan. Kennismaking kosteloos.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/compliance-officer-vacature",
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
    body: "Een vrijblijvend gesprek: achtergrond, sector, seniority en of je in de eerste of tweede lijn wilt werken. Geen cv-intake-machinerie — we willen jou begrijpen voordat we over een compliance officer vacature praten.",
  },
  {
    index: "002",
    title: "Matching",
    body: "Pas als we elkaar goed begrijpen, brengen we relevante compliance-rollen ter sprake — openstaand of via stille search. Alleen functies die passen bij niveau, sector en moment. Veel van die rollen staan niet op een jobboard.",
  },
  {
    index: "003",
    title: "Introductie",
    body: "Wij stellen je alleen voor na expliciete toestemming. Vooraf bespreken we wat de opdrachtgever zoekt, welke scope de rol heeft, en hoe de cultuur voelt. Jij beslist of we doorzetten.",
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
  name: "Compliance officer vacature matching",
  serviceType: "Matching van compliance officers met compliance-rollen",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  audience: [
    "Compliance officers",
    "Compliance specialists",
    "Opdrachtgevers die een compliance officer zoeken",
  ],
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: complianceOfficerVacatureFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ComplianceOfficerVacaturePage() {
  return (
    <>
      <ComplianceOfficerVacatureHero />
      <TrustStrip />
      <ComplianceOfficerVacatureProbleem />
      <ComplianceOfficerVacatureVoorWie />
      <ComplianceOfficerVacatureRollen />
      <div id="werkwijze">
        <MeanderingProcess
          eyebrow="/ WERKWIJZE"
          title="Vier stappen. / Geen druk."
          steps={processSteps}
          footerText="Opdrachtgever en een compliance officer nodig?"
          footerLink={{
            label: "Compliance officer werven",
            href: "/recruitment/compliance-officer",
          }}
          background="slate"
        />
      </div>
      <ComplianceOfficerVacatureWaarom />
      <ComplianceOfficerVacatureFAQ />
      <ComplianceOfficerVacatureCTA />
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
