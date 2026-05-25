import { SectionShell, SlashPill } from "@/components/home/primitives";

const marktItems = [
  "NIS2 en DORA hebben honderden nieuwe rollen gecreëerd. Sinds 2024 zijn duizenden organisaties wettelijk verplicht om information security en operational resilience-rollen in te vullen. De markt heeft die capaciteit niet snel kunnen opbouwen — wat resulteert in stijgende salarissen en hoge mobiliteit van specialisten.",
  "DPO's zijn schaars geworden. Sinds de AVG (2018) is het aantal organisaties met een verplichte DPO sterk toegenomen, terwijl het aantal opgeleide privacy-juristen niet evenredig is meegegroeid. Voor mid-market organisaties is een ervaren DPO vinden vaak een traject van 3-6 maanden.",
  'Big Four-achtergrond is gewild maar niet altijd nodig. Veel opdrachtgevers vragen "Big Four compliance-ervaring" zonder te weten waarom. In praktijk zijn vergelijkbare niveaus haalbaar via mid-tier consultancies of vanuit toezichthouders — soms beter, want minder generiek getraind.',
  "MLRO's zijn structureel onderbetaald. Wettelijke verplichting plus persoonlijke aansprakelijkheid (MLRO's hebben individuele meldplicht) maakt deze rol risicovoller dan veel organisaties willen erkennen. Goede MLRO's stappen makkelijk over voor 15-25% salarisverhoging.",
  "Hybride werken is verwacht, niet onderhandelbaar. Compliance is door de aard van het werk (documentwerk, beleid, training) goed remote te doen. Volledig op-locatie verlangen sluit een groot deel van het beschikbare talent uit.",
];

export function ComplianceMarkt() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE MARKT</SlashPill>
          <h2 className="display-md mt-8">
            Een markt onder druk <br />
            van nieuwe regelgeving.
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            Compliance-werving in Nederland staat onder structurele druk. Nieuwe
            regelgeving creëert continu nieuwe rollen, terwijl de pool
            gekwalificeerde specialisten beperkt is. Een paar dingen die
            opdrachtgevers vaak nog niet weten:
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5">
            {marktItems.map((item) => (
              <li
                key={item}
                className="text-[16px] leading-[1.6] text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Wij brengen deze marktkennis in bij elke opdracht — zodat jullie
            weten waar jullie staan en wat realistisch is.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
