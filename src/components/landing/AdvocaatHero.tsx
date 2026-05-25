import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function AdvocaatHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — ADVOCATUUR</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Werving van <br />
          advocaten.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Specialistisch recruitment voor de advocatuur. Van
          advocaat-stagiair tot partner-niveau, in alle rechtsgebieden.
          Persoonlijk netwerk in plaats van database, no cure no pay.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PillButton href="/contact">Plan een intake →</PillButton>
          <PillButton href="#aanpak" variant="secondary">
            Onze aanpak
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
