"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const outcomeCards = [
  {
    index: "001",
    title: "Lange retentie",
    body: "Gemiddelde verblijftijd van geplaatste advocaten ruim boven het marktgemiddelde",
  },
  {
    index: "002",
    title: "Snelle inwerking",
    body: "Cultuur-fit vooraf gescreend, minder verloren maanden bij de start",
  },
  {
    index: "003",
    title: "Discreet proces",
    body: "Zowel naar kandidaten als naar de bredere markt — geen ruis rondom jullie zoektocht",
  },
];

export function AdvocaatResultaat() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SlashPill>/ RESULTAAT</SlashPill>
            <h2 className="display-md mt-8">
              Wat jullie <br />
              krijgen.
            </h2>
            <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
              De waarde van specialistisch recruitment zit niet in volume —
              maar in fit, duurzaamheid en discretie.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Een match die past geeft langetermijn-rendement: minder turnover,
              betere teamintegratie, productieve eerste maanden zonder lange
              inwerktijd. Een mismatch kost het kantoor minimaal 6 maanden
              productiviteit plus reputatieschade richting cliënten.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wij selecteren minder kandidaten dan generieke bureaus, maar de
              plaatsingen die wij doen blijven gemiddeld langer staan. Dat is
              geen toeval — dat is het verschil tussen werven en matchen.
            </p>
          </div>

          <div className="grid gap-y-8">
            {outcomeCards.map((card, index) => (
              <motion.article
                key={card.index}
                initial={
                  shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  duration: shouldReduceMotion ? 0 : 0.6,
                  ease: flatWhiteEase,
                }}
                className="rounded-2xl bg-background-secondary p-8"
              >
                <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                  / {card.index}
                </p>
                <h3 className="display-md mt-2">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-foreground-muted">
                  {card.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
