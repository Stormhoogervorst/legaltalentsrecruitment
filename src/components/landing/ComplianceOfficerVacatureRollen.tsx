import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const rollen = [
  {
    index: "001",
    title: "Junior compliance officer",
    body: "Een junior compliance officer vacature is een instap met begeleiding: meedraaien in monitoring, dossiers voorbereiden en helpen beleid uit te rollen. Minder zelfstandige beslissingen, meer leren hoe sectorregels in de praktijk werken.",
  },
  {
    index: "002",
    title: "Medior: analyst of specialist",
    body: "Een compliance analyst of specialist pakt een eigen domein: integriteit, klantonderzoek, beleid of monitoring. Je adviseert zelfstandiger en neemt de business mee, zonder al eindverantwoordelijk te zijn voor de functie.",
  },
  {
    index: "003",
    title: "Senior compliance officer",
    body: "Zwaardere dossiers, meer autonomie in het oordeel, en sparren met management. Soms het contact met een toezichthouder. Minder uitvoering, meer afweging.",
  },
  {
    index: "004",
    title: "Compliance lead",
    body: "Group compliance lead, compliance manager of head of compliance: leiding over de functie, prioriteiten stellen en rapporteren aan het bestuur. Geen losse uitvoerende rol.",
  },
  {
    index: "005",
    title: "Eerste lijn",
    body: "Compliance dicht op de business. De operatie blijft zelf verantwoordelijk voor het beheersen van risico's. Een eerste-lijnsrol begeleidt en toetst in het proces, niet als onafhankelijke functie erboven.",
  },
  {
    index: "006",
    title: "Tweede lijn",
    body: "De klassieke compliance officer: onafhankelijk adviseren, kaders stellen en monitoren. Dicht bij de business, maar niet erin. Interne audit is de derde lijn; die rol matchen wij hier niet.",
  },
];

const linkClassName =
  "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export function ComplianceOfficerVacatureRollen() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ ROLLEN</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Welke compliance-rollen <br />
            we begeleiden.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Geen verzonnen vacaturelijst: dit zijn de typen rollen die we
            meestal matchen, van junior tot lead en van eerste tot tweede lijn.
            Actuele openstaande posities staan bij{" "}
            <Link href="/vacatures" className={linkClassName}>
              vacatures
            </Link>
            . Opdrachtgevers die zo&apos;n rol willen invullen, starten bij{" "}
            <Link
              href="/recruitment/compliance-officer"
              className={linkClassName}
            >
              compliance officer werven
            </Link>
            . Twijfel je tussen compliance en een juridische inhouse-rol, kijk
            dan ook naar{" "}
            <Link href="/legal-counsel-vacature" className={linkClassName}>
              legal counsel vacature
            </Link>{" "}
            of{" "}
            <Link href="/bedrijfsjurist-vacature" className={linkClassName}>
              bedrijfsjurist vacature
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {rollen.map((rol) => (
            <article
              key={rol.index}
              className="flex flex-col rounded-2xl border border-[rgba(10,10,15,0.06)] bg-background-secondary p-8"
            >
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                / {rol.index}
              </p>
              <h3 className="mt-8 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                {rol.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                {rol.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
