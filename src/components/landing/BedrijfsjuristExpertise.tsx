import { SectionShell, SlashPill } from "@/components/home/primitives";

const expertiseCards = [
  {
    index: "001",
    title: "Twee arbeidsmarkten in één",
    body: "Bedrijfsjuristen komen vaak vanuit de advocatuur. Werven betekent zowel het in-house netwerk kennen als de advocaat-markt waar potentiële overstappers zitten. Algemene recruiters dekken één van beide — wij beide.",
  },
  {
    index: "002",
    title: "Salarisbenchmarks per industrie",
    body: "Een head of legal bij een tech scale-up verschilt salarismatig fundamenteel van dezelfde functietitel bij een familiebedrijf. Wij brengen actuele benchmarks per industrie en bedrijfsfase mee.",
  },
  {
    index: "003",
    title: "Cultuurfit weegt zwaarder dan papieren CV",
    body: "In kleine in-house teams (1-5 juristen) bepaalt de persoon achter het diploma het succes. Wij screenen op zelfstandigheid, business-affinity en communicatieve kracht — niet alleen op vakinhoud.",
  },
];

export function BedrijfsjuristExpertise() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ EXPERTISE</SlashPill>
        <div className="mt-8 max-w-[760px]">
          <h2 className="display-md">
            Een in-house jurist <br />
            vinden is geen <br />
            standaard recruitment.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Bedrijfsjuristen werven verschilt fundamenteel van algemene
            recruitment of advocatuur-werving. Het draait om markt-kennis,
            salarisbenchmarks en de overstap-dynamiek vanuit de advocatuur.
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
      </SectionShell>
    </section>
  );
}
