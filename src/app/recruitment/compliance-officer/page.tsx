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

const title = "Werving compliance officers | Legal Talents Recruitment";
const description =
  "No cure, no pay. Werving van compliance officers en AML-specialisten voor financiële instellingen, tech, healthcare en regulated markets.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
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
    body: "Bij voorkeur op kantoor, zodat we jullie sector, regulatory exposure en governance-structuur zelf zien. We bespreken welke toezichthouder, welke meldingsplicht en welke board-dynamiek erbij horen.",
  },
  {
    index: "002",
    title: "Gerichte search in een schaarse markt",
    body: "We benaderen compliance-specialisten één-op-één, vrijwel altijd talent dat niet actief zoekt. Vaak met een Big Four-achtergrond, bij een toezichthouder of bij een vergelijkbare regulated organisatie.",
  },
  {
    index: "003",
    title: "Voordracht met sectorale onderbouwing",
    body: "Bij elke kandidaat leggen we uit hoe die vakinhoudelijk past bij jullie sector, welke ervaring die heeft met de relevante toezichthouder en hoe senior die is ten opzichte van de complexiteit van jullie organisatie. We stellen alleen kandidaten voor die we zelf hebben gesproken.",
  },
  {
    index: "004",
    title: "Begeleiding tot start",
    body: "Compliance-rollen zijn vaak onder tijdsdruk in te vullen (toezichthouder-deadlines, audit-bevindingen). We blijven betrokken tot indiensttreding en tijdens de eerste maanden.",
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
          footerText="Zelf compliance specialist en op zoek naar een vacature?"
          footerLink={{
            label: "Compliance officer vacature",
            href: "/compliance-officer-vacature",
          }}
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
