import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const employersFaqItems = [
  {
    question: "Werken jullie landelijk of alleen in Oost-Nederland?",
    answer:
      "Onze basis is Nijmegen, maar we werken landelijk. Voor opdrachten buiten de regio komen we graag bij jullie op locatie, of starten we digitaal.",
  },
  {
    question: "Welke posities vervullen jullie?",
    answer:
      "Alle juridische posities, in alle rechtsgebieden: van advocaat-stagiair tot partner en van bedrijfsjurist tot general counsel. Ook legal engineers en legal AI-specialisten.",
  },
  {
    question: "Hoe lang duurt een gemiddeld traject?",
    answer:
      "Afhankelijk van de positie en het profiel: meestal 4 tot 10 weken vanaf intake tot ondertekend contract. Bij specialistische of senior rollen kan dit langer duren.",
  },
  {
    question: "Wat als de geplaatste kandidaat snel weer vertrekt?",
    answer:
      "Als we vooraf schriftelijk een garantie hebben afgesproken, zetten we ons in om eenmalig en kosteloos een vervangende kandidaat te vinden. Dat geldt niet bij reorganisatie, fusie, faillissement of een wezenlijke wijziging van de functie.",
  },
  {
    question: "Kunnen wij ook met meerdere bureaus tegelijk werken?",
    answer:
      "Dat kan, maar we werken het liefst exclusief. Dan kunnen we de tijd nemen voor de intake en voor gesprekken met kandidaten, en hoeven we niet te racen tegen andere bureaus. Bij niet-exclusieve opdrachten hanteren we soms andere voorwaarden.",
  },
  {
    question: "Hoe gaan jullie om met vertrouwelijkheid?",
    answer:
      "Discretie is het uitgangspunt. We delen kandidaatgegevens alleen met toestemming van de kandidaat. Jullie zoekopdracht en bedrijfsnaam delen we pas met kandidaten na overleg met jullie.",
  },
];

export function EmployersFAQ() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="mx-auto max-w-[760px]">
          <SlashPill>/ VEELGESTELDE VRAGEN</SlashPill>
          <h2 className="display-md mt-8">
            Veelgestelde <br />
            vragen.
          </h2>

          <div className="mt-12">
            {employersFaqItems.map((item) => (
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
