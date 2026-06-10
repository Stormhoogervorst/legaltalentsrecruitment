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
          lines={["Klaar om je", "legal-team te bouwen?"]}
          className="display-lg mx-auto mt-8 max-w-4xl"
        />
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Een vrijblijvende intake, vertrouwelijk en zonder verplichtingen. We
          denken mee over wat je in deze fase nodig hebt.
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
