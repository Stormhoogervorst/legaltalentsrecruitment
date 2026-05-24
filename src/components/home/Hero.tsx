"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background text-foreground">
      <SectionShell className="flex min-h-[90vh] flex-col justify-center py-16 md:py-[120px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: flatWhiteEase }}
        >
          <SlashPill>/ LEGAL TALENTS RECRUITMENT</SlashPill>
        </motion.div>

        <AnimatedHeadline
          as="h1"
          lines={[
            "Juridisch talent.",
            "Persoonlijk gevonden.",
            "Op maat geplaatst.",
          ]}
          className="display-xl mt-10 max-w-6xl"
        />

        <motion.div
          className="mt-10 max-w-[540px] space-y-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.45, duration: 0.7, ease: flatWhiteEase }}
        >
          <p className="text-[18px] leading-[1.5] text-foreground-secondary">
            Vaste plaatsingen voor advocaten, bedrijfsjuristen en in-house
            counsel. Geen massadatabase — een persoonlijk netwerk.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <PillButton href="/vacatures">Bekijk vacatures →</PillButton>
            <PillButton href="/voor-opdrachtgevers" variant="secondary">
              Voor opdrachtgevers
            </PillButton>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
