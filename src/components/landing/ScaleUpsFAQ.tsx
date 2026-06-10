import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const scaleUpsFaqItems = [
  {
    question:
      "Werken jullie ook met early-stage startups of alleen met scale-ups?",
    answer:
      "We werken met beide. Voor early-stage bedrijven gaat het vaak om de allereerste legal hire; bij scale-ups om het uitbouwen van een bestaand team. We stemmen onze aanpak af op jullie fase.",
  },
  {
    question: "Wat kost het werven van een jurist voor een scale-up?",
    answer:
      "We werken op no cure, no pay. Het honorarium is een percentage van het fulltime bruto jaarsalaris van de geplaatste kandidaat, en is alleen verschuldigd bij een succesvolle plaatsing. Het exacte percentage spreken we vooraf af.",
  },
  {
    question: "Begrijpen jullie de cultuur van een scale-up?",
    answer:
      "Ja. We weten dat een scale-up iets anders vraagt dan een advocatenkantoor — qua tempo, zelfstandigheid en mentaliteit. We screenen kandidaten juist op of ze in die omgeving gedijen.",
  },
];

export function ScaleUpsFAQ() {
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
            {scaleUpsFaqItems.map((item) => (
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
