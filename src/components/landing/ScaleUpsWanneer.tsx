import { SectionShell, SlashPill } from "@/components/home/primitives";

const signalen = [
  "Je tekent regelmatig contracten die niemand intern juridisch beoordeelt.",
  "Een funding-ronde of overname komt eraan en je leunt volledig op externe advocaten.",
  "Privacy en compliance (AVG, en afhankelijk van je sector ook DORA, NIS2 of AI Act) vragen structureel aandacht.",
  "Je legal-kosten bij externe kantoren lopen op tot het punt waarop een vaste jurist goedkoper is.",
];

export function ScaleUpsWanneer() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ HET MOMENT</SlashPill>
          <h2 className="display-md mt-8">
            Wanneer heeft je scale-up <br />
            een eigen jurist nodig?
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            De meeste scale-ups regelen legal eerst extern: een advocatenkantoor
            voor contracten, een privacyjurist op afroep. Dat werkt: tot het niet
            meer werkt. Zodra contracten, arbeidsvoorwaarden, een
            financieringsronde, AVG-vraagstukken en commerciële deals dagelijks
            langskomen, wordt extern inhuren traag en duur. Dan is het moment
            voor een eigen jurist gekomen.
          </p>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Herkenbare signalen dat je toe bent aan een eerste legal hire:
          </p>
          <ul className="mt-6 list-disc space-y-4 pl-5">
            {signalen.map((item) => (
              <li
                key={item}
                className="text-[16px] leading-[1.6] text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>
    </section>
  );
}
