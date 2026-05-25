import { SectionShell, SlashPill } from "@/components/home/primitives";

const marktItems = [
  "Advocaten verdienen in startjaren meer dan bedrijfsjuristen. Vanaf medior-niveau buigt dit om. Wie een advocaat wil overhalen naar in-house, moet doorgroei, autonomie en work-life-balance bieden — niet primair salaris.",
  "De pool 'goede bedrijfsjuristen' is klein. Het meeste talent met 3-7 jaar ervaring zit al ergens vast. Werving betekent passieve kandidaten benaderen, niet wachten op sollicitaties.",
  'Functietitel zegt weinig. "Bedrijfsjurist" bij een tech scale-up doet ander werk dan dezelfde titel bij een familiebedrijf. Wat de rol echt inhoudt — sparringpartner van directie, contracten-uitvoerder, of strategisch counsel — bepaalt welk profiel past.',
  "Hybride werken is uitgangspunt, geen perk. Bedrijven die nog volledig op locatie verlangen, sluiten zichzelf uit van een groot deel van het juridisch talent. Vooral richting senior-niveau.",
  "Een head of legal vinden duurt langer dan jullie denken. 8-12 weken is bij medior-functies realistisch. Bij senior posities en general counsel-rollen rekenen we vaak 12-20 weken — vanwege opzegtermijnen, gezinssituatie van kandidaten en de strategische impact van de keuze.",
];

export function BedrijfsjuristMarkt() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE MARKT</SlashPill>
          <h2 className="display-md mt-8">
            Wat opdrachtgevers <br />
            vaak nog niet weten.
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Voor veel organisaties is werving van een bedrijfsjurist een
            eenmalig of zeldzaam proces. Daardoor ontbreekt vaak marktkennis.
            Een paar dingen die belangrijk zijn om te weten:
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5">
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
            weten waar jullie staan en wat realistisch is.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
