import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function AdvocaatCTA() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ INTAKE</SlashPill>
        <h2 className="display-lg mx-auto mt-8 max-w-4xl">
          Klaar voor een <br />
          specifiek profiel?
        </h2>
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Bel voor een vrijblijvende intake. We luisteren, denken mee, en
          bepalen samen of er een match is voor samenwerking.
        </p>
        <div className="mt-10">
          <PillButton href="/contact" variant="dark">
            Plan een intake →
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
