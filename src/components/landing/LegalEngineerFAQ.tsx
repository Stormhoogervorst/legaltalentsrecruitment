import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const legalEngineerFaqItems = [
  {
    question: "Wat is precies een legal engineer?",
    answer:
      "Een legal engineer staat op het snijvlak van recht en technologie: iemand met juridische kennis die juridische processen, contracten en documenten vertaalt naar tooling, automatisering en workflows. In tegenstelling tot een advocaat of legal counsel ligt de focus niet op klassiek juridisch advies, maar op het efficiënter en schaalbaar maken van juridisch werk.",
    answerNode: (
      <>
        Een legal engineer staat op het snijvlak van recht en technologie:
        iemand met juridische kennis die juridische processen, contracten en
        documenten vertaalt naar tooling, automatisering en workflows. In
        tegenstelling tot een{" "}
        <Link
          href="/recruitment/advocaat"
          className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          advocaat
        </Link>{" "}
        of{" "}
        <Link
          href="/recruitment/legal-counsel"
          className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          legal counsel
        </Link>{" "}
        ligt de focus niet op klassiek juridisch advies, maar op het
        efficiënter en schaalbaar maken van juridisch werk.
      </>
    ) as ReactNode,
  },
  {
    question: "Werven jullie zowel in-house als bij kantoren?",
    answer:
      "Ja. Legal engineers werken zowel in-house — bij bedrijven met een eigen legal-afdeling — als bij advocatenkantoren die investeren in legal design en automatisering, en bij legal tech-bedrijven zelf. Wij werven voor alle drie de contexten.",
  },
  {
    question: "Hoe vinden jullie dit hybride profiel?",
    answer:
      "Legal engineers staan zelden actief open op vacaturesites en zijn lastig te herkennen op basis van een CV alleen. Wij benaderen gericht juristen met technische affiniteit, developers met juridische interesse en legal ops-specialisten via ons persoonlijke netwerk, en toetsen zelf of het hybride profiel écht aanwezig is.",
  },
  {
    question: "Wat is de gemiddelde doorlooptijd?",
    answer:
      "Voor de meeste legal engineering-rollen 4 tot 10 weken vanaf intake tot ondertekend contract. Omdat het aanbod schaars is, kan dit bij zeer specifieke of senior profielen langer duren — wij zijn daar bij de intake transparant over.",
  },
  {
    question: "Werken jullie ook met scale-ups en legal tech-bedrijven?",
    answer:
      "Ja, juist daar is de vraag naar legal engineers vaak het grootst. Wij werven zowel voor legal tech-bedrijven die het profiel zelf nodig hebben om hun product te bouwen, als voor scale-ups die hun eerste legal engineer aannemen.",
  },
  {
    question: "Hoe gaan jullie om met exclusiviteit?",
    answer:
      "Wij werken het liefst exclusief — dat geeft ons de ruimte om de beperkte pool van hybride talent optimaal te benutten zonder dat kandidaten via meerdere bureaus tegelijk worden benaderd. Niet-exclusieve opdrachten kunnen wel, maar dan hanteren we soms aangepaste voorwaarden.",
  },
];

export function LegalEngineerFAQ() {
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
            {legalEngineerFaqItems.map((item) => (
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
