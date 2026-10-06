import {
  PillButton,
  SectionShell,
} from "@/components/home/primitives";

export function JuridischRecruiterHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">Juridisch recruiter</h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Juridisch recruiter voor advocatenkantoren en inhouse legal teams.
          We werven advocaten, juristen en legal AI-specialisten, landelijk en
          vanuit een persoonlijk netwerk. We komen bij jullie langs voor de
          intake en stellen alleen kandidaten voor die we zelf hebben
          gesproken.
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
