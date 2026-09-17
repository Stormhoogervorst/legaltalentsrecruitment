import { SectionShell, SlashPill } from "@/components/home/primitives";

const values = [
  {
    index: "/ 001",
    title: "Kwaliteit",
    body: "Wij spreken alle kandidaten voor wij ze aan je voorstellen. Ons motto is kwaliteit boven kwantiteit: overspoelt worden met CV's is niet prettig. Een aantal top kandidaten wel.",
  },
  {
    index: "/ 002",
    title: "Service",
    body: "Wij houden van korte lijnen, snel schakelen, persoonlijk advies en eerlijkheid. Wij zijn 7 dagen in de week te bereiken en kandidaten kunnen ons ook buiten werktijd bellen. Handig toch?",
  },
  {
    index: "/ 003",
    title: "Vertrouwen",
    body: "Wij begrijpen hoe belangrijk een discreet proces is. Wij zullen nooit ongevraagd je CV delen met een kantoor. Voor bedrijven kunnen wij ook anoniem werven.",
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
