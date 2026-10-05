import { SectionShell, SlashPill } from "@/components/home/primitives";

const mismatchCards = [
  {
    index: "001",
    title: "Veel ruis, weinig rol",
    body: "Compliance vacatures op jobboards lopen uiteen van een junior instap tot een bijzaak naast een andere functie. De titel compliance officer zegt zelden welk werk je echt doet: beleid, monitoring, advies, of een operationele controle.",
  },
  {
    index: "002",
    title: "Niveau en scope blijven vaag",
    body: "Een vacature compliance officer noemt lang niet altijd of je in de eerste of tweede lijn zit, welke sectorregels gelden, en hoeveel zelfstandigheid je hebt. Zonder die context is solliciteren gokken.",
  },
  {
    index: "003",
    title: "Openbaar zoeken kost discretie",
    body: "Wie nog in dienst is, wil geen openbare sollicitatie. Serieuze compliance officer vacatures, zeker in de financiële sector, lopen vaak discreet. Wij toetsen eerst of niveau, sector en moment kloppen, en introduceren je alleen na expliciete toestemming.",
  },
];

export function ComplianceOfficerVacatureProbleem() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ HET PROBLEEM</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Jobboards missen de <br />
            serieuze compliance-rollen.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Indeed en LinkedIn zijn handig om te zien wat er speelt. Voor een
            doordachte stap als compliance officer schieten ze tekort: te veel
            ruis, te weinig context over niveau en scope, te weinig discretie.
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
