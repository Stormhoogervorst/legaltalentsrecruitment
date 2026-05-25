import { SectionShell, SlashPill } from "@/components/home/primitives";

const posities = [
  {
    index: "001",
    title: "Advocaat-stagiair",
    body: "Beroepsopleiding-stagiairs voor kantoren die structureel werving doen — vaak met focus op specifiek rechtsgebied of een interne doorgroei-track.",
  },
  {
    index: "002",
    title: "Medior advocaat (2-5 jaar)",
    body: "Vakinhoudelijk gevormde advocaten die klaar zijn voor zelfstandige dossiers en mentor-rol naar stagiairs. Mid-niveau is het meest gevraagd en het lastigst te vinden.",
  },
  {
    index: "003",
    title: "Senior advocaat (5-10 jaar)",
    body: "Ervaren advocaten richting partnerschap. Vaak met eigen portefeuille of specialistische focus. Werving vereist exclusieve toegang tot passief talent.",
  },
  {
    index: "004",
    title: "Counsel en associate partner",
    body: "Posities tussen senior advocaat en partner — een groeiende categorie. Vaak gericht op specifieke marktsegmenten of strategische dossiers.",
  },
  {
    index: "005",
    title: "Partner-werving",
    body: "Lateral partner moves zijn vrijwel altijd vertrouwelijk en strategisch. Wij begeleiden zowel uitkomende als binnenkomende partners — discreet en met aandacht voor portefeuille-overdracht.",
  },
  {
    index: "006",
    title: "Boutique en specialistische posities",
    body: "Voor kantoren met een specifieke specialisatie (bouwrecht, mededinging, IP, fiscaal) zoeken wij de zeldzame profielen die zowel inhoudelijk als cultureel passen.",
  },
];

export function AdvocaatPosities() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ POSITIES</SlashPill>
        <h2 className="display-md mt-8 max-w-[720px]">
          Op alle niveaus <br />
          van de advocatuur.
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
