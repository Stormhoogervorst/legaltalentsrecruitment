import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";
import { rechtsgebieden } from "@/content/rechtsgebieden";

const rollen = [
  {
    index: "001",
    title: "Advocaat",
    body: "Van advocaat-stagiair tot partner, in alle rechtsgebieden.",
    href: "/recruitment/advocaat",
  },
  {
    index: "002",
    title: "Bedrijfsjurist",
    body: "De eerste jurist of een versterking van het inhouse team.",
    href: "/recruitment/bedrijfsjurist",
  },
  {
    index: "003",
    title: "Legal counsel",
    body: "Uitvoerende inhouse juristen die de dagelijkse praktijk dragen.",
    href: "/recruitment/legal-counsel",
  },
  {
    index: "004",
    title: "General counsel",
    body: "Eindverantwoordelijken voor legal, vaak aan de directietafel.",
    href: "/recruitment/general-counsel",
  },
  {
    index: "005",
    title: "Compliance officer",
    body: "Compliance, privacy en aanpalende governance-rollen.",
    href: "/recruitment/compliance-officer",
  },
  {
    index: "006",
    title: "Legal engineer",
    body: "Het snijvlak van recht, proces en technologie.",
    href: "/recruitment/legal-engineer",
  },
];

export function JuridischRecruiterRollen() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ ROLLEN & EXPERTISE</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Welke rollen <br />
            wij werven.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Specialistische pagina’s per profiel — plus de rechtsgebieden
            waarin wij structureel search doen. Bouw je de eerste legal hire
            in een groeiend bedrijf? Bekijk ook{" "}
            <Link
              href="/scale-ups"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              recruitment voor scale-ups
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {rollen.map((rol) => (
            <Link
              key={rol.index}
              href={rol.href}
              className="group flex flex-col rounded-2xl border border-[rgba(10,10,15,0.06)] bg-background-secondary p-8 transition-[transform,box-shadow] duration-[240ms] ease-flatwhite hover:scale-[1.01] hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between">
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {rol.index}
                </p>
                <ArrowUpRight
                  className="size-4 shrink-0 text-foreground-muted transition-transform duration-300 ease-flatwhite group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-8 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                {rol.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                {rol.body}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
            / Rechtsgebieden
          </p>
          <div className="mt-8 grid border-t border-border-light md:grid-cols-2">
            {rechtsgebieden.map((gebied) => (
              <div
                key={gebied.slug}
                className="flex items-center justify-between gap-6 border-b border-border-light py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
              >
                <span className="shrink-0 whitespace-nowrap font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {String(gebied.order).padStart(3, "0")}
                </span>
                <h3 className="display-h3 text-right">{gebied.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
