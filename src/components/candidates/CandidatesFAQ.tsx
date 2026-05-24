import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const candidatesFaqItems = [
  {
    question: "Kost dit mij iets?",
    answer:
      "Nee. Onze dienstverlening richting jou is volledig kosteloos. Wij worden betaald door opdrachtgevers bij een succesvolle plaatsing, niet door kandidaten.",
  },
  {
    question: "Blijft mijn zoektocht echt vertrouwelijk?",
    answer:
      "Ja, altijd. Wij delen niets met huidige werkgevers, en introduceren je alleen na expliciete toestemming. Op verzoek werken we volledig anoniem in de eerste fase — bijvoorbeeld via versleutelde communicatie of buiten kantooruren.",
  },
  {
    question: "Wat als ik nog niet zeker weet of ik wil overstappen?",
    answer:
      "Geen probleem. Veel van onze gesprekken beginnen oriënterend. We brengen pas concrete posities ter sprake als we elkaar goed begrijpen en als er iets passends voorbij komt — dat kan weken of maanden duren. Geen druk.",
  },
  {
    question: "Welke rechtsgebieden of functies dekken jullie?",
    answer:
      "Alle juridische functies op middel- tot senior niveau, in alle rechtsgebieden. Van advocaat-stagiair tot partner, van bedrijfsjurist tot general counsel. Specialisaties zoals compliance, privacy en contractmanagement vallen daar ook onder.",
  },
  {
    question: "Wat gebeurt er met mijn CV?",
    answer:
      "Je CV bewaren wij maximaal 2 jaar na het laatste contact, of korter als je dat wenst. We delen het nooit zonder jouw expliciete toestemming per voorstel. Je kunt te allen tijde inzage, wijziging of verwijdering aanvragen — meer hierover in ons privacybeleid.",
  },
  {
    question: "Hoe weet ik of een functie écht bij mij past?",
    answer:
      "Wij screenen vooraf grondig — wat de werkgever zoekt, hoe de cultuur is, welke ruimte er is om te groeien, en wat de aandachtspunten zijn. Bij een voorstel krijg je deze context volledig, zodat je een eerlijke afweging kunt maken voordat we doorzetten.",
  },
  {
    question: "Helpen jullie ook bij de onderhandelingen?",
    answer:
      "Ja. Wij begeleiden je bij gesprekken, salarisonderhandeling en de voorwaarden. Onze ervaring met de juridische markt helpt om realistische uitgangspunten te formuleren — voor beide kanten.",
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
