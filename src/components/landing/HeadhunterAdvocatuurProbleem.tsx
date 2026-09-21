import { SectionShell, SlashPill } from "@/components/home/primitives";

const mismatchCards = [
  {
    index: "001",
    title: "De juiste mensen solliciteren niet",
    body: "Op partner-, counsel- en GC-niveau zit talent zelden op een jobboard. Ze zijn in functie, vaak tevreden genoeg, en bewegen alleen als een headhunter juridisch hen persoonlijk en discreet benadert — met een rol die écht iets toevoegt.",
  },
  {
    index: "002",
    title: "Algemene werving mist het vak",
    body: "Een generalist die ook finance of IT doet, herkent het verschil tussen een corporate counsel en een partner ondernemingsrecht zelden. Bij senior legal search is vakinhoud, track record en cultuurfit het hele werk — niet een extra filter achteraf.",
  },
  {
    index: "003",
    title: "Volume schaadt in een kleine markt",
    body: "De Nederlandse advocatuur en inhouse-gemeenschap is compact. Vijftig cv’s rondsturen is geen search; het is ruis. Een headhunter advocatuur werkt met mapping en een korte shortlist — kandidaten die wij zelf hebben gesproken.",
  },
];

export function HeadhunterAdvocatuurProbleem() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ HET PROBLEEM</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Senior legal talent reageert{" "}
            <span className="block">niet op een vacature.</span>
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Een advertentie of een generalistisch bureau bereikt zelden de
            mensen die je écht nodig hebt. Partners, counsel en general
            counsel zijn passief — en een slordige search is morgen gesprek
            van de dag.
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
