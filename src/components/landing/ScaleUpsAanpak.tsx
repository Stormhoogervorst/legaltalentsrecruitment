import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function ScaleUpsAanpak() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ AANPAK</SlashPill>
          <h2 className="display-md mt-8">Onze aanpak</h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Persoonlijke search, geen database-shortcuts. Een onderbouwde
            shortlist met alleen kandidaten die we zelf hebben gesproken.
            Begeleiding tot en met de eerste werkdag, en een vervangingsgarantie
            op aanvraag. No cure, no pay: je betaalt alleen bij een succesvolle
            plaatsing.
          </p>
          <div className="mt-10">
            <PillButton href="/voor-opdrachtgevers" variant="secondary">
              Lees hoe wij werken →
            </PillButton>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
