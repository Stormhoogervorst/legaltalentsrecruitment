"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const outcomeCards = [
  {
    index: "001",
    title: "Sectorfit",
    body: "Compliance-specialisten met aantoonbare ervaring in jullie specifieke regulatory framework",
  },
  {
    index: "002",
    title: "Snelheid",
    body: "Schaarse markt vraagt om actieve, gerichte search — geen lange wachttijden op sollicitaties",
  },
  {
    index: "003",
    title: "Discretie",
    body: "Compliance-werving raakt vaak interne reorganisatie of audit-bevindingen — volledige vertrouwelijkheid is uitgangspunt",
  },
];

export function ComplianceResultaat() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <SlashPill>/ RESULTAAT</SlashPill>
            <h2 className="display-md mt-8">
              Wat jullie krijgen — <br />
              specialisme dat klopt.
            </h2>
            <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
              Een verkeerd ingevulde compliance-positie heeft directe
              consequenties. Een MLRO die de Wwft niet doorgrondt, een DPO
              zonder healthcare-ervaring bij een ziekenhuis, een AML-officer die
              geen ervaring heeft met crypto-payments — het kost niet alleen
              tijd maar ook reputatie richting toezichthouders.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Wij plaatsen alleen kandidaten waarvan wij hebben gecontroleerd dat
              de sectorale kennis klopt. Geen &apos;compliance is
              compliance&apos; — wel specifieke ervaring met jullie regulatory
              framework.
            </p>
            <p className="mt-6 text-[16px] leading-[1.6] text-foreground-muted">
              Voor opdrachtgevers in regulated markets brengen wij naast werving
              ook context mee: welke compliance-functie-structuren werken bij
              vergelijkbare organisaties, welke salarissen redelijk zijn, en
              welke profielen &apos;op papier&apos; lijken maar in praktijk niet
              passen.
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
