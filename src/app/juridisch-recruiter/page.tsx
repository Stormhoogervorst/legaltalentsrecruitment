import type { Metadata } from "next";
import { JuridischRecruiterCTA } from "@/components/landing/JuridischRecruiterCTA";
import {
  JuridischRecruiterFAQ,
  juridischRecruiterFaqItems,
} from "@/components/landing/JuridischRecruiterFAQ";
import { JuridischRecruiterHero } from "@/components/landing/JuridischRecruiterHero";
import { JuridischRecruiterProbleem } from "@/components/landing/JuridischRecruiterProbleem";
import { JuridischRecruiterRollen } from "@/components/landing/JuridischRecruiterRollen";
import { JuridischRecruiterVoorWie } from "@/components/landing/JuridischRecruiterVoorWie";
import { JuridischRecruiterWaarom } from "@/components/landing/JuridischRecruiterWaarom";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Juridisch recruiter voor legal professionals | Legal Talents";
const description =
  "Op zoek naar een juridisch recruiter? Legal Talents werft advocaten en juristen voor kantoren en inhouse teams. Specialistisch, landelijk, no cure no pay.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/juridisch-recruiter",
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
    body: "Bij voorkeur op locatie: organisatie, cultuur, team en het echte profiel. Wat moet deze persoon kunnen, en wat moet het juist niet worden?",
  },
  {
    index: "002",
    title: "Search en mapping",
    body: "Gerichte search via netwerk en persoonlijke benadering. We mappen waar relevant talent zit — vaak passief beschikbaar, zelden op een vacaturesite.",
  },
  {
    index: "003",
    title: "Selectie",
    body: "Wij spreken kandidaten zelf. Vakinhoud, motivatie voor een overstap en cultuurfit wegen even zwaar als het cv. Alleen wie past, gaat door.",
  },
  {
    index: "004",
    title: "Shortlist",
    body: "Een korte lijst met onderbouwing per kandidaat: waarom deze persoon, wat brengt die mee, waar zitten aandachtspunten. Geen stapel cv’s.",
  },
  {
    index: "005",
    title: "Begeleiding",
    body: "Van eerste gesprek tot indiensttreding — en daarna. Planning, feedback beide kanten op, en betrokkenheid tijdens de eerste periode.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Juridisch recruiter",
  serviceType: "Juridisch recruitment - werving en selectie",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  audience: [
    "Advocatenkantoren",
    "Inhouse legal teams",
    "Juridisch talent",
  ],
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: juridischRecruiterFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function JuridischRecruiterPage() {
  return (
    <>
      <JuridischRecruiterHero />
      <TrustStrip />
      <JuridischRecruiterProbleem />
      <JuridischRecruiterVoorWie />
      <div id="aanpak">
        <MeanderingProcess
          eyebrow="/ WERKWIJZE"
          title="Vijf stappen. / Eén match."
          steps={processSteps}
          footerText="Zelf jurist en op zoek? Bekijk hoe wij kandidaten begeleiden."
          footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
          background="slate"
        />
      </div>
      <JuridischRecruiterRollen />
      <JuridischRecruiterWaarom />
      <JuridischRecruiterFAQ />
      <JuridischRecruiterCTA />
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
