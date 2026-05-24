import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { SectionShell, SlashPill } from "@/components/home/primitives";
import { legalPracticeAreas } from "@/lib/legal";

export function PracticeAreas() {
  return (
    <section className="section-y bg-background text-foreground">
      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <SlashPill>/ RECHTSGEBIEDEN</SlashPill>
            <AnimatedHeadline
              lines={["Breed netwerk.", "Scherpe focus."]}
              className="display-md mt-8 max-w-3xl"
            />
          </div>
          <p className="max-w-xl text-[18px] leading-[1.5] text-foreground-secondary lg:justify-self-end">
            Van advocatuur tot bedrijfsleven: wij verbinden juridische
            specialisten met vaste posities waar inhoud, cultuur en ambitie
            samenkomen.
          </p>
        </div>

        <div className="mt-16 grid border-t border-border-light md:grid-cols-2">
          {legalPracticeAreas.map((area, index) => (
            <div
              key={area}
              className="flex items-center justify-between gap-6 border-b border-border-light py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
            >
              <span className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                / {String(index + 1).padStart(3, "0")}
              </span>
              <h3 className="display-h3 text-right">{area}</h3>
            </div>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
