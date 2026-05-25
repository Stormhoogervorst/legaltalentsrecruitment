"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const outcomeCards = [
  {
    index: "001",
    title: "Marktkennis",
    body: "Actuele salarisbenchmarks per industrie en bedrijfsfase",
  },
  {
    index: "002",
    title: "Business-fit",
    body: "Gescreend op zelfstandigheid en commerciële sensitiviteit, niet alleen vakinhoud",
  },
  {
    index: "003",
    title: "Lange retentie",
    body: "Match die past geeft jaren rendement in plaats van maanden",
  },
];

export function BedrijfsjuristResultaat() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <SlashPill>/ RESULTAAT</SlashPill>
            <h2 className="display-md mt-8">
              Wat jullie krijgen — <br />
              verder dan een CV.
            </h2>
            <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
              Een verkeerde bedrijfsjurist plaatsen kost meer dan
              recruitment-kosten. Het kost minimaal 6 maanden productie,
              juridische risico&apos;s die niet gesignaleerd worden, en
              vertrouwensschade naar interne stakeholders.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wij plaatsen minder kandidaten dan generieke bureaus, maar de
              plaatsingen die wij doen blijven langer staan. Wij selecteren niet
              op CV-kwantiteit maar op business-fit, zelfstandigheid en
              groei-potentieel.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Voor opdrachtgevers zonder eigen ervaring in juridische werving
              brengen wij bovendien marktkennis mee: realistische salarissen,
              wat haalbaar is qua niveau, welke kanttekeningen er zitten aan
              bepaalde profielen.
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
