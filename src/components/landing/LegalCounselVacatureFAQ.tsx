import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export const legalCounselVacatureFaqItems = [
  {
    question: "Wat is een legal counsel vacature via een recruiter?",
    answer:
      "Een legal counsel vacature via een recruiter is geen openbare advertentie waarop je zelf reageert. Je maakt kennis, we begrijpen niveau, vak en wat je zoekt, en we bespreken alleen rollen die daarbij passen, openstaand of via stille search. Je huidige werkgever benaderen we nooit. Een voorstel volgt alleen na jouw toestemming.",
    answerNode: (
      <>
        Een legal counsel vacature via een recruiter is geen openbare
        advertentie waarop je zelf reageert. Je maakt kennis, we begrijpen
        niveau, vak en wat je zoekt, en we bespreken alleen rollen die daarbij
        passen, openstaand of via stille search. Je huidige werkgever
        benaderen we nooit. Meer over die werkwijze staat op{" "}
        <Link href="/voor-kandidaten" className={linkClassName}>
          voor kandidaten
        </Link>
        ; een voorstel volgt alleen na jouw toestemming.
      </>
    ) as ReactNode,
  },
  {
    question: "Wat is het verschil tussen legal counsel en bedrijfsjurist?",
    answer:
      "In de praktijk overlappen de rollen: beide zijn inhouse juristen die de dagelijkse juridische praktijk draaien. Legal counsel is de internationalere titel en kom je vaker tegen bij scale-ups en organisaties met Engels als voertaal. Bedrijfsjurist is de Nederlandse term. We matchen beide, maar houden de profielen uit elkaar.",
    answerNode: (
      <>
        In de praktijk overlappen de rollen: beide zijn inhouse juristen die de
        dagelijkse juridische praktijk draaien. Legal counsel is de
        internationalere titel en kom je vaker tegen bij scale-ups en
        organisaties met Engels als voertaal. Bedrijfsjurist is de Nederlandse
        term. Wie die titel zoekt, kan terecht op{" "}
        <Link href="/bedrijfsjurist-vacature" className={linkClassName}>
          bedrijfsjurist vacature
        </Link>
        . We matchen beide, maar houden de profielen uit elkaar.
      </>
    ) as ReactNode,
  },
  {
    question: "Kost een kennismaking iets?",
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
    question: "Werken jullie landelijk?",
    answer:
      "Ja. Legal Talents werkt landelijk in Nederland. Onze basis is Nijmegen; een gesprek kan telefonisch, digitaal of op locatie. We beperken legal counsel-rollen niet tot de Randstad.",
  },
  {
    question: "Wat is het verschil tussen een open en een stille search?",
    answer:
      "Een open legal counsel vacature mag publiek en kan ook op een jobboard staan. Een stille search is een opdracht die de opdrachtgever niet op Indeed of LinkedIn zet, bijvoorbeeld omdat de zittende jurist het nog niet weet, of omdat de rol vertrouwelijk is. Die rollen bereik je via een recruiter, niet via een open sollicitatieformulier.",
    answerNode: (
      <>
        Een open legal counsel vacature mag publiek en kan ook op een jobboard
        staan. Posities die zichtbaar mogen, staan bij{" "}
        <Link href="/vacatures" className={linkClassName}>
          vacatures
        </Link>
        . Een stille search is een opdracht die de opdrachtgever niet op Indeed
        of LinkedIn zet, bijvoorbeeld omdat de zittende jurist het nog niet
        weet, of omdat de rol vertrouwelijk is. Die rollen bereik je via een
        recruiter, niet via een open sollicitatieformulier.
      </>
    ) as ReactNode,
  },
  {
    question: "Is deze pagina ook voor stagiaires?",
    answer:
      "Nee. Deze pagina is voor junior tot senior legal counsel, corporate counsel en specialisten die een inhouse volgende stap zoeken. Stagiair- of studentrollen bemiddelen wij hier niet.",
  },
];

export function LegalCounselVacatureFAQ() {
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
            {legalCounselVacatureFaqItems.map((item) => (
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
