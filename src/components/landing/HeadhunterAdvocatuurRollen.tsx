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
    title: "Partner / laterale partner",
    body: "Vertrouwelijke partner-search: portefeuille, cultuur, timing. Zelden publiek — bijna altijd mapping en een-op-een benadering.",
    href: "/recruitment/advocaat",
  },
  {
    index: "002",
    title: "Counsel",
    body: "Senior advocaat of counsel die de praktijk draagt. Op kantoor of inhouse: autonomie, specialisatie, en een overstap die inhoudelijk klopt.",
    href: "/recruitment/legal-counsel",
  },
  {
    index: "003",
    title: "General counsel",
    body: "Eindverantwoordelijke legal, vaak aan de directietafel. Opvolging, eerste GC, of een herijking van de rol.",
    href: "/recruitment/general-counsel",
  },
  {
    index: "004",
    title: "Senior bedrijfsjurist",
    body: "Zware inhouse-rollen: dossiers met gewicht, sparring met management, soms specialisatie. Niet de eerste junior in een team.",
    href: "/recruitment/bedrijfsjurist",
  },
  {
    index: "005",
    title: "Compliance-leiding",
    body: "Head of compliance en aanpalende governance-rollen. Leiding, oordeel en stakeholdermanagement — niet alleen policy schrijven.",
    href: "/recruitment/compliance-officer",
  },
  {
    index: "006",
    title: "Head of legal",
    body: "De juridische functie leiden of op senior niveau opzetten. Vraagt vakinhoud én organisatiegevoel — een klassieke executive-search-opdracht.",
  },
];

export function HeadhunterAdvocatuurRollen() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ ROLLEN</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Voor welke rollen <br />
            headhunting zinvol is.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Legal executive search voor senior juridische posities — niet voor
            elke vacature. Junior tot medior werving loopt vaak via onze{" "}
            <Link
              href="/juridisch-recruiter"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              juridisch recruiter
            </Link>
            -aanpak; hieronder de rollen waarbij mapping en een discrete search
            het verschil maken.
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
