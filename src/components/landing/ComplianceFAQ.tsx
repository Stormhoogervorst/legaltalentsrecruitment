import { Plus } from "lucide-react";
import { SectionShell, SlashPill } from "@/components/home/primitives";

export const complianceFaqItems = [
  {
    question: "Wat is het verschil tussen een compliance officer en een privacy officer?",
    answer:
      "Een compliance officer ziet toe op alle wet- en regelgeving die op de organisatie van toepassing is — vaak sectorspecifiek (financieel, healthcare, etc). Een privacy officer (vaak DPO genoemd onder de AVG) richt zich specifiek op de verwerking van persoonsgegevens. In kleinere organisaties is dit één rol, in grotere organisaties zijn het aparte functies met eigen specialisaties.",
  },
  {
    question: "Wij zoeken een DPO — wat is realistisch qua profiel?",
    answer:
      "Een goede DPO combineert juridische kennis (AVG), informatiebeveiliging-affiniteit en stakeholder management. Bij kleinere organisaties kan een part-time of externe DPO volstaan. Bij grote of risicovolle organisaties (healthcare, financiële sector, tech-platforms) is een full-time specialist nodig. Wij brengen vooraf in kaart welk profiel bij jullie risico-omvang past.",
  },
  {
    question: "Wat verdienen compliance officers gemiddeld?",
    answer:
      "Sterk afhankelijk van sector en seniority. Een medior compliance officer (3-5 jaar) zit in NL gemiddeld tussen €65k en €90k. Senior posities en MLRO's vanaf €85k tot €120k. Head of compliance gaat vanaf €110k tot ruim €170k, afhankelijk van bedrijfsomvang. Sectoren met hogere risico's (banken, crypto, healthcare) betalen aan de bovenkant van de range.",
  },
  {
    question: "Hoe lang duurt een gemiddeld traject?",
    answer:
      "Voor compliance officer-rollen op medior tot senior niveau rekenen we 8 tot 14 weken — vanwege de schaarste van goede kandidaten en lange opzegtermijnen in regulated markets. Head of compliance of MLRO-rollen kunnen 12 tot 20 weken vragen. Wij geven bij de intake een realistische inschatting op basis van jullie specifieke profiel en sector.",
  },
  {
    question: "Werken jullie ook voor toezichthouders of overheidsorganisaties?",
    answer:
      "Het meeste van ons werk is in de private sector. Voor toezichthouders en overheidsorganisaties zijn andere bureaus vaak beter ingericht — denk aan publiekrechtelijke salarisstructuren en specifieke procedures. Wij verwijzen graag door als dat een betere fit is voor jullie.",
  },
  {
    question: "Hoe gaan jullie om met persoonlijke aansprakelijkheid van rollen zoals MLRO?",
    answer:
      "MLRO's en sommige andere compliance-rollen hebben persoonlijke meldingsplicht en aansprakelijkheid richting toezichthouders. Dat maakt deze rollen risicovoller voor kandidaten — en vraagt om transparantie tijdens de werving. Wij bespreken openlijk met kandidaten welke verantwoordelijkheden de rol meebrengt en welke governance-structuren jullie hebben ingericht. Geen verrassingen bij start.",
  },
];

export function ComplianceFAQ() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="mx-auto max-w-[760px]">
          <SlashPill>/ VEELGESTELDE VRAGEN</SlashPill>
          <h2 className="display-md mt-8">
            Veelgestelde <br />
            vragen.
          </h2>

          <div className="mt-12">
            {complianceFaqItems.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[rgba(10,10,15,0.08)] py-6 first:border-t"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <Plus
                    className="size-4 shrink-0 transition-transform duration-300 ease-flatwhite group-open:rotate-45"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-[16px] leading-relaxed text-foreground-secondary">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
