import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function EmployersCTA() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ KENNISMAKEN</SlashPill>
        <h2 className="display-lg mx-auto mt-8 max-w-4xl">
          Klaar voor <br />
          een gesprek?
        </h2>
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Een vrijblijvende intake op jullie locatie. We luisteren, denken mee,
          en bepalen samen of er een goede match is voor samenwerking.
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
