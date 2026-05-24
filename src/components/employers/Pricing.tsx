"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const pricingStats = [
  {
    index: "001",
    title: "No cure",
    body: "Geen factuur zonder plaatsing",
  },
  {
    index: "002",
    title: "No fees",
    body: "Geen losse kosten voor intake, screening of coördinatie",
  },
  {
    index: "003",
    title: "No risk",
    body: "Vervangingsgarantie op aanvraag — bij voortijdig vertrek werven wij kosteloos opnieuw of crediteren wij de fee.",
  },
];

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 text-foreground md:py-[120px] lg:pb-32">
      <SectionShell>
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:self-start">
            <div className="lg:sticky lg:top-24">
              <SlashPill>/ HONORARIUM</SlashPill>
              <h2 className="display-md mt-8 max-w-4xl">
                No cure, no pay. <br />
                Helder en eerlijk.
              </h2>

              <p className="mt-12 text-[18px] leading-[1.5] text-foreground-secondary">
                Het honorarium is uitsluitend verschuldigd bij een succesvolle
                plaatsing.
              </p>
              <p className="mt-6 text-[16px] leading-[1.6] text-foreground-secondary">
                Het tarief is een percentage van het fulltime bruto jaarsalaris
                van de geplaatste kandidaat. Het exacte percentage en eventuele
                minimum-honorarium bepalen we vooraf, afhankelijk van seniority,
                complexiteit en exclusiviteit van de opdracht.
              </p>
              <p className="mt-6 text-[16px] leading-[1.6] text-foreground-secondary">
                Alle afspraken — percentage, minimum-honorarium, garantieperiode
                — leggen we voor de start vast in een schriftelijke
                opdrachtbevestiging. Geen verrassingen, geen kleine lettertjes.
              </p>
              <Link
                href="/algemene-voorwaarden"
                className="mt-8 inline-flex text-[14px] leading-[1.5] text-foreground transition-colors hover:text-foreground-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
              >
                Lees de volledige voorwaarden →
              </Link>
            </div>
          </div>

          <div className="grid gap-y-8">
            {pricingStats.map((stat, index) => (
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
