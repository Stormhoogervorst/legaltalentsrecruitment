"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

export function PageHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-dark-background text-white">
      <Image
        src="/stock-foto-4.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-[40%_center]"
      />
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.48)_48%,rgba(0,0,0,0.08)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden="true"
      />

      <SectionShell className="flex min-h-[92svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-32">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: flatWhiteEase }}
        >
          <SlashPill className="bg-white/10 text-white backdrop-blur-sm">
            / OVER ONS
          </SlashPill>
        </motion.div>

        <AnimatedHeadline
          as="h1"
          lines={["We doen wat we zeggen,", "en zeggen wat we doen."]}
          className="mt-8 max-w-5xl font-display text-[clamp(2.75rem,7vw,5.25rem)] font-light leading-[1.02] tracking-[-0.02em]"
        />

        <motion.div
          className="mt-8 max-w-[540px] space-y-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.45, duration: 0.7, ease: flatWhiteEase }}
        >
          <p className="text-[18px] leading-[1.5] text-white/70">
            Een jong en fris boutique legal recruitment agency waarbij kwaliteit,
            service en vertrouwen nog ouderwets hoog in het vaandel staan.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <PillButton href="/contact" variant="dark">
              Neem contact op →
            </PillButton>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
