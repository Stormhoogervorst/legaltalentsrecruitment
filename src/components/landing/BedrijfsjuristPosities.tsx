import { SectionShell, SlashPill } from "@/components/home/primitives";

const posities = [
  {
    index: "001",
    title: "De eerste bedrijfsjurist",
    body: "Voor bedrijven die hun eerste jurist in dienst nemen — vaak een schaalvergrotingsmoment. Vraagt om iemand die zelfstandig de juridische functie opzet, met sterke business-sensitiviteit.",
  },
  {
    index: "002",
    title: "Bedrijfsjurist (medior)",
    body: "Twee tot vijf jaar ervaring, vaak overstap vanuit de advocatuur. Voor groeiende juridische teams die handen en hoofden nodig hebben naast de senior.",
  },
  {
    index: "003",
    title: "Senior bedrijfsjurist",
    body: "Vijf jaar ervaring en meer. Specialisatie in specifieke gebieden zoals M&A, contracten, IT-recht, compliance. Vaak met internationale dimensie.",
  },
  {
    index: "004",
    title: "Head of legal / legal counsel",
    body: "Eindverantwoordelijke voor de juridische functie binnen een middelgrote organisatie. Combineert vakinhoud met team-management en strategische sparring met de directie.",
  },
  {
    index: "005",
    title: "General counsel",
    body: "C-level positie voor grote organisaties. Veel meer dan juridisch — risk management, governance, M&A, regulatory affairs en sparring met board. Werving op dit niveau is altijd vertrouwelijk en strategisch.",
  },
  {
    index: "006",
    title: "Specialistische in-house rollen",
    body: "Compliance officers, privacy officers, contractmanagers, IP counsel. Voor organisaties met specifieke juridische uitdagingen waar generieke juristen niet volstaan.",
  },
];

export function BedrijfsjuristPosities() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ POSITIES</SlashPill>
        <h2 className="display-md mt-8 max-w-[720px]">
          Van de eerste jurist <br />
          tot een legal team.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {posities.map((positie) => (
            <article
              key={positie.index}
              className="rounded-2xl bg-background-secondary p-8"
            >
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                / {positie.index}
              </p>
              <h3 className="display-h3 mt-5">{positie.title}</h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
                {positie.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
