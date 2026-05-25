import { SectionShell, SlashPill } from "@/components/home/primitives";

const marktItems = [
  "Salaris is niet meer doorslaggevend. Doorgroei, autonomie, dossierkwaliteit en kantoorcultuur wegen voor veel advocaten zwaarder dan een hoger startsalaris.",
  "Hybride werken is uitgangspunt. Kantoren die nog volledig op locatie verlangen, sluiten zichzelf uit van een groot deel van het talent — vooral op medior en senior niveau.",
  "Specialisaties zijn schaars. In gebieden zoals mededinging, ondernemingsrecht corporate, IT-recht en fiscaal advies is goed talent moeilijk te vinden — en de marktconforme honorering verschuift snel.",
  'Carrière-paden moeten zichtbaar zijn. Vage "doorgroei mogelijk" trekt geen ambitieuze advocaten meer. Concrete partnertracks, specialisatie-paden en mentor-structuren wel.',
  "Reputatie van het kantoor weegt zwaar. Wat zegt voormalig personeel? Hoe is jullie aanwezigheid op LinkedIn? Wat is de cliënt-portfolio? Advocaten doen serieus huiswerk voor ze overstappen.",
];

export function AdvocaatMarkt() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE MARKT</SlashPill>
          <h2 className="display-md mt-8">
            Een markt waarin <br />
            kandidaten kiezen.
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            De juridische arbeidsmarkt is veranderd. Goede advocaten kiezen waar
            zij willen werken — en kantoren concurreren om hetzelfde talent.
          </p>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Wat dat in de praktijk betekent voor werving:
          </p>
          <ul className="mt-6 list-disc space-y-4 pl-5">
            {marktItems.map((item) => (
              <li
                key={item}
                className="text-[16px] leading-[1.6] text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Wij brengen deze marktkennis in bij elke opdracht — zodat jullie
            weten waar jullie staan en wat realistisch is om aan te bieden.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
