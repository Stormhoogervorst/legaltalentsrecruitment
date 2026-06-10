import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function GeneralCounselHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — GENERAL COUNSEL</SlashPill>
        <AnimatedHeadline
          as="h1"
          lines={["Werving van", "general counsel."]}
          className="display-lg mt-8 max-w-5xl"
        />
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Een general counsel is meer dan de hoogste jurist in de organisatie.
          Het is de persoon die juridische risico&apos;s vertaalt naar zakelijke
          beslissingen, die de directie adviseert bij overnames,
          financieringsrondes en geschillen, en die het legal-team opbouwt en
          aanstuurt. Het is een hire die je niet vaak doet en niet snel
          terugdraait. Wij vinden general counsels die inhoudelijk sterk zijn én
          op directieniveau meebewegen.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een intake →</PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
