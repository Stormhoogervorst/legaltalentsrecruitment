import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function ScaleUpsCTA() {
  return (
    <section className="bg-dark-background py-16 text-dark-foreground md:py-40">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ INTAKE</SlashPill>
        <AnimatedHeadline
          lines={["Een intake", "kost niets."]}
          className="display-lg mx-auto mt-8 max-w-4xl"
        />
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Vertrouwelijk en zonder verplichtingen. We komen bij jullie langs en
          denken mee over wat jullie in deze fase nodig hebben.
        </p>
        <div className="mt-10">
          <PillButton href="/contact" variant="dark">
            Plan een intake →
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
