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
          Geen lijst met vijftig cv&apos;s, maar drie kandidaten die passen. Wij
          kennen de juridische markt, spreken onze kandidaten persoonlijk en
          denken mee over wat jouw kantoor écht nodig heeft. Korte lijnen, snel
          schakelen, en je betaalt pas bij een succesvolle plaatsing.
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
