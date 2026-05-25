import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function BedrijfsjuristHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ RECRUITMENT — IN-HOUSE LEGAL</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Werving van <br />
          bedrijfsjuristen.
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Specialistisch recruitment voor in-house juridische functies. Van
          bedrijfsjurist tot head of legal en general counsel. Voor corporates
          en mid-market die een eigen juridische functie opbouwen of uitbreiden.
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
