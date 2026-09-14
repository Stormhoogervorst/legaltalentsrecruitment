import { SectionShell, SlashPill } from "@/components/home/primitives";

const mismatchCards = [
  {
    index: "001",
    title: "De serieuze rollen staan zelden open",
    body: "Veel inhouse search loopt discreet: een eerste jurist, een opvolger voor de GC, of een stille uitbreiding. Jobboards tonen wat publiek mag — niet wat opdrachtgevers écht zoeken. Wie alleen scrollt, mist het grootste deel van de markt.",
  },
  {
    index: "002",
    title: "Titel zegt weinig over de baan",
    body: "“Bedrijfsjurist” dekt junior tot head of legal. De ene rol is contracten draaien in een groot team, de andere is als enige jurist sparren met de directie. Vacaturesites filteren dat nauwelijks — cultuur, autonomie en tempo blijven buiten beeld.",
  },
  {
    index: "003",
    title: "Niveau en timing kloppen vaak niet",
    body: "Solliciteren op een te zware of te lichte rol kost energie en reputatie. En wie nog in dienst is, wil geen openbare sollicitatie. Wij toetsen eerst of een overstap past — inhoudelijk, in seniority en in moment — voordat er een introductie volgt.",
  },
];

export function BedrijfsjuristVacatureProbleem() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ HET PROBLEEM</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Scrollen is geen <br />
            serieuze overstap.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Indeed en LinkedIn zijn handig om te kijken wat er speelt. Voor een
            doordachte bedrijfsjurist-stap schieten ze tekort: te weinig
            context, te veel ruis, te weinig discretie.
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
