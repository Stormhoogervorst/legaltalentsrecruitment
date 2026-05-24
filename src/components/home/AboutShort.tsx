import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";

export function AboutShort() {
  return (
    <section className="section-y bg-background text-foreground">
      <SectionShell>
        <div className="max-w-4xl">
            <SlashPill>/ OVER ONS</SlashPill>
            <AnimatedHeadline
              lines={["Persoonlijke aanpak", "is de norm."]}
              className="display-md mt-8 max-w-xl"
            />
            <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-[1.6] text-foreground-secondary">
              <p>
                Storm en Max richtte Legal Talents Recruitment op vanuit één
                overtuiging: Legal Recruitment aanbieden waarbij persoonlijke
                aanpak, vertrouwen en kwaliteit ouderwets hoog in het vaandel
                staat.
              </p>
              <p>
                Met een achtergrond in de juridische wereld en een breed netwerk
                van advocaten, bedrijfsjuristen en kantoren, begeleiden wij beide
                kanten van de tafel.
              </p>
            </div>
            <div className="mt-10">
              <PillButton href="/over-ons" variant="secondary">
                Lees ons verhaal →
              </PillButton>
            </div>
        </div>
      </SectionShell>
    </section>
  );
}
