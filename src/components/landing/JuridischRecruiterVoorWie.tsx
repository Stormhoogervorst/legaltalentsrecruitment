import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowText,
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

const audiences = [
  {
    index: "/ 001",
    title: "Voor opdrachtgevers",
    body: "Advocatenkantoren en inhouse legal teams die juridisch personeel zoeken dat blijft. Van boutique tot mid-market, van de eerste jurist tot een groeiend team.",
    bullets: [
      "Advocatenkantoren — stagiair tot partner",
      "Inhouse: bedrijfsjurist, counsel, GC",
      "Compliance, privacy en legal engineer",
    ],
    primary: { label: "Plan een opdrachtgesprek →", href: "/contact" },
    secondary: {
      label: "Meer voor opdrachtgevers",
      href: "/voor-opdrachtgevers",
    },
  },
  {
    index: "/ 002",
    title: "Voor kandidaten",
    body: "Advocaten, bedrijfsjuristen, legal counsel, general counsel, compliance officers en legal engineers die discreet willen oriënteren — zonder druk, zonder cv-dump.",
    bullets: [
      "Actuele vacatures en stille opdrachten",
      "Kosteloos en vrijblijvend",
      "Alleen voorstellen na jouw toestemming",
    ],
    primary: { label: "Bekijk vacatures →", href: "/vacatures" },
    secondary: { label: "Meer voor kandidaten", href: "/voor-kandidaten" },
  },
];

export function JuridischRecruiterVoorWie() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ VOOR WIE</SlashPill>
        <h2 className="display-md mt-8 max-w-3xl">
          Twee kanten van <br />
          dezelfde tafel.
        </h2>
        <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
          Legal Talents is tweezijdig: wij werven voor opdrachtgevers en
          begeleiden kandidaten. Dezelfde marktkennis, dezelfde discretie.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.index}
              className="flex min-h-[420px] flex-col rounded-[24px] bg-background-secondary p-8 md:p-12"
            >
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                {item.index}
              </p>
              <h3 className="display-h3 mt-10">{item.title}</h3>
              <p className="mt-5 text-[16px] leading-[1.6] text-foreground-secondary">
                {item.body}
              </p>
              <ul className="mt-8 space-y-3 text-[16px] leading-[1.6] text-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true">/</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4 pt-10">
                <PillButton href={item.primary.href}>
                  {item.primary.label}
                </PillButton>
                <Link
                  href={item.secondary.href}
                  className="text-foreground transition-colors hover:text-foreground-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background-secondary"
                >
                  <ArrowText>
                    {item.secondary.label}
                    <ArrowUpRight className="size-4" strokeWidth={1.5} />
                  </ArrowText>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
