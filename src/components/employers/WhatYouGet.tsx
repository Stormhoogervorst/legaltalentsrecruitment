import Link from "next/link";
import { Check } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const includedItems = [
  "Intake en briefing op locatie",
  "Actieve search via netwerk",
  "Persoonlijke screening en eerste gesprek",
  "Shortlist met onderbouwing per kandidaat",
  "Coördinatie en planning gesprekken",
  "Begeleiding tot indiensttreding",
  "Vervangingsgarantie (op aanvraag)",
];

export function WhatYouGet() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ INBEGREPEN</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">Wat je krijgt.</h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Geen verborgen extras, geen losse fees voor zaken die erbij horen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] bg-dark-background p-8 text-dark-foreground md:p-12">
            <p className="font-mono text-[14px] font-medium uppercase leading-none tracking-[0.04em] text-dark-foreground-secondary">
              / STANDAARD INBEGREPEN
            </p>
            <ul className="mt-8 space-y-5">
              {includedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start text-[16px] leading-[1.6]"
                >
                  <Check
                    className="mr-3 mt-1 size-4 shrink-0 text-[rgba(255,255,255,0.6)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-center">
            <h3 className="font-display text-[24px] font-medium leading-[1.2] tracking-[-0.005em]">
              Geen losse facturen voor wat erbij hoort.
            </h3>
            <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
              Bij Legal Talents zit alles wat je nodig hebt voor een succesvolle
              plaatsing in het honorarium. Geen aparte facturen voor
              intake-gesprekken, screening, of coördinatie. Geen verrassingen
              achteraf.
            </p>
            <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
              Eventuele specifieke wervingscampagnes of assessments worden
              alleen in rekening gebracht na schriftelijke goedkeuring vooraf.
            </p>
            <Link
              href="/algemene-voorwaarden"
              className="mt-8 inline-flex text-[14px] leading-[1.5] text-foreground underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
            >
              Lees onze voorwaarden →
            </Link>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
