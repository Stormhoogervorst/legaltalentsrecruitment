import { SectionShell, SlashPill } from "@/components/home/primitives";

export function LegalCounselUitdaging() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE UITDAGING</SlashPill>
          <h2 className="display-md mt-8">
            Waarom een legal counsel <br />
            werven lastig is
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Goede legal counsels zijn schaars en gewild. De beste zitten vaak al
            in een prettige rol, zijn niet actief op zoek, en kiezen een
            volgende stap zorgvuldig — op inhoud, team en doorgroeimogelijkheden,
            niet op een vacaturetekst. Bovendien is het profiel breder dan het
            lijkt: je zoekt iemand die juridisch onderlegd is, maar ook
            commercieel meedenkt en in de taal van de business kan schakelen. Die
            combinatie vind je niet met een advertentie. We benaderen kandidaten
            persoonlijk en beoordelen vooraf of ze passen bij het type werk en de
            organisatie.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
