import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export const juridischRecruiterFaqItems = [
  {
    question:
      "Wat is het verschil tussen een juridisch recruiter en een vacaturebank?",
    answer:
      "Een vacaturebank is zelfservice: je plaatst een advertentie en wacht op reacties. Een juridisch recruiter zoekt actief — ook bij talent dat niet solliciteert. Wij spreken kandidaten, toetsen vakinhoud en cultuur, en komen met een onderbouwde shortlist. Vooral op medior en senior niveau zit het meeste talent niet op jobboards.",
  },
  {
    question: "Hoe werkt jullie honorarium?",
    answer:
      "No cure, no pay. Het honorarium is alleen verschuldigd bij een succesvolle plaatsing: een percentage van het fulltime bruto jaarsalaris, vooraf schriftelijk vastgelegd. Geen losse kosten voor intake, screening of coördinatie. Het exacte percentage hangt af van seniority, complexiteit en exclusiviteit.",
    answerNode: (
      <>
        No cure, no pay. Het honorarium is alleen verschuldigd bij een
        succesvolle plaatsing: een percentage van het fulltime bruto
        jaarsalaris, vooraf schriftelijk vastgelegd. Geen losse kosten voor
        intake, screening of coördinatie. Het exacte percentage hangt af van
        seniority, complexiteit en exclusiviteit. Meer over het model staat
        bij{" "}
        <Link href="/voor-opdrachtgevers" className={linkClassName}>
          voor opdrachtgevers
        </Link>{" "}
        en in de{" "}
        <Link href="/algemene-voorwaarden" className={linkClassName}>
          algemene voorwaarden
        </Link>
        .
      </>
    ) as ReactNode,
  },
  {
    question: "Werven jullie ook interim, of alleen vaste posities?",
    answer:
      "Onze kern is werving en selectie voor vaste functies. Interim of tijdelijke inhuur kan in overleg, afhankelijk van het profiel en de opdracht. Voor de meeste kantoren en legal teams zoeken we een duurzame match — iemand die blijft, niet iemand die een gat vult tot de volgende ronde.",
  },
  {
    question: "Werken jullie landelijk?",
    answer:
      "Ja. Onze basis is Nijmegen, maar we werken landelijk. Voor opdrachten buiten de regio komen we graag op locatie, of starten we digitaal. De juridische arbeidsmarkt in Nederland is compact; relevant talent zit zelden alleen in één stad.",
  },
  {
    question: "Kost een kennismaking kandidaten iets?",
    answer:
      "Nee. Wij worden betaald door opdrachtgevers, niet door kandidaten. Een gesprek is vrijblijvend en vertrouwelijk. Staat er nu niets passends open, dan houden we je profiel achter de hand tot er wel iets is.",
    answerNode: (
      <>
        Nee. Wij worden betaald door opdrachtgevers, niet door kandidaten. Een
        gesprek is vrijblijvend en vertrouwelijk. Bekijk de{" "}
        <Link href="/vacatures" className={linkClassName}>
          actuele vacatures
        </Link>{" "}
        of plan een{" "}
        <Link href="/voor-kandidaten" className={linkClassName}>
          kennismaking
        </Link>
        . Staat er nu niets passends open, dan houden we je profiel achter de
        hand tot er wel iets is.
      </>
    ) as ReactNode,
  },
];

export function JuridischRecruiterFAQ() {
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
            {juridischRecruiterFaqItems.map((item) => (
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
                  {item.answerNode ?? item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
