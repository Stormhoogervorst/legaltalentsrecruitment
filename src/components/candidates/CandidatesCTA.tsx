import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function CandidatesCTA() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ KENNISMAKEN</SlashPill>
        <h2 className="display-lg mx-auto mt-8 max-w-4xl">
          Even <br />
          oriënteren?
        </h2>
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Een gesprek hoeft tot niks te leiden. Vrijblijvend, vertrouwelijk, en
          op jouw moment.
        </p>
        <div className="mt-10">
          <PillButton href="/contact" variant="dark">
            Plan een gesprek →
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
