import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const reasons = [
  {
    index: "001",
    title: "Alleen legal",
    body: "Wij werven geen finance of IT erbij. Onze aandacht zit bij advocaten, juristen en legal teams — en bij de cultuur waarin zij moeten landen.",
  },
  {
    index: "002",
    title: "Netwerk in plaats van database",
    body: "Search loopt via persoonlijke benadering en een netwerk in de Nederlandse advocatuur en inhouse praktijk. Geen massa-outreach, geen ATS-shortcuts.",
  },
  {
    index: "003",
    title: "Tweezijdig, dus scherper",
    body: "Omdat wij beide kanten van de tafel kennen, toetsen we eerder of een overstap écht past — inhoudelijk, cultureel en in tempo.",
  },
  {
    index: "004",
    title: "Landelijk, korte lijnen",
    body: "Onze basis is Nijmegen; we werken als legal recruiter in Nederland landelijk. Intake het liefst op locatie. No cure, no pay: je betaalt bij plaatsing.",
  },
];

export function JuridischRecruiterWaarom() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SlashPill>/ WAAROM LEGAL TALENTS</SlashPill>
            <h2 className="display-md mt-8">
              Positionering <br />
              zonder volume-praat.
            </h2>
            <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
              Legal Talents is een compact bureau van mensen met een juridische
              achtergrond. Wij beloven geen fabricagecijfers — wel een
              werkwijze die kwaliteit, discretie en een duurzame match voorop
              zet.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wat je wél mag verwachten: kandidaten die wij zelf hebben
              gesproken, een shortlist met onderbouwing, en begeleiding tot
              voorbij de eerste werkdag. Meer over wie wij zijn staat op onze{" "}
              <Link
                href="/over-ons"
                className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
              >
                over-ons pagina
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-y-6">
            {reasons.map((reason) => (
              <article
                key={reason.index}
                className="rounded-2xl bg-background p-8"
              >
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {reason.index}
                </p>
                <h3 className="display-h3 mt-5">{reason.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
