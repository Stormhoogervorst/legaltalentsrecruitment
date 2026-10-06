import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const marktItems = [
  "Hybride skills zijn schaars. Weinig juristen combineren sterke juridische inhoud met technische vaardigheid — en andersom zijn er weinig technologen die de juridische praktijk echt begrijpen.",
  "Legal tech-adoptie neemt toe. AI en automatisering veranderen wat er mogelijk is, en er zijn weinig legal engineers om dat werkend te krijgen.",
  "De rol trekt ander talent. Legal engineers kiezen vaker voor impact en autonomie dan voor een hoger salaris. Werkgevers die dat niet bieden, vallen af.",
  "Definities lopen uiteen. Wat een legal engineer precies doet, verschilt sterk per organisatie. Scherp krijgen wat jullie zoeken is de eerste stap naar een goede match.",
  "Zichtbare investering in legal tech weegt zwaar. Kandidaten kijken kritisch naar hoe serieus een organisatie daarin investeert. Vage ambities overtuigen niet.",
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
            Legal tech en AI veranderen hoe juridisch werk wordt gedaan.
            Organisaties die daar werk van maken, zoeken mensen die het recht
            kunnen vertalen naar systemen, tools en processen.
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
            We brengen deze marktkennis in bij elke opdracht, zodat jullie
            weten waar jullie staan en wat realistisch is om aan te bieden. Een
            voorbeeld van het soort rol waarvoor we zoeken is de{" "}
            <Link
              href="/vacatures/legal-engineer-amsterdam"
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Legal Engineer in Amsterdam
            </Link>
            .
          </p>
        </div>
      </SectionShell>
    </section>
  );
}
