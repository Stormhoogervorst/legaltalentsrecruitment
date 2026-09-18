import {
  PillButton,
  SectionShell,
} from "@/components/home/primitives";

export function BedrijfsjuristVacatureHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">
          Bedrijfsjurist vacature.{" "}
          <span className="block">Discreet gematcht.</span>
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Op zoek naar een bedrijfsjurist vacature — of de volgende inhouse
          stap? Legal Talents is een specialistisch legal recruiter. Wij matchen
          juristen met inhouse-rollen die vaak niet op Indeed of LinkedIn
          staan. Vertrouwelijk, landelijk, en alleen een voorstel na jouw
          toestemming.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een kennismaking →</PillButton>
          <PillButton href="/juridisch-recruiter" variant="secondary">
            Ik zoek een bedrijfsjurist
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
