import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const generalCounselFaqItems = [
  {
    question:
      "Wat is het verschil tussen een general counsel en een legal counsel?",
    answer:
      "Een general counsel is juridisch eindverantwoordelijk en opereert op directieniveau — strategie, governance en aansturing van het legal-team. Een legal counsel is doorgaans uitvoerend: de jurist die de dagelijkse juridische praktijk draagt. Veel organisaties beginnen met een legal counsel en groeien later naar een general counsel.",
  },
  {
    question:
      "Werven jullie general counsels ook voor een eerste legal-functie in een scale-up?",
    answer:
      "Ja. Bij een scale-up is de general counsel vaak de allereerste juridisch eindverantwoordelijke — nog hands-on en breed inzetbaar. We zoeken dan iemand die comfortabel is met die combinatie van strategie en uitvoering.",
  },
  {
    question:
      "Hoe zit het met vertrouwelijkheid bij het werven van een general counsel?",
    answer:
      "Discretie is uitgangspunt. Op dit niveau zijn kandidaten vrijwel altijd nog in dienst en is de zoektocht gevoelig. We delen jullie naam pas na overleg, en kandidaatgegevens alleen na expliciete toestemming.",
  },
];

export function GeneralCounselFAQ() {
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
            {generalCounselFaqItems.map((item) => (
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
