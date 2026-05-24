import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function CandidatesHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ VOOR JURIDISCH TALENT</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Jouw volgende stap. <br />
          Op jouw tempo.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Een gesprek hoeft niet meteen tot iets te leiden. Wij denken
          vrijblijvend mee over jouw loopbaan — vertrouwelijk, zonder druk, en
          alleen met functies die echt passen.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een gesprek →</PillButton>
          <PillButton href="/vacatures" variant="secondary">
            Bekijk vacatures
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
