import { SectionShell, SlashPill } from "@/components/home/primitives";

const posities = [
  {
    index: "001",
    title: "Compliance officer",
    body: "Generieke compliance-rollen binnen financiële instellingen, asset managers en MKB. Vaak verantwoordelijk voor compliance policies, monitoring, training en stakeholder management richting toezichthouders.",
  },
  {
    index: "002",
    title: "Privacy officer / DPO",
    body: "Data Protection Officers en privacy specialisten — vaak wettelijk verplicht onder de AVG. Voor organisaties die persoonsgegevens grootschalig verwerken: tech, healthcare, retail, overheid.",
  },
  {
    index: "003",
    title: "AML & financial crime specialisten",
    body: "MLRO's (Money Laundering Reporting Officers), AML-analisten, KYC-specialisten en sanctions officers. Voor banken, fintechs, betaaldienstverleners en crypto-exchanges.",
  },
  {
    index: "004",
    title: "Head of compliance",
    body: "Eindverantwoordelijke voor de compliance-functie. Combineert vakinhoudelijke kennis met team-management, board-reporting en strategisch toezichthouder-contact.",
  },
  {
    index: "005",
    title: "Information security & cybercompliance",
    body: "Specialisten op het snijvlak van compliance en IT-security. Voor NIS2, DORA, ISO 27001 en sector-specifieke security frameworks. Een groeiende rol met schaars talent.",
  },
  {
    index: "006",
    title: "Regulatory affairs & sectorale specialisten",
    body: "Specialisten in sectorale wetgeving: farma (EMA), medical devices (MDR), financial markets (MiCA, MAR), digital services (DSA, AI Act). Niche-werving die brede generalisten niet aankunnen.",
  },
];

export function CompliancePosities() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ POSITIES</SlashPill>
        <h2 className="display-md mt-8 max-w-[720px]">
          Specialisaties binnen <br />
          compliance en privacy.
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
