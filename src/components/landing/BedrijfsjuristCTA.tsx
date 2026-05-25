import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function BedrijfsjuristCTA() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ INTAKE</SlashPill>
        <h2 className="display-lg mx-auto mt-8 max-w-4xl">
          Klaar voor een <br />
          specifiek profiel?
        </h2>
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Vrijblijvende intake voor de juiste in-house jurist. We luisteren,
          denken mee, en delen marktkennis.
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
