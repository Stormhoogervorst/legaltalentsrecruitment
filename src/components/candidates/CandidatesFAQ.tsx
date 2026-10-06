import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const candidatesFaqItems = [
  {
    question: "Kost dit mij iets?",
    answer:
      "Nee. Voor jou is het kosteloos. We worden betaald door opdrachtgevers bij een succesvolle plaatsing, niet door kandidaten.",
  },
  {
    question: "Blijft mijn zoektocht vertrouwelijk?",
    answer:
      "Ja. We delen niets met je huidige werkgever en stellen je alleen voor met jouw toestemming. Op verzoek werken we in de eerste fase volledig anoniem, bijvoorbeeld via versleutelde communicatie of buiten kantooruren.",
  },
  {
    question: "Wat als ik nog niet zeker weet of ik wil overstappen?",
    answer:
      "Geen probleem. Veel van onze gesprekken beginnen oriënterend. We bespreken pas posities als we elkaar goed begrijpen en er iets passends voorbijkomt. Dat kan weken of maanden duren. Geen druk.",
  },
  {
    question: "Welke rechtsgebieden of functies dekken jullie?",
    answer:
      "Alle juridische functies, in alle rechtsgebieden: van advocaat-stagiair tot partner en van bedrijfsjurist tot general counsel. Ook specialisaties als compliance, privacy en contractmanagement, en rollen in legal tech en legal AI, zoals legal engineer.",
  },
  {
    question: "Wat gebeurt er met mijn CV?",
    answer:
      "We bewaren je CV maximaal 2 jaar na het laatste contact, of korter als je dat wilt. We delen het nooit zonder jouw toestemming per voorstel. Je kunt altijd inzage, wijziging of verwijdering vragen. Meer daarover staat in ons privacybeleid.",
  },
  {
    question: "Hoe weet ik of een functie bij mij past?",
    answer:
      "We gaan vooraf bij de werkgever langs en vragen wat ze zoeken, hoe de cultuur is, welke ruimte er is om te groeien en wat de aandachtspunten zijn. Bij een voorstel krijg je dat allemaal te horen, zodat je een eerlijke afweging kunt maken voordat we doorzetten.",
  },
  {
    question: "Helpen jullie ook bij de onderhandelingen?",
    answer:
      "Ja. We begeleiden je bij de gesprekken, de salarisonderhandeling en de voorwaarden. We kennen de juridische markt en helpen realistische uitgangspunten te formuleren, voor beide kanten.",
  },
];

export function CandidatesFAQ() {
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
            {candidatesFaqItems.map((item) => (
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
