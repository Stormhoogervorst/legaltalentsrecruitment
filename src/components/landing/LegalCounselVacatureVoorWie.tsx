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
    body: "Junior tot senior legal counsel, corporate counsel, of specialist in commercieel recht, IP, of privacy en compliance als aanpalend vak. Je zoekt de volgende inhouse-stap — dit is geen pagina voor alleen stagiaires.",
    bullets: [
      "Junior, medior en senior, niet alleen starters",
      "Openstaande én stille inhouse-opdrachten",
      "Kosteloos, en alleen een voorstel na jouw toestemming",
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
    body: "Organisaties die een legal counsel willen werven: de eerste jurist, versterking van het team, of een senior counsel. Die werving heeft een eigen pagina. Hier lezen kandidaten hoe matching werkt.",
    bullets: [
      "Corporates, scale-ups en groeiende legal teams",
      "Search via netwerk, niet alleen jobboards",
      "Kandidaten die wij zelf hebben gesproken",
    ],
    primary: { label: "Legal counsel werven →", href: "/recruitment/legal-counsel" },
    secondary: {
      label: "Juridisch recruiter",
      href: "/juridisch-recruiter",
    },
  },
];

export function LegalCounselVacatureVoorWie() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ VOOR WIE</SlashPill>
        <h2 className="display-md mt-8 max-w-3xl">
          Counsel die de <br />
          volgende stap zoekt.
        </h2>
        <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
          Deze pagina is voor legal professionals die een legal counsel
          vacature zoeken. Opdrachtgevers die de rol willen invullen, verwijzen
          we naar de wervingspagina — dezelfde marktkennis, andere ingang.
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
