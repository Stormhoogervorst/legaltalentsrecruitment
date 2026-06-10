import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const posities = [
  {
    index: "001",
    title: "General counsel",
    body: "De eindverantwoordelijke voor legal, vaak met een zetel aan de directietafel.",
    href: "/recruitment/general-counsel",
  },
  {
    index: "002",
    title: "Legal counsel",
    body: "De uitvoerende jurist die de dagelijkse juridische praktijk draagt.",
    href: "/recruitment/legal-counsel",
  },
  {
    index: "003",
    title: "Eerste bedrijfsjurist",
    body: "De brede generalist als allereerste legal hire.",
    href: "/recruitment/bedrijfsjurist",
  },
  {
    index: "004",
    title: "Privacy officer / DPO",
    body: "Voor scale-ups die met veel persoonsgegevens of gereguleerde data werken.",
    href: "/recruitment/privacy-officer",
  },
];

export function ScaleUpsPosities() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ POSITIES</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Welke juridische posities <br />
            wij invullen voor scale-ups
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Van de eerste generalist tot een volwassen legal-team — wij werven op
            elk niveau dat bij jullie groeifase past.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {posities.map((positie) => (
            <Link
              key={positie.index}
              href={positie.href}
              className="group flex flex-col rounded-2xl border border-[rgba(10,10,15,0.06)] bg-background p-8 transition-[transform,box-shadow] duration-[240ms] ease-flatwhite hover:scale-[1.01] hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between">
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {positie.index}
                </p>
                <ArrowUpRight
                  className="size-4 shrink-0 text-foreground-muted transition-transform duration-300 ease-flatwhite group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-8 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                {positie.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                {positie.body}
              </p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
