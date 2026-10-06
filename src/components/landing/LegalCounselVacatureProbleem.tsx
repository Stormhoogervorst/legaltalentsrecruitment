import { SectionShell, SlashPill } from "@/components/home/primitives";

const mismatchCards = [
  {
    index: "001",
    title: "De serieuze rollen staan zelden open",
    body: "Mid- en senior legal counsel search loopt vaak discreet: een uitbreiding van het team, een opvolger, of een stille hire bij een scale-up. Jobboards tonen wat publiek mag, niet de opdracht die een organisatie liever uit het netwerk haalt.",
  },
  {
    index: "002",
    title: "Titel zegt weinig over cultuurfit",
    body: "“Legal counsel” dekt corporate counsel, commercial counsel en de generalist in een groeiend team. Vacaturesites filteren nauwelijks op autonomie, tempo, sector en hoe het team werkt. Zonder die context is solliciteren gokken.",
  },
  {
    index: "003",
    title: "Openbaar zoeken kost discretie",
    body: "Wie nog in dienst is, wil geen openbare sollicitatie. Een cv dat rondgaat, kost reputatie. We toetsen eerst of niveau, vak en moment kloppen en stellen je alleen voor met jouw toestemming.",
  },
];

export function LegalCounselVacatureProbleem() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ HET PROBLEEM</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Jobboards missen de <br />
            serieuze counsel-rollen.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Indeed en LinkedIn zijn handig om te zien wat er speelt. Voor een
            doordachte legal counsel-stap schieten ze tekort: te veel ruis, te
            weinig context, te weinig discretie.
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
