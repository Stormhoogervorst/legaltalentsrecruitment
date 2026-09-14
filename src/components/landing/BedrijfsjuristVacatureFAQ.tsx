import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export const bedrijfsjuristVacatureFaqItems = [
  {
    question: "Hoe werkt een kennismaking?",
    answer:
      "Een vrijblijvend gesprek — telefonisch, digitaal of op locatie. We willen jouw achtergrond, richting en wat voor jou telt in werk en cultuur begrijpen. Pas daarna kijken we of er een passende bedrijfsjurist vacature of stille opdracht is. Het gesprek verplicht tot niets.",
    answerNode: (
      <>
        Een vrijblijvend gesprek — telefonisch, digitaal of op locatie. We
        willen jouw achtergrond, richting en wat voor jou telt in werk en
        cultuur begrijpen. Pas daarna kijken we of er een passende
        bedrijfsjurist vacature of stille opdracht is. Plan het via{" "}
        <Link href="/contact" className={linkClassName}>
          contact
        </Link>
        ; het gesprek verplicht tot niets.
      </>
    ) as ReactNode,
  },
  {
    question: "Blijft mijn oriëntatie vertrouwelijk?",
    answer:
      "Ja. Wij benaderen je huidige werkgever nooit. We introduceren je alleen na expliciete toestemming, per voorstel. Op verzoek blijven we in de eerste fase bewust vaag over wie je bent richting de opdrachtgever.",
  },
  {
    question:
      "Wat is het verschil met solliciteren via Indeed of LinkedIn?",
    answer:
      "Jobboards zijn zelfservice: jij reageert op wat publiek staat. Wij zoeken ook bij rollen die niet online staan, toetsen of niveau en cultuur kloppen, en geven je context voordat je in gesprek gaat. Geen openbare sollicitatie, geen cv dat ongevraagd rondgaat.",
    answerNode: (
      <>
        Jobboards zijn zelfservice: jij reageert op wat publiek staat. Wij
        zoeken ook bij rollen die niet online staan, toetsen of niveau en
        cultuur kloppen, en geven je context voordat je in gesprek gaat. Open
        posities die wél zichtbaar mogen:{" "}
        <Link href="/vacatures" className={linkClassName}>
          vacatures
        </Link>
        .
      </>
    ) as ReactNode,
  },
  {
    question: "Kost het mij iets om jullie in te schakelen?",
    answer:
      "Nee. Kandidaten betalen niets. Wij worden betaald door opdrachtgevers, alleen bij een succesvolle plaatsing. Een kennismaking is kosteloos en vrijblijvend.",
  },
  {
    question:
      "Wat als er nu geen passende bedrijfsjurist vacature openstaat?",
    answer:
      "Dan zeggen we dat eerlijk. We houden je profiel achter de hand tot er wél iets is dat past — dat kan weken of maanden duren. Geen druk om te solliciteren op een mismatch.",
    answerNode: (
      <>
        Dan zeggen we dat eerlijk. We houden je profiel achter de hand tot er
        wél iets is dat past — dat kan weken of maanden duren. Meer over hoe
        wij kandidaten begeleiden staat op{" "}
        <Link href="/voor-kandidaten" className={linkClassName}>
          voor kandidaten
        </Link>
        .
      </>
    ) as ReactNode,
  },
  {
    question: "Kunnen jullie iets zeggen over het salaris van een bedrijfsjurist?",
    answer:
      "Dat hangt af van ervaring, sector, regio en hoe zwaar de rol is. Generieke bedragen op een landingspagina misleiden eerder dan ze helpen. In de kennismaking bespreken we wat realistisch is voor jouw profiel; bij een concreet voorstel de bandbreedte van die opdrachtgever.",
  },
];

export function BedrijfsjuristVacatureFAQ() {
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
            {bedrijfsjuristVacatureFaqItems.map((item) => (
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
