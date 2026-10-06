import {
  PillButton,
  SectionShell,
} from "@/components/home/primitives";

export function LegalEngineerHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">
          Werving van <br />
          legal engineers.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Werving van legal engineers en legal AI-specialisten: de brug tussen
          recht en technologie. Van legal engineer tot legal operations lead,
          in-house, bij advocatenkantoren en bij legal tech-bedrijven. We komen
          voor de intake bij jullie langs en stellen alleen kandidaten voor die
          we zelf hebben gesproken.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een intake →</PillButton>
          <PillButton href="#aanpak" variant="secondary">
            Onze aanpak
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
