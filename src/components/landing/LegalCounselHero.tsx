import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function LegalCounselHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — LEGAL COUNSEL</SlashPill>
        <AnimatedHeadline
          as="h1"
          lines={["Werving van", "legal counsel."]}
          className="display-lg mt-8 max-w-5xl"
        />
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          De legal counsel is de jurist die het werk doet. Contracten opstellen
          en onderhandelen, de business adviseren, compliance bewaken,
          geschillen begeleiden — de dagelijkse juridische praktijk die een
          organisatie draaiende houdt. Het is vaak de eerste vaste juridische
          hire, of de uitbreiding van een groeiend team. Wij vinden legal
          counsels die inhoudelijk sterk zijn en zelfstandig kunnen werken in de
          praktijk.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een intake →</PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
