import {
  PillButton,
  SectionShell,
} from "@/components/home/primitives";

export function LegalCounselVacatureHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">
          Legal counsel vacature.{" "}
          <span className="block">Discreet gematcht.</span>
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Op zoek naar een legal counsel vacature — of een vacature legal
          counsel die niet op een jobboard staat? Legal Talents is een
          specialistisch legal recruiter. Wij matchen legal professionals met
          inhouse-rollen die vaak niet op Indeed of LinkedIn staan.
          Vertrouwelijk, landelijk, en alleen een voorstel na jouw toestemming.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een kennismaking →</PillButton>
          <PillButton href="/recruitment/legal-counsel" variant="secondary">
            Ik zoek een legal counsel
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
