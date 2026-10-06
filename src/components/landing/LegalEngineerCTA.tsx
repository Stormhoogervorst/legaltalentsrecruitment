import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function LegalEngineerCTA() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ INTAKE</SlashPill>
        <h2 className="display-lg mx-auto mt-8 max-w-4xl">
          Een intake <br />
          kost niets.
        </h2>
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          We komen bij jullie langs, luisteren en denken mee. Daarna bepalen
          we samen of samenwerken zinvol is.
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
