import { PillButton, SectionShell } from "@/components/home/primitives";

export function AdvocaatHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <h1 className="display-lg max-w-5xl">
          Werving van <br />
          advocaten.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Werving van advocaten, van advocaat-stagiair tot partner, in alle
          rechtsgebieden. We komen voor de intake bij het kantoor langs en
          stellen alleen kandidaten voor die we zelf hebben gesproken. No cure,
          no pay.
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
