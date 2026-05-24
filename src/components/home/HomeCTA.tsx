import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";

export function HomeCTA() {
  return (
    <section className="bg-dark-background py-16 text-dark-foreground md:py-40">
      <SectionShell className="text-center">
        <SlashPill variant="dark">/ KENNISMAKING</SlashPill>
        <AnimatedHeadline
          lines={["Klaar voor de", "volgende stap?"]}
          className="display-lg mx-auto mt-8 max-w-4xl"
        />
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Een vrijblijvend gesprek, vertrouwelijk en zonder verplichtingen.
        </p>
        <div className="mt-10">
          <PillButton href="/contact" variant="dark">
            Plan een kennismaking →
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
