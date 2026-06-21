import type { Metadata } from "next";
import { ComplianceCTA } from "@/components/landing/ComplianceCTA";
import {
  ComplianceFAQ,
  complianceFaqItems,
} from "@/components/landing/ComplianceFAQ";
import { ComplianceExpertise } from "@/components/landing/ComplianceExpertise";
import { ComplianceHero } from "@/components/landing/ComplianceHero";
import { ComplianceMarkt } from "@/components/landing/ComplianceMarkt";
import { CompliancePosities } from "@/components/landing/CompliancePosities";
import { ComplianceResultaat } from "@/components/landing/ComplianceResultaat";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title =
  "Werving Compliance & Privacy Officers — Recruitment in Regulated Markets | Legal Talents";
const description =
  "Specialistische werving van compliance officers, privacy officers, DPO's en AML-specialisten. Voor financiële instellingen, tech, healthcare en regulated markets. Persoonlijk netwerk, no cure no pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/recruitment/compliance-officer",
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
    title: "Intake & regulatory context",
    body: "Bij voorkeur op kantoor — om jullie sector, regulatory exposure en governance-structuur écht te leren kennen. Welke toezichthouder, welke meldingsplicht, welke board-dynamiek?",
  },
  {
    index: "002",
    title: "Gerichte search in een schaarse markt",
    body: "Wij benaderen compliance-specialisten één-op-één — vrijwel altijd passief beschikbaar talent. Vaak vanuit een Big Four-achtergrond, een toezichthouder of een vergelijkbare regulated organisatie.",
  },
  {
    index: "003",
    title: "Voordracht met sectorale onderbouwing",
    body: "Bij elke kandidaat een onderbouwing: vakinhoudelijke fit met jullie sector, ervaring met relevante toezichthouder, beoordeling van seniority versus de complexiteit van jullie organisatie.",
  },
  {
    index: "004",
    title: "Begeleiding tot start",
    body: "Compliance-rollen zijn vaak onder tijdsdruk in te vullen (toezichthouder-deadlines, audit-bevindingen). Wij blijven betrokken tot indiensttreding en tijdens de eerste maanden.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Werving en selectie van compliance officers, privacy officers en DPO's",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  audience: "Financiële instellingen, tech, healthcare en regulated markets",
  areaServed: "NL",
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: complianceFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ComplianceOfficerRecruitmentPage() {
  return (
    <>
      <ComplianceHero />
      <TrustStrip />
      <ComplianceExpertise />
      <CompliancePosities />
      <div id="aanpak">
        <MeanderingProcess
          eyebrow="/ AANPAK"
          title="Vier stappen. / Eén match."
          steps={processSteps}
          footerText="Zelf compliance specialist en op zoek?"
          footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
          background="slate"
        />
      </div>
      <ComplianceResultaat />
      <ComplianceMarkt />
      <ComplianceFAQ />
      <ComplianceCTA />
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
