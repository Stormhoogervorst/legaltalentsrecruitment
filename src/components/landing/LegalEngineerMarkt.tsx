import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const marktItems = [
  "Hybride skills zijn schaars. Weinig juristen combineren sterke juridische inhoud met technische vaardigheid — en andersom zijn er weinig technologen die de juridische praktijk echt begrijpen.",
  "Legal tech-adoptie versnelt. AI en automatisering veranderen in hoog tempo wat er mogelijk is, waardoor de vraag naar legal engineers sneller groeit dan het aanbod.",
  "De rol trekt ander talent. Legal engineers kiezen vaker voor impact, autonomie en vernieuwing dan voor een hoger salaris — werkgevers die dat niet bieden, vallen af.",
  "Definities lopen uiteen. Wat een legal engineer precies doet, verschilt sterk per organisatie. Scherp krijgen wat jullie écht zoeken is de eerste stap naar een goede match.",
  "Zichtbaar innovatie-DNA weegt zwaar. Kandidaten kijken kritisch naar hoe serieus een organisatie investeert in legal tech — vage ambities overtuigen niet.",
];

export function LegalEngineerMarkt() {
  return (
    <section className="bg-background-secondary py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="max-w-[760px]">
          <SlashPill>/ DE MARKT</SlashPill>
          <h2 className="display-md mt-8">
            Een markt waarin <br />
            talent schaars en gewild is.
          </h2>
          <p className="mt-8 text-[18px] leading-[1.5] text-foreground-secondary">
            De opkomst van legal tech en AI verandert de juridische sector in
            hoog tempo. Organisaties die vooroplopen zoeken niet langer alleen
            juristen, maar mensen die het recht kunnen vertalen naar
            systemen, tools en processen.
          </p>
          <p className="mt-8 text-[16px] leading-[1.6] text-foreground-muted">
            Wat dat in de praktijk betekent voor werving:
          </p>
          <ul className="mt-6 list-disc space-y-4 pl-5">
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
            weten waar jullie staan en wat realistisch is om aan te bieden.
            Zo begeleidden wij recent de plaatsing van een{" "}
            <Link
              href="/vacatures/legal-engineer-amsterdam"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Legal Engineer in Amsterdam
            </Link>{" "}
            — een goed voorbeeld van het soort profiel en rol waar wij voor
            werven.
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
