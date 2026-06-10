import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function GeneralCounselAanpak() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ AANPAK</SlashPill>
          <h2 className="display-md mt-8">
            Hoe wij general <br />
            counsels werven
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Op dit niveau werkt massa-werving niet. We benaderen kandidaten
            één-op-één via ons netwerk — ervaren juristen, bedrijfsjuristen en
            advocaten die toe zijn aan eindverantwoordelijkheid of de overstap
            naar een nieuwe organisatie overwegen. We screenen niet alleen op
            juridische kwaliteit, maar op of iemand past bij jullie fase, cultuur
            en directie.
          </p>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Elke voordracht komt met onderbouwing: wat brengt deze persoon mee,
            waarom past het, en wat zijn de aandachtspunten. Discreet, want op dit
            niveau is vertrouwelijkheid geen optie maar uitgangspunt.
          </p>
          <div className="mt-10">
            <PillButton href="/voor-opdrachtgevers">
              Lees hoe wij werken →
            </PillButton>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
