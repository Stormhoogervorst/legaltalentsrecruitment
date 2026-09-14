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
    title: "Junior bedrijfsjurist",
    body: "Eerste inhouse-stappen: contracten, dagelijks advies, meelopen in een team. Vaak 0–3 jaar ervaring, soms direct na de advocatuur-stage.",
  },
  {
    index: "002",
    title: "Medior bedrijfsjurist",
    body: "Zelfstandig de business ondersteunen. Twee tot vijf jaar ervaring is gangbaar — vanuit inhouse of als overstap vanuit kantoor.",
  },
  {
    index: "003",
    title: "Senior bedrijfsjurist / counsel",
    body: "Zwaardere dossiers, meer autonomie, soms specialisatie (commercieel, corporate, IT). Sparring met management, niet alleen uitvoering.",
  },
  {
    index: "004",
    title: "Overstap advocatuur → inhouse",
    body: "Van kantoor naar de business-kant. Minder uurtjes schrijven, meer trade-offs en context. Niet elke advocaat is daar klaar voor — dat toetsen we expliciet.",
  },
  {
    index: "005",
    title: "Eerste jurist / head of legal",
    body: "De juridische functie opzetten of leiden in een kleinere organisatie. Vraagt zelfstandigheid en business-gevoel, niet alleen vakinhoud.",
    href: "/recruitment/bedrijfsjurist",
  },
  {
    index: "006",
    title: "Aanpalende inhouse-rollen",
    body: "Privacy, compliance of legal counsel overlappen soms met bedrijfsjurist-werk — maar het is niet dezelfde functie. Die rollen werven wij als eigen profiel, niet als vage extra op een cv.",
    href: "/recruitment/legal-counsel",
  },
];

export function BedrijfsjuristVacatureRollen() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ ROLLEN</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Welke bedrijfsjurist-rollen <br />
            wij begeleiden.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Van junior tot senior, van eerste jurist tot counsel in een groter
            team. Corporate en commercial komen het vaakst voor; privacy en
            compliance alleen als de opdracht dat écht vraagt. Actuele
            openstaande posities staan bij{" "}
            <Link
              href="/vacatures"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              vacatures
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
