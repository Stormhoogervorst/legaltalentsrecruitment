"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const offerStats = [
  {
    index: "001",
    title: "Kosteloos",
    body: "Wij worden betaald door opdrachtgevers, niet door jou",
  },
  {
    index: "002",
    title: "Vrijblijvend",
    body: "Een gesprek hoeft tot niks te leiden. Ook geen vervolg is een uitkomst",
  },
  {
    index: "003",
    title: "Vertrouwelijk",
    body: "Jouw zoektocht blijft tussen ons — altijd, en zonder uitzondering",
  },
];

export function WhatWeOffer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <div>
            <SlashPill>/ WAT WIJ JE BIEDEN</SlashPill>
            <div className="mt-8 max-w-[720px]">
              <h2 className="display-md">
                Geen recruiter. <br />
                Een sparringpartner.
              </h2>
            </div>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wij investeren tijd in elkaar leren kennen. Dat betekent soms
              maanden contact voordat er iets passends voorbij komt. En als wij
              niks goeds hebben, zeggen we dat ook eerlijk — beter geen voorstel
              dan een mismatch.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Voor jou is dit kosteloos. Wij worden betaald door opdrachtgevers,
              niet door kandidaten. Onze rol is matchmaker, niet verkoper.
            </p>
          </div>

          <div className="grid gap-y-8">
            {offerStats.map((stat, index) => (
              <motion.div
                key={stat.index}
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
                  / {stat.index}
                </p>
                <h3 className="display-md mt-2">{stat.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-foreground-muted">
                  {stat.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
