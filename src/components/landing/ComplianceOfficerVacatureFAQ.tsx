import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

type FaqItem = {
  question: string;
  answer: string;
  answerNode?: ReactNode;
};

export const complianceOfficerVacatureFaqItems: FaqItem[] = [
  {
    question: "Wat doet een compliance officer?",
    answer:
      "Een compliance officer bewaakt dat een organisatie zich houdt aan wet- en regelgeving en aan de eigen integriteitsregels. De taken verschillen per sector, maar de kern is risico's in kaart brengen, beleid opstellen, de organisatie adviseren, controles uitvoeren en rapporteren aan het bestuur. In een gereguleerde omgeving hoort daar soms ook contact met een toezichthouder bij.",
    answerNode: (
      <>
        Een compliance officer bewaakt dat een organisatie zich houdt aan wet-
        en regelgeving en aan de eigen integriteitsregels. De taken verschillen
        per sector, maar de kern is risico&apos;s in kaart brengen, beleid
        opstellen, de organisatie adviseren, controles uitvoeren en rapporteren
        aan het bestuur. In een gereguleerde omgeving hoort daar soms ook
        contact met een toezichthouder bij. Een uitgebreidere uitleg staat in{" "}
        <Link
          href="/blogs/wat-doet-een-compliance-officer"
          className={linkClassName}
        >
          wat doet een compliance officer
        </Link>
        .
      </>
    ) as ReactNode,
  },
  {
    question: "Welke opleiding of achtergrond heb je nodig?",
    answer:
      "Er is geen vaste route. Veel compliance officers hebben een juridische achtergrond. Ook mensen met bedrijfskunde, economie, accountancy of risk management stappen in, vaak met een aanvullende compliance-opleiding. Wij matchen op wat de rol vraagt, niet op één diploma.",
  },
  {
    question: "Kan ik als junior instappen in een compliance officer vacature?",
    answer:
      "Ja, als de rol een instap is. Een junior compliance officer vacature betekent meedraaien met begeleiding: monitoring, dossiers en beleid, nog niet de eindverantwoordelijkheid. Deze pagina is niet voor stages. Wie al een paar jaar meedraait, zoekt eerder een medior of senior stap.",
  },
  {
    question: "Wat is het verschil tussen de eerste en de tweede lijn?",
    answer:
      "In het three-lines-model is de business de eerste lijn: zelf verantwoordelijk voor het beheersen van risico's. Compliance als onafhankelijke functie is de tweede lijn: adviseren, kaders stellen en monitoren. Een vacature noemt dat verschil lang niet altijd. Wij maken vooraf expliciet of je in de operatie zit of als tweede lijn erboven.",
  },
  {
    question: "Kost het mij iets als kandidaat?",
    answer:
      "Nee. Kandidaten betalen niets. Een kennismaking is kosteloos en vrijblijvend. We worden betaald door opdrachtgevers, alleen bij een succesvolle plaatsing.",
    answerNode: (
      <>
        Nee. Kandidaten betalen niets. Een kennismaking is kosteloos en
        vrijblijvend. We worden betaald door opdrachtgevers, alleen bij een
        succesvolle plaatsing. Plan het via{" "}
        <Link href="/contact" className={linkClassName}>
          contact
        </Link>
        .
      </>
    ) as ReactNode,
  },
  {
    question: "Hoe discreet is de matching?",
    answer:
      "Discreet is de standaard. We benaderen je huidige werkgever nooit. Een voorstel volgt alleen na jouw expliciete toestemming, en we bespreken vooraf wat de opdrachtgever zoekt. Veel compliance officer vacatures lopen via een stille search en staan niet op Indeed of LinkedIn.",
    answerNode: (
      <>
        Discreet is de standaard. We benaderen je huidige werkgever nooit. Een
        voorstel volgt alleen na jouw expliciete toestemming, en we bespreken
        vooraf wat de opdrachtgever zoekt. Veel compliance officer vacatures
        lopen via een stille search en staan niet op Indeed of LinkedIn. Meer
        over die werkwijze staat op{" "}
        <Link href="/voor-kandidaten" className={linkClassName}>
          voor kandidaten
        </Link>
        .
      </>
    ) as ReactNode,
  },
  {
    question: "Waar staan jullie compliance vacatures?",
    answer:
      "Openstaande posities die publiek mogen, staan bij vacatures. Daarnaast matchen we rollen die niet op een jobboard staan. Zoek je een compliance officer vacature in Amsterdam, Utrecht of Rotterdam, of elders in Nederland: dat bespreken we in de kennismaking. We werken landelijk en maken geen aparte stadspagina's.",
    answerNode: (
      <>
        Openstaande posities die publiek mogen, staan bij{" "}
        <Link href="/vacatures" className={linkClassName}>
          vacatures
        </Link>
        . Daarnaast matchen we rollen die niet op een jobboard staan. Zoek je
        een compliance officer vacature in Amsterdam, Utrecht of Rotterdam, of
        elders in Nederland: dat bespreken we in de kennismaking. We werken
        landelijk en maken geen aparte stadspagina&apos;s.
      </>
    ) as ReactNode,
  },
];

export function ComplianceOfficerVacatureFAQ() {
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
            {complianceOfficerVacatureFaqItems.map((item) => (
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
