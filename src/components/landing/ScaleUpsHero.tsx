import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function ScaleUpsHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — STARTUPS & SCALE-UPS</SlashPill>
        <AnimatedHeadline
          as="h1"
          lines={["Legal recruitment voor", "startups en scale-ups"]}
          className="display-lg mt-8 max-w-5xl"
        />
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Een groeiend bedrijf heeft op een gegeven moment een jurist nodig die
          meegroeit — niet een advocaat die in een kantoorstructuur wil blijven.
          Wij kennen het verschil, en we kennen de mensen die de overstap naar
          een scale-up daadwerkelijk willen maken. No cure no pay.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een intake →</PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
