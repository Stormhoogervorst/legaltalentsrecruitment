import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const legalCounselFaqItems = [
  {
    question:
      "Wat is het verschil tussen een legal counsel en een bedrijfsjurist?",
    answer:
      "In de praktijk worden de termen vaak door elkaar gebruikt en overlappen ze sterk; beide zijn in-house juristen die de dagelijkse juridische praktijk draaien. \"Legal counsel\" is internationaler en kom je vaker tegen bij scale-ups en bedrijven met Engels als voertaal, \"bedrijfsjurist\" is de Nederlandse term. We vinden talent voor beide.",
    answerNode: (
      <>
        In de praktijk worden de termen vaak door elkaar gebruikt en overlappen
        ze sterk; beide zijn in-house juristen die de dagelijkse juridische
        praktijk draaien. &ldquo;Legal counsel&rdquo; is internationaler en kom
        je vaker tegen bij scale-ups en bedrijven met Engels als voertaal,{" "}
        <Link
          href="/recruitment/bedrijfsjurist"
          className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
        >
          bedrijfsjurist
        </Link>{" "}
        is de Nederlandse term. We vinden talent voor beide.
      </>
    ) as ReactNode,
  },
  {
    question:
      "Zoeken jullie ook een eerste legal counsel voor een organisatie zonder juridische afdeling?",
    answer:
      "Ja, dat is een veelgevraagd profiel. Voor een eerste legal hire zoeken we doorgaans een brede generalist die zelfstandig kan werken en comfortabel is met het opzetten van juridische processen vanaf nul.",
  },
  {
    question: "Werven jullie legal counsels op een specifiek rechtsgebied?",
    answer:
      "Dat kan. Naast brede generalisten vinden we ook legal counsels met een specialisatie, bijvoorbeeld in commerciële contracten, arbeidsrecht of privacy. We stemmen de zoektocht af op het profiel dat jullie nodig hebben.",
  },
];

export function LegalCounselFAQ() {
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
            {legalCounselFaqItems.map((item) => (
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
