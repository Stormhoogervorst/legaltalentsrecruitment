import { SectionShell, SlashPill } from "@/components/home/primitives";

export function ScaleUpsGeneralist() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ EERSTE LEGAL HIRE</SlashPill>
          <h2 className="display-md mt-8">
            Generalist of specialist? <br />
            Je eerste legal hire
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            De eerste jurist in een scale-up is bijna nooit een specialist. Je
            zoekt een brede generalist die contracten, arbeidsrecht, privacy en
            commerciële vraagstukken aankan en die comfortabel is met onzekerheid
            en tempo. Specialisten — een privacy officer, een M&A-jurist — komen
            later, als het team groeit en de vraagstukken dieper worden. Wij
            helpen je bepalen wat je in deze fase echt nodig hebt, in plaats van
            een te zware (en te dure) hire te plaatsen die zich gaat vervelen.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
