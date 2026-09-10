import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function JuridischRecruiterHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ JURIDISCH RECRUITER</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">Juridisch recruiter</h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Juridisch recruiter voor advocatenkantoren en inhouse legal teams.
          Wij werven gespecialiseerd talent — van advocaat tot general counsel
          — landelijk in Nederland, vanuit een persoonlijk netwerk. Geen
          generalistisch bureau, wel een legal recruiter die de markt kent.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een gesprek →</PillButton>
          <PillButton href="/voor-kandidaten" variant="secondary">
            Voor kandidaten
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
