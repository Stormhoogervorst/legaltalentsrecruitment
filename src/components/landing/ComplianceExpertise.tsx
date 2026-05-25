import { SectionShell, SlashPill } from "@/components/home/primitives";

const expertiseCards = [
  {
    index: "001",
    title: "Sectorkennis is doorslaggevend",
    body: "Een compliance officer bij een bank doet ander werk dan dezelfde titel bij een tech-scale-up of asset manager. Wij kennen de specifieke regelkaders per sector — van Wft tot Wwft, van GDPR tot NIS2 tot DORA — en weten welke achtergrond past.",
  },
  {
    index: "002",
    title: "Schaarste vraagt actieve search",
    body: "De pool gekwalificeerde compliance- en privacy-specialisten is klein. Het meeste talent is passief beschikbaar of werkt al voor de schaarse aantal kantoren die deze rollen invullen. Wachten op sollicitaties werkt niet.",
  },
  {
    index: "003",
    title: "Wettelijke verplichting versterkt de markt",
    body: "Veel organisaties zijn wettelijk verplicht een MLRO, DPO of compliance officer aan te stellen. Dat geeft sterke onderhandelingspositie aan kandidaten en vraagt om snelheid en discretie van opdrachtgevers.",
  },
];

export function ComplianceExpertise() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ EXPERTISE</SlashPill>
        <div className="mt-8 max-w-[760px]">
          <h2 className="display-md">
            Specialistische werving <br />
            in een schaarse markt.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Compliance-werving is geen algemene recruitment. Het draait om
            sectorkennis, wetgevingskennis en toegang tot een kleine, schaarse
            talent-pool.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {expertiseCards.map((card) => (
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
