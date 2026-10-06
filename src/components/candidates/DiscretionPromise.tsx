import { SectionShell, SlashPill } from "@/components/home/primitives";

const commitments = [
  {
    label: "/ COMMITMENT 01",
    title: "Geen onaangekondigde voorstellen",
    body: "We stellen je nooit voor aan een opdrachtgever zonder jouw toestemming, per voorstel.",
  },
  {
    label: "/ COMMITMENT 02",
    title: "Niet in ons netwerk",
    body: "We delen je zoektocht niet in ons netwerk: niet met collega's, niet met andere kantoren, ook niet 'in vertrouwen' met derden.",
  },
  {
    label: "/ COMMITMENT 03",
    title: "Gesprekken buiten kantooruren",
    body: "Liever digitaal of telefonisch, buiten kantooruren? Geen probleem. We werken naar jouw situatie, niet andersom.",
  },
  {
    label: "/ COMMITMENT 04",
    title: "Recht om weg te lopen",
    body: "Je kunt het traject op elk moment stoppen. Op verzoek verwijderen we je gegevens.",
  },
];

export function DiscretionPromise() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell>
        <SlashPill variant="dark">/ DISCRETIE</SlashPill>
        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="display-lg">
            Je gegevens <br />
            worden niet <br />
            gedeeld.
          </h2>

          <div>
            {commitments.map((commitment) => (
              <article
                key={commitment.label}
                className="border-t border-white/10 py-6 last:border-b"
              >
                <p className="font-mono text-xs font-medium leading-none tracking-[0.08em] text-white/45">
                  {commitment.label}
                </p>
                <h3 className="mt-2 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                  {commitment.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-dark-foreground-secondary">
                  {commitment.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
