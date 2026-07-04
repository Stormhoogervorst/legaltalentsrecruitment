import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const expertiseCards = [
  {
    index: "001",
    title: "Hybride profiel is schaars",
    body: "Iemand die zowel juridisch inhoudelijk sterk is als technisch kan denken, is zeldzaam. Wij herkennen welke juristen dit profiel écht hebben — en welke het alleen op hun CV zetten.",
  },
  {
    index: "002",
    title: "Rol is nog in ontwikkeling",
    body: "Legal engineering betekent per organisatie iets anders. Wij vertalen jullie concrete behoefte (automatisering, contract lifecycle, legal design, tooling) naar het juiste profiel.",
  },
  {
    index: "003",
    title: "Cultuur tussen twee werelden",
    body: "Legal engineers bewegen tussen juridische en tech-teams. Wij screenen op het vermogen om beide talen te spreken en draagvlak te creëren.",
  },
];

export function LegalEngineerExpertise() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ EXPERTISE</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Werven van legal <br />
            engineers is anders.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Een legal engineer plaatsen is geen standaard juridische
            recruitment. Het draait om het zeldzame snijvlak van juridische
            inhoud, proceskennis en technologie.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {expertiseCards.map((card) => (
            <article key={card.index} className="rounded-2xl bg-background p-8">
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                / {card.index}
              </p>
              <h3 className="display-h3 mt-5">{card.title}</h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-foreground-secondary">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-[720px] text-[16px] leading-[1.6] text-foreground-muted">
          Zoek je liever een klassiek juridisch profiel? Bekijk onze werving
          van{" "}
          <Link
            href="/recruitment/advocaat"
            className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            advocaten
          </Link>{" "}
          of van{" "}
          <Link
            href="/recruitment/legal-counsel"
            className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
          >
            legal counsels
          </Link>
          .
        </p>
      </SectionShell>
    </section>
  );
}
