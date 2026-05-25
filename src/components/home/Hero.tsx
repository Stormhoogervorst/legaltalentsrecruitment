"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";
import { HandDrawnDot } from "@/components/ui/HandDrawnDot";
import { HandDrawnUnderline } from "@/components/ui/HandDrawnUnderline";

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
          lines={["Specialist in legal recruitment"]}
          className="display-xl mt-10 max-w-6xl"
          renderWord={(word) => {
            if (word === "Specialist") {
              return <HandDrawnUnderline delay={0.3}>{word}</HandDrawnUnderline>;
            }

            if (word === "recruitment") {
              return (
                <>
                  {word}
                  <HandDrawnDot delay={2.3} mobileOffset={8} />
                </>
              );
            }

            return word;
          }}
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
