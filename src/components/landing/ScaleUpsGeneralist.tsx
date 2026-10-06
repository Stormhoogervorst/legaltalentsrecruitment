import { SectionShell, SlashPill } from "@/components/home/primitives";

export function ScaleUpsGeneralist() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ EERSTE LEGAL HIRE</SlashPill>
          <h2 className="display-md mt-8">
            Je eerste legal hire <br />
            is een generalist.
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            De eerste jurist in een scale-up is bijna nooit een specialist.
            Jullie zoeken een brede generalist die contracten, arbeidsrecht,
            privacy en commerciële vraagstukken aankan en die comfortabel is met
            onzekerheid en tempo. Specialisten, zoals een privacy officer of een
            M&A-jurist, komen later, als het team groeit en de vraagstukken
            dieper worden. We helpen bepalen wat jullie in deze fase nodig
            hebben, zodat jullie geen te zware en te dure hire doen die zich
            gaat vervelen.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
