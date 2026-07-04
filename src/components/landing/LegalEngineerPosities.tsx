import { SectionShell, SlashPill } from "@/components/home/primitives";

const posities = [
  {
    index: "001",
    title: "Junior Legal Engineer",
    body: "Instapprofielen met een juridische basis en affiniteit met tooling, no-code en automatisering. Vaak recent afgestudeerd, met een aantoonbare interesse in legal tech.",
  },
  {
    index: "002",
    title: "Legal Engineer (medior)",
    body: "Zelfstandig ontwerpen en implementeren van juridische workflows, templates en legal tech. Het meest gevraagde niveau en het lastigst te vinden op de arbeidsmarkt.",
  },
  {
    index: "003",
    title: "Senior Legal Engineer",
    body: "Leidend in legal design, contract automation en toolimplementatie. Fungeert als brug naar IT en business, en draagt de langetermijnvisie op legal tech.",
  },
  {
    index: "004",
    title: "Legal Operations Specialist",
    body: "Focus op proces, data en efficiency binnen de juridische afdeling. Verantwoordelijk voor structuur, rapportage en de dagelijkse werking van legal operations.",
  },
  {
    index: "005",
    title: "Legal Technologist / Legal Solutions Architect",
    body: "Strategische rol op het snijvlak van legal, IT en inkoop van legal tech. Bepaalt welke systemen en tools passen bij de organisatie op langere termijn.",
  },
  {
    index: "006",
    title: "Legal Design & Automation",
    body: "Specialisten in contract lifecycle management, document automation en visuele juridische communicatie — van eerste ontwerp tot volledige adoptie binnen het team.",
  },
];

export function LegalEngineerPosities() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ POSITIES</SlashPill>
        <h2 className="display-md mt-8 max-w-[720px]">
          Op alle niveaus <br />
          van legal engineering.
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
