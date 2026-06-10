import { SectionShell, SlashPill } from "@/components/home/primitives";

export function ScaleUpsZuidas() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE MARKT</SlashPill>
          <h2 className="display-md mt-8">
            Waarom een Zuidas-advocaat niet <br />
            zomaar naar een scale-up beweegt
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Een advocaat die jarenlang op een groot kantoor heeft gewerkt, wil
            niet altijd naar een scale-up, en niet elke advocaat past er. De
            cultuur is anders, de zekerheid is anders, en de manier van werken is
            anders. Tegelijk willen juist veel goede juristen weg uit de
            uren-cultuur, op zoek naar inhoud, impact en een plek waar ze het
            verschil maken. Die mensen vind je niet op vacaturesites; ze zitten
            passief in een netwerk. Wij benaderen ze één-op-één en beoordelen
            vooraf of iemand de overstap echt wil maken en bij jullie fase past,
            zodat je geen plaatsing krijgt die binnen een jaar weer vertrekt.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
