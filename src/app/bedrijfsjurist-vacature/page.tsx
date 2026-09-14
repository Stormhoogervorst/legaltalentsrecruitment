import type { Metadata } from "next";
import { BedrijfsjuristVacatureCTA } from "@/components/landing/BedrijfsjuristVacatureCTA";
import {
  BedrijfsjuristVacatureFAQ,
  bedrijfsjuristVacatureFaqItems,
} from "@/components/landing/BedrijfsjuristVacatureFAQ";
import { BedrijfsjuristVacatureHero } from "@/components/landing/BedrijfsjuristVacatureHero";
import { BedrijfsjuristVacatureProbleem } from "@/components/landing/BedrijfsjuristVacatureProbleem";
import { BedrijfsjuristVacatureRollen } from "@/components/landing/BedrijfsjuristVacatureRollen";
import { BedrijfsjuristVacatureVoorWie } from "@/components/landing/BedrijfsjuristVacatureVoorWie";
import { BedrijfsjuristVacatureWaarom } from "@/components/landing/BedrijfsjuristVacatureWaarom";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Bedrijfsjurist vacature | Legal Talents Recruitment";
const description =
  "Op zoek naar een bedrijfsjurist vacature? Legal Talents matcht juristen discreet met inhouse-rollen. Kennismaking kosteloos. Ook voor opdrachtgevers.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/bedrijfsjurist-vacature",
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
    body: "Een vrijblijvend gesprek: achtergrond, richting, wat voor jou telt in werk en cultuur. Geen cv-intake-machinerie — we willen jou begrijpen voordat we over rollen praten.",
  },
  {
    index: "002",
    title: "Matching",
    body: "Pas als we elkaar goed begrijpen, brengen we relevante bedrijfsjurist-rollen ter sprake — openstaand of via stille search. Alleen functies die passen bij niveau, vak en moment.",
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
  name: "Bedrijfsjurist vacature matching",
  serviceType: "Matching van bedrijfsjuristen met inhouse juridische rollen",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  audience: [
    "Bedrijfsjuristen",
    "Inhouse legal talent",
    "Opdrachtgevers die een bedrijfsjurist zoeken",
  ],
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: bedrijfsjuristVacatureFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BedrijfsjuristVacaturePage() {
  return (
    <>
      <BedrijfsjuristVacatureHero />
      <TrustStrip />
      <BedrijfsjuristVacatureProbleem />
      <BedrijfsjuristVacatureVoorWie />
      <BedrijfsjuristVacatureRollen />
      <div id="werkwijze">
        <MeanderingProcess
          eyebrow="/ WERKWIJZE"
          title="Vier stappen. / Geen druk."
          steps={processSteps}
          footerText="Opdrachtgever en een bedrijfsjurist nodig?"
          footerLink={{
            label: "Juridisch recruiter",
            href: "/juridisch-recruiter",
          }}
          background="slate"
        />
      </div>
      <BedrijfsjuristVacatureWaarom />
      <BedrijfsjuristVacatureFAQ />
      <BedrijfsjuristVacatureCTA />
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
