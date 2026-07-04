import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function LegalEngineerHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — LEGAL ENGINEERING</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Werving van <br />
          legal engineers.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Specialistisch recruitment voor de brug tussen recht en technologie.
          Van legal engineer tot legal operations lead, in-house en bij
          advocatenkantoren. No cure no pay. Wij bereiken maandelijks 40.000
          juristen.
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
