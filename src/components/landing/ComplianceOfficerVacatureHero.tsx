import {
  PillButton,
  SectionShell,
} from "@/components/home/primitives";

export function ComplianceOfficerVacatureHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">
          Compliance officer vacature.{" "}
          <span className="block">Discreet gematcht.</span>
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Voor wie een compliance officer vacature zoekt, of een vacature
          compliance officer die niet op een jobboard staat. Legal Talents
          matcht compliance professionals discreet met rollen die vaak niet op
          Indeed of LinkedIn staan. Vertrouwelijk, landelijk en alleen een
          voorstel met jouw toestemming. Kennismaking is kosteloos.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een kennismaking →</PillButton>
          <PillButton
            href="/recruitment/compliance-officer"
            variant="secondary"
          >
            Ik zoek een compliance officer
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
