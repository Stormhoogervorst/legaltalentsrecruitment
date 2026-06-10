import { SectionShell, SlashPill } from "@/components/home/primitives";

export function GeneralCounselRol() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE ROL</SlashPill>
          <h2 className="display-md mt-8">
            Wat een general counsel doet — en waarom de rol zo lastig in te
            vullen is
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            De general counsel staat op het snijvlak van recht en
            bedrijfsvoering. Strategisch advies aan de board,
            eindverantwoordelijkheid voor compliance en governance, regie over
            externe advocaten, en vaak een rol bij M&amp;A en kapitaalrondes. Dat
            vraagt om een zeldzame combinatie: juridische diepgang én commercieel
            inzicht én het vermogen om aan een directietafel gehoord te worden.
          </p>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Die combinatie is schaars. De beste kandidaten zitten al op een goede
            plek, zijn niet actief op zoek, en wegen een overstap zorgvuldig af.
            Een vacature uitzetten levert ze niet op — gerichte, persoonlijke
            benadering wel.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
