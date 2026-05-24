import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";

export function AboutCTA() {
  return (
    <section className="bg-dark-background py-40 text-center text-dark-foreground">
      <SectionShell>
        <SlashPill variant="dark">/ KENNISMAKEN</SlashPill>
        <h2 className="display-lg mx-auto mt-8 max-w-4xl">
          Even kennismaken?
        </h2>
        <p className="mx-auto mt-8 max-w-[480px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Bij voorkeur op locatie, op een kopje koffie. Vrijblijvend en
          vertrouwelijk.
        </p>
        <div className="mt-10">
          <PillButton href="/contact" variant="dark">
            Plan een afspraak →
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
