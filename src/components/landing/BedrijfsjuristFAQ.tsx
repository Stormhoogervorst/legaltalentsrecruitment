import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const bedrijfsjuristFaqItems = [
  {
    question: "Wat is het verschil tussen een bedrijfsjurist en een advocaat?",
    answer:
      "Een advocaat werkt voor cliënten vanuit een kantoor en is ingeschreven bij de orde. Een bedrijfsjurist werkt in dienst bij één organisatie en is daar de juridische adviseur. Veel bedrijfsjuristen komen vanuit de advocatuur — die overstap is in Nederland gangbaar en wettelijk geregeld.",
  },
  {
    question: "Wij zoeken onze eerste bedrijfsjurist — waar te beginnen?",
    answer:
      "De eerste in-house jurist is een sleutelmoment. Het profiel verschilt fundamenteel van een 'gewone' jurist: deze persoon bouwt de juridische functie op, schrijft beleid, kiest tools en bewerkt processen. Wij begeleiden dit proces vanaf nul — inclusief sparren over wat het functieprofiel moet inhouden.",
  },
  {
    question: "Hoeveel verdient een bedrijfsjurist gemiddeld?",
    answer:
      "Sterk afhankelijk van ervaring, industrie en regio. Een medior bedrijfsjurist (2-5 jaar) in NL verdient gemiddeld tussen €65k en €95k. Senior en head of legal posities gaan vanaf €95k tot ruim €150k. General counsel in grote organisaties: €150k en hoger met bonus. Bij de intake brengen we benchmarks die specifiek zijn voor jullie sector en grootte.",
  },
  {
    question: "Werken jullie ook voor scale-ups en kleinere bedrijven?",
    answer:
      "Ja. Het verschil tussen werving voor een corporate en een scale-up zit niet in de moeite, maar in het profiel. Bij scale-ups zoeken we vaak juristen met ondernemerschap, brede skills en risicotolerantie. Bij corporates met specialisme, processdiscipline en stakeholdermanagement. Wij weten beide markten.",
  },
  {
    question: "Is een advocaat geschikt voor een in-house rol?",
    answer:
      "Vaak wel — maar niet altijd. Goede advocaten zijn vakinhoudelijk sterk maar moeten zich aanpassen aan de in-house rol: minder uurtjes-schrijven, meer business-context, meer commerciële trade-offs. Bij elke voordracht beoordelen wij of een advocaat klaar is voor deze overgang. Niet iedereen is dat — en dat is een belangrijke filter.",
  },
  {
    question: "Hoe gaan jullie om met vertrouwelijkheid voor onze kant?",
    answer:
      "Wij delen jullie bedrijfsnaam en specifieke functie-eisen alleen met kandidaten na overleg met jullie. In de zoekfase werken we vaak met een algemene profielomschrijving (bijvoorbeeld 'middelgrote technologie-organisatie in regio Utrecht') om jullie zoektocht discreet te houden — zeker als jullie nog geen externe communicatie willen.",
  },
];

export function BedrijfsjuristFAQ() {
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
            {bedrijfsjuristFaqItems.map((item) => (
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
