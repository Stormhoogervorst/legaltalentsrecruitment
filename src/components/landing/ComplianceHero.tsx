import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function ComplianceHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — COMPLIANCE &amp; PRIVACY</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Werving van <br />
          compliance officers.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Specialistische werving voor de regulated markets. Compliance
          officers, privacy officers, DPO&apos;s en AML-specialisten — voor
          banken, fintech, IT, healthcare en asset managers.
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
