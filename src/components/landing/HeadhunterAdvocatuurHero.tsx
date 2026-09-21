import {
  PillButton,
  SectionShell,
} from "@/components/home/primitives";

export function HeadhunterAdvocatuurHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">Headhunter advocatuur</h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Headhunter voor advocatenkantoren en inhouse legal teams die senior
          juridisch talent zoeken. Legal Talents is een juridisch headhunter:
          legal executive search voor rollen die niet via een advertentie
          binnenkomen — partner, counsel, general counsel, senior
          bedrijfsjurist. Discreet, landelijk, no cure no pay.
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
