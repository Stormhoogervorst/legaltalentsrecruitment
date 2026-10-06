import { SectionShell, SlashPill } from "@/components/home/primitives";

const values = [
  {
    index: "/ 001",
    title: "Kwaliteit",
    body: "We spreken alle kandidaten voordat we ze aan je voorstellen. Liever een paar topkandidaten dan een stapel cv's.",
  },
  {
    index: "/ 002",
    title: "Service",
    body: "We houden van korte lijnen en snel schakelen, en we zijn eerlijk. We zijn 7 dagen per week bereikbaar en kandidaten mogen ons ook buiten werktijd bellen.",
  },
  {
    index: "/ 003",
    title: "Vertrouwen",
    body: "Een discreet proces is belangrijk. We delen je cv nooit zonder jouw toestemming. Bedrijven kunnen ook anoniem werven.",
  },
];

export function Values() {
  return (
    <section className="section-y bg-background-secondary text-foreground">
      <SectionShell>
        <SlashPill>/ WAARDEN</SlashPill>
        <h2 className="display-md mt-8 max-w-4xl">Onze kernwaarden</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.index}
              className="rounded-2xl bg-background p-8"
            >
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                {value.index}
              </p>
              <h3 className="display-h3 mt-10">{value.title}</h3>
              <p className="mt-5 text-[16px] leading-[1.6] text-foreground-secondary">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
