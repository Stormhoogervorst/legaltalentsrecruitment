import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export const headhunterAdvocatuurFaqItems = [
  {
    question:
      "Wat is het verschil tussen een headhunter en een juridisch recruiter?",
    answer:
      "Een juridisch recruiter werft breder: van stagiair tot GC, vaak met een mix van netwerk, search en — waar het past — een open vacature. Een headhunter advocatuur, of juridisch headhunter, richt zich op rollen die moeilijk open te zetten zijn: senior, discreet, passief talent. Legal executive search betekent mapping van de markt, persoonlijke benadering en een korte shortlist. Voor junior tot medior is recruiter-werk vaak voldoende; voor partner, GC of een stille opvolging is headhunting het passende instrument.",
    answerNode: (
      <>
        Een{" "}
        <Link href="/juridisch-recruiter" className={linkClassName}>
          juridisch recruiter
        </Link>{" "}
        werft breder: van stagiair tot GC, vaak met een mix van netwerk, search
        en — waar het past — een open vacature. Een headhunter advocatuur, of
        juridisch headhunter, richt zich op rollen die moeilijk open te zetten
        zijn: senior, discreet, passief talent. Legal executive search betekent
        mapping van de markt, persoonlijke benadering en een korte shortlist.
        Voor junior tot medior is recruiter-werk vaak voldoende; voor partner,
        GC of een stille opvolging is headhunting het passende instrument.
      </>
    ) as ReactNode,
  },
  {
    question: "Wanneer is headhunting zinvol?",
    answer:
      "Als de rol senior is, de markt klein, de zoektocht vertrouwelijk moet blijven, of eerdere werving via advertenties is vastgelopen. Typisch: partner of laterale partner, counsel, general counsel, senior bedrijfsjurist, head of legal, compliance-leiding. Als het profiel breed is en open mag, is een recruiter-aanpak vaak sneller en passender.",
  },
  {
    question: "Voor welke sectoren en rollen werven jullie?",
    answer:
      "Advocatenkantoren — boutique tot mid-market — en inhouse legal teams bij corporates, mid-market en groeiende organisaties. Rollen: partner, counsel, general counsel, senior bedrijfsjurist, head of legal en compliance-leiding. Landelijk in Nederland. Niet elke juridische vacature vraagt executive search; dat zeggen we ook als het niet zo is.",
  },
  {
    question: "Werken jullie landelijk?",
    answer:
      "Ja. Onze basis is Nijmegen, maar we werken landelijk. Voor opdrachten buiten de regio komen we graag op locatie, of starten we digitaal. De juridische arbeidsmarkt in Nederland is compact; relevant talent zit zelden alleen in één stad.",
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
    question: "Hoe discreet is de aanpak?",
    answer:
      "Discretie is het uitgangspunt, niet een extra. Wij delen jullie naam en de specifieke opdracht alleen met kandidaten na overleg. In de mappingfase werken we vaak met een algemene profielomschrijving, zodat de zoektocht niet in de markt ligt. Kandidaten introduceren we alleen na hun expliciete toestemming. Jullie huidige team en de markt horen het niet via ons.",
  },
  {
    question: "Wat kunnen kandidaten verwachten?",
    answer:
      "Een vertrouwelijke, vrijblijvende kennismaking. Wij worden betaald door opdrachtgevers, niet door kandidaten. We benaderen je huidige werkgever nooit. Alleen een voorstel na jouw toestemming, met context over de rol voordat je in gesprek gaat. Staat er niets passends open, dan zeggen we dat eerlijk.",
    answerNode: (
      <>
        Een vertrouwelijke, vrijblijvende kennismaking. Wij worden betaald door
        opdrachtgevers, niet door kandidaten. We benaderen je huidige werkgever
        nooit. Alleen een voorstel na jouw toestemming, met context over de rol
        voordat je in gesprek gaat. Bekijk{" "}
        <Link href="/voor-kandidaten" className={linkClassName}>
          voor kandidaten
        </Link>{" "}
        of de{" "}
        <Link href="/vacatures" className={linkClassName}>
          actuele vacatures
        </Link>
        . Staat er niets passends open, dan zeggen we dat eerlijk.
      </>
    ) as ReactNode,
  },
];

export function HeadhunterAdvocatuurFAQ() {
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
            {headhunterAdvocatuurFaqItems.map((item) => (
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
