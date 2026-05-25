import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const advocaatFaqItems = [
  {
    question: "Werven jullie ook partner-niveau?",
    answer:
      "Ja. Partner-werving (lateral moves) is een gevoelig proces dat 100% vertrouwelijk verloopt — vaak zonder dat de huidige werkgever weet van het traject. Wij hebben ervaring met portefeuille-overdracht, due diligence rond clienten en de overgangsbegeleiding die deze trajecten vereisen.",
  },
  {
    question: "Hoe omgaan met advocaten die niet actief zoeken?",
    answer:
      "Het meeste talent op medior en senior niveau is passief beschikbaar — zij overwegen een overstap maar reageren niet op vacaturesites. Wij benaderen deze advocaten gericht, één-op-één, vanuit een persoonlijk netwerk. Dat is waar onze werkwijze het verschil maakt.",
  },
  {
    question: "Wat is de gemiddelde doorlooptijd?",
    answer:
      "Voor medior advocaten meestal 4 tot 8 weken vanaf intake tot ondertekend contract. Senior en partner-niveau kan 8 tot 16 weken vragen, afhankelijk van specialisme, exclusiviteit en lopende verplichtingen van de kandidaat (opzegtermijn, lopende dossiers).",
  },
  {
    question: "Werken jullie ook met kleinere kantoren?",
    answer:
      "Ja. Wij werven voor boutique-kantoren, middelgrote firma's en grotere kantoren. Wat telt is de match — niet de omvang. Voor kleinere kantoren is gerichte werving juist vaak doorslaggevend omdat één plaatsing een groot deel van het team beïnvloedt.",
  },
  {
    question: "Hoe gaan jullie om met exclusiviteit?",
    answer:
      "Wij werken het liefst exclusief — dat geeft ons de ruimte om er echt voor te gaan en de kandidaat-pool optimaal te benutten. Niet-exclusieve opdrachten kunnen wel, maar dan hanteren we soms aangepaste voorwaarden om de inspanning te kunnen waarborgen.",
  },
  {
    question: "Kunnen jullie advocaten uit een specifiek kantoor benaderen?",
    answer:
      "We werken niet met kantoor-specifieke 'doelwitlijsten' van opdrachtgevers. Wel kennen wij de juridische arbeidsmarkt en weten wij welke advocaten waar werken en wat hun specialisme is. De keuze om iemand te benaderen ligt bij ons, op basis van de profielmatch — niet op basis van waar zij toevallig werken.",
  },
];

export function AdvocaatFAQ() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="mx-auto max-w-[760px]">
          <SlashPill>/ VEELGESTELDE VRAGEN</SlashPill>
          <h2 className="display-md mt-8">
            Veelgestelde <br />
            vragen.
          </h2>

          <div className="mt-12">
            {advocaatFaqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[rgba(10,10,15,0.08)] py-6 first:border-t"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <Plus
                    className="size-4 shrink-0 transition-transform duration-300 ease-flatwhite group-open:rotate-45"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-[16px] leading-relaxed text-foreground-secondary">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
