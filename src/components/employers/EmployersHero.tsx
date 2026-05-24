import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function EmployersHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ VOOR OPDRACHTGEVERS</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Juridisch talent <br />
          dat blijft.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Een persoonlijk netwerk in plaats van een database. Een shortlist in
          plaats van een stortvloed. Werving & selectie zoals het hoort —
          gericht, transparant, no cure no pay.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een intake →</PillButton>
          <PillButton href="/vacatures" variant="secondary">
            Bekijk vacatures
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
