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
    title: "Voor kandidaten",
    body: "Junior, medior of senior bedrijfsjurist — of advocaat die naar inhouse wil. Wij helpen je oriënteren op vacatures voor bedrijfsjurist die bij jouw niveau, vak en cultuur passen. Zonder druk, zonder cv-dump.",
    bullets: [
      "Openstaande én stille inhouse-opdrachten",
      "Kosteloos en vrijblijvend",
      "Alleen voorstellen na jouw toestemming",
    ],
    primary: { label: "Plan een kennismaking →", href: "/contact" },
    secondary: {
      label: "Meer voor kandidaten",
      href: "/voor-kandidaten",
    },
  },
  {
    index: "/ 002",
    title: "Voor opdrachtgevers",
    body: "Organisaties die een bedrijfsjurist zoeken: de eerste jurist, een versterking van het legal team, of een senior counsel. Wij werven gericht — niet via een stapel reacties op een advertentie.",
    bullets: [
      "Corporates, mid-market en groeiende teams",
      "Search via netwerk, niet alleen jobboards",
      "Kandidaten die wij zelf hebben gesproken",
    ],
    primary: { label: "Plan een opdrachtgesprek →", href: "/contact" },
    secondary: {
      label: "Juridisch recruiter",
      href: "/juridisch-recruiter",
    },
  },
];

export function BedrijfsjuristVacatureVoorWie() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ VOOR WIE</SlashPill>
        <h2 className="display-md mt-8 max-w-3xl">
          Twee kanten van <br />
          dezelfde tafel.
        </h2>
        <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
          Deze pagina is voor juristen die een bedrijfsjurist vacature zoeken —
          en voor opdrachtgevers die die rol willen invullen. Dezelfde
          marktkennis, dezelfde discretie.
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
