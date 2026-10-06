import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const rollen: Array<{
  index: string;
  title: string;
  body: string;
  href?: string;
}> = [
  {
    index: "001",
    title: "Inhouse corporate counsel",
    body: "De jurist in een corporate of mid-market legal team: contracten, advies aan de business, afstemming met externe advocaten. Vaak internationaal georiënteerd, soms met Engels als voertaal.",
  },
  {
    index: "002",
    title: "Legal counsel bij een scale-up",
    body: "Eerste of volgende jurist in een groeiend bedrijf. Breed, zelfstandig, dicht op de operatie. Minder hiërarchie, meer trade-offs, en een titel die vaker legal counsel heet dan bedrijfsjurist.",
  },
  {
    index: "003",
    title: "Senior counsel",
    body: "Zwaardere dossiers, meer autonomie, sparren met management of de general counsel. Soms leiding over een klein team, zonder dat de rol zelf general counsel is.",
  },
  {
    index: "004",
    title: "Commercial counsel",
    body: "Commerciële contracten, onderhandelingen en support van sales. Een specialisatie binnen legal counsel — geen generieke “jurist gezocht” zonder vak.",
  },
  {
    index: "005",
    title: "Aanpalend: IP, privacy of compliance",
    body: "Soms grenst een counsel-rol aan IP, privacy of compliance. Die vakken matchen we alleen als de opdracht dat vraagt, niet als losse regel op een cv.",
  },
  {
    index: "006",
    title: "Verwant: bedrijfsjurist",
    body: "Legal counsel en bedrijfsjurist overlappen in de praktijk. Wie de Nederlandse titel zoekt, vindt die route op een eigen pagina. Hier blijft het profiel legal counsel.",
    href: "/bedrijfsjurist-vacature",
  },
];

export function LegalCounselVacatureRollen() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ ROLLEN</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Welke legal counsel-rollen <br />
            wij begeleiden.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Geen verzonnen vacaturelijst: dit zijn de typen rollen die wij
            meestal matchen. Corporate, scale-up en senior counsel komen het
            vaakst voor. Actuele openstaande posities staan bij{" "}
            <Link
              href="/vacatures"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              vacatures
            </Link>
            . Opdrachtgevers die zo’n rol willen invullen, starten bij{" "}
            <Link
              href="/recruitment/legal-counsel"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              legal counsel werven
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {rollen.map((rol) => {
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                    / {rol.index}
                  </p>
                  {rol.href ? (
                    <ArrowUpRight
                      className="size-4 shrink-0 text-foreground-muted transition-transform duration-300 ease-flatwhite group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <h3 className="mt-8 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                  {rol.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                  {rol.body}
                </p>
              </>
            );

            const className =
              "flex flex-col rounded-2xl border border-[rgba(10,10,15,0.06)] bg-background-secondary p-8";

            if (rol.href) {
              return (
                <Link
                  key={rol.index}
                  href={rol.href}
                  className={`group ${className} transition-[transform,box-shadow] duration-[240ms] ease-flatwhite hover:scale-[1.01] hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article key={rol.index} className={className}>
                {content}
              </article>
            );
          })}
        </div>
      </SectionShell>
    </section>
  );
}
