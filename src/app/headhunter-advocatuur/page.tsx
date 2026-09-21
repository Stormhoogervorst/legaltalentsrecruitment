import type { Metadata } from "next";
import { HeadhunterAdvocatuurCTA } from "@/components/landing/HeadhunterAdvocatuurCTA";
import {
  HeadhunterAdvocatuurFAQ,
  headhunterAdvocatuurFaqItems,
} from "@/components/landing/HeadhunterAdvocatuurFAQ";
import { HeadhunterAdvocatuurHero } from "@/components/landing/HeadhunterAdvocatuurHero";
import { HeadhunterAdvocatuurProbleem } from "@/components/landing/HeadhunterAdvocatuurProbleem";
import { HeadhunterAdvocatuurRollen } from "@/components/landing/HeadhunterAdvocatuurRollen";
import { HeadhunterAdvocatuurVoorWie } from "@/components/landing/HeadhunterAdvocatuurVoorWie";
import { HeadhunterAdvocatuurWaarom } from "@/components/landing/HeadhunterAdvocatuurWaarom";
import { MeanderingProcess } from "@/components/shared/MeanderingProcess";
import { TrustStrip } from "@/components/home/TrustStrip";

const title = "Headhunter advocatuur | Legal Talents Recruitment";
const description =
  "Headhunter advocatuur voor kantoren en inhouse teams. Legal executive search voor senior juridisch talent — discreet, landelijk, no cure no pay.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/headhunter-advocatuur",
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
    body: "Bij voorkeur op locatie: de echte rol, de cultuur, wat deze search wél en níet mag worden. Bij senior legal executive search is het briefinggesprek het halve werk.",
  },
  {
    index: "002",
    title: "Mapping en search",
    body: "Wij mappen waar relevant talent zit — kantoren, inhouse teams, vaak passief. Gerichte, persoonlijke benadering. Geen massa-outreach, geen openbare advertentie tenzij jullie dat willen.",
  },
  {
    index: "003",
    title: "Selectie",
    body: "Wij spreken kandidaten zelf. Vakinhoud, motivatie voor een overstap en cultuurfit wegen even zwaar als het cv. Alleen wie past — en wie écht in beweging is — gaat door.",
  },
  {
    index: "004",
    title: "Shortlist",
    body: "Een korte lijst met onderbouwing per kandidaat: waarom deze persoon, wat brengt die mee, waar zitten aandachtspunten. Geen stapel cv’s.",
  },
  {
    index: "005",
    title: "Begeleiding",
    body: "Van eerste gesprek tot indiensttreding — en daarna. Planning, feedback beide kanten op, en betrokkenheid tijdens de eerste periode. Discretie blijft tot het einde.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Headhunter advocatuur",
  serviceType: "Legal executive search - headhunting voor senior juridisch talent",
  provider: {
    "@type": "Organization",
    name: "Legal Talents Recruitment",
    url: "https://www.legaltalentsrecruitment.nl",
  },
  areaServed: "NL",
  audience: [
    "Advocatenkantoren",
    "Inhouse legal teams",
    "Senior juridisch talent",
  ],
  description,
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: headhunterAdvocatuurFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HeadhunterAdvocatuurPage() {
  return (
    <>
      <HeadhunterAdvocatuurHero />
      <TrustStrip />
      <HeadhunterAdvocatuurProbleem />
      <HeadhunterAdvocatuurVoorWie />
      <div id="werkwijze">
        <MeanderingProcess
          eyebrow="/ WERKWIJZE"
          title="Vijf stappen. / Eén match."
          steps={processSteps}
          footerText="Zelf jurist en op zoek? Bekijk hoe wij kandidaten begeleiden."
          footerLink={{ label: "Voor kandidaten", href: "/voor-kandidaten" }}
          background="slate"
        />
      </div>
      <HeadhunterAdvocatuurRollen />
      <HeadhunterAdvocatuurWaarom />
      <HeadhunterAdvocatuurFAQ />
      <HeadhunterAdvocatuurCTA />
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
