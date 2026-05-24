import { SectionShell, SlashPill } from "@/components/home/primitives";

const commitments = [
  {
    label: "/ COMMITMENT 01",
    title: "Geen onaangekondigde voorstellen",
    body: "Wij introduceren je nooit bij een opdrachtgever zonder jouw expliciete toestemming per voorstel.",
  },
  {
    label: "/ COMMITMENT 02",
    title: "Geen netwerken van werkgevers",
    body: "Wij delen jouw zoektocht niet binnen ons eigen netwerk — niet met collega's, niet met andere kantoren, niet 'in vertrouwen' met derden.",
  },
  {
    label: "/ COMMITMENT 03",
    title: "Geen sporen in je systemen",
    body: "Voorkeur voor digitale of telefonische gesprekken buiten kantooruren? Geen probleem. We werken naar jouw situatie, niet andersom.",
  },
  {
    label: "/ COMMITMENT 04",
    title: "Recht om weg te lopen",
    body: "Op elk moment kan je het traject stoppen. Wij verwijderen je gegevens op verzoek direct — geen wachttijd, geen procedure.",
  },
];

export function DiscretionPromise() {
  return (
    <section className="bg-dark-background py-40 text-dark-foreground">
      <SectionShell className="max-w-[1120px]">
        <SlashPill variant="dark">/ DISCRETIE</SlashPill>
        <h2 className="display-lg mt-8 max-w-4xl">
          Je gegevens <br />
          worden niet <br />
          gedeeld.
        </h2>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-dark-foreground-secondary">
          Voor juristen is vertrouwelijkheid niet een extra — het is de basis.
          Hieronder hoe wij daarmee omgaan, concreet.
        </p>

        <div className="mt-16 max-w-[540px]">
          {commitments.map((commitment) => (
            <article
              key={commitment.label}
              className="border-t border-white/10 py-6"
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
      </SectionShell>
    </section>
  );
}
