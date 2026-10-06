import { SectionShell, SlashPill } from "@/components/home/primitives";

const expertiseCards = [
  {
    index: "001",
    title: "Discretie is uitgangspunt",
    body: "Advocaten oriënteren zich vrijwel altijd buiten hun huidige kantoor om. We werken volledig vertrouwelijk en introduceren alleen na expliciete toestemming.",
  },
  {
    index: "002",
    title: "Marktkennis per rechtsgebied",
    body: "Een ondernemingsrecht-advocaat zoeken vraagt om andere kennis dan een familierechtjurist. We kennen de specialistische arbeidsmarkt en welke kantoren waarom interessant zijn.",
  },
  {
    index: "003",
    title: "Cultuur weegt zwaarder dan het cv",
    body: "In de advocatuur draait succes meer om kantoorcultuur dan om cv. We screenen kandidaten op juridisch niveau en op hoe ze bij het kantoor passen.",
  },
];

export function AdvocaatExpertise() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-24">
      <SectionShell>
        <SlashPill>/ EXPERTISE</SlashPill>
        <div className="mt-8 max-w-[720px]">
          <h2 className="display-md">
            Werving van <br />
            advocaten is anders.
          </h2>
          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-foreground-muted">
            Een advocaat plaatsen verschilt fundamenteel van algemene
            recruitment. Het draait om vertrouwelijkheid, marktkennis en
            netwerk.
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
