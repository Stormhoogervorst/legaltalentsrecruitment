import { SectionShell, SlashPill } from "@/components/home/primitives";

const mismatchCards = [
  {
    index: "001",
    title: "CV is niet hetzelfde als fit",
    body: "Een advocaat-ondernemingsrecht is geen bedrijfsjurist, en een legal counsel is geen compliance officer. Generalisten sturen cv’s die op papier lijken te kloppen — zonder te toetsen op dossier, seniority en de cultuur van kantoor of legal team.",
  },
  {
    index: "002",
    title: "Passief talent zit niet op jobboards",
    body: "Op medior en senior niveau oriënteert het meeste juridische talent zich discreet. Wie alleen adverteert, mist de mensen die niet solliciteren. Een juridische recruiter benadert hen één-op-één, met toestemming en zonder ruis richting de huidige werkgever.",
  },
  {
    index: "003",
    title: "Volume kost tijd en reputatie",
    body: "Vijftig cv’s beoordelen is geen search. Het belast partners, GC’s en HR, en het signaal naar de markt is slordig. Wij komen met een korte, onderbouwde shortlist — kandidaten die wij zelf hebben gesproken.",
  },
];

export function JuridischRecruiterProbleem() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ HET PROBLEEM</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Generalisten missen <br />
            de juridische markt.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Juridische werving draait om vakinhoud, discretie en cultuur. Een
            algemeen bureau dat ook IT of finance doet, heeft die context
            zelden — en dat merk je in de shortlist.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {mismatchCards.map((card) => (
            <article key={card.index} className="rounded-2xl bg-background p-8">
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                / {card.index}
              </p>
              <h3 className="display-h3 mt-5">{card.title}</h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
