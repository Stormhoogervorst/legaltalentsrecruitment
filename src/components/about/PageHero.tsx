"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell } from "@/components/home/primitives";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const mobileHero = {
  avif: "/over-ons-hero-mobile.avif",
  webp: "/over-ons-hero-mobile.webp",
  width: 1280,
  height: 2475,
} as const;

const desktopHero = {
  avif: "/stock-foto-4.avif",
  webp: "/stock-foto-4.webp",
  width: 2560,
  height: 1707,
} as const;

export function PageHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-dark-background text-white">
      <picture className="pointer-events-none absolute inset-0 -z-30 block size-full">
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcSet={mobileHero.avif}
          width={mobileHero.width}
          height={mobileHero.height}
        />
        <source
          media="(max-width: 767px)"
          type="image/webp"
          srcSet={mobileHero.webp}
          width={mobileHero.width}
          height={mobileHero.height}
        />
        <source
          media="(min-width: 768px)"
          type="image/avif"
          srcSet={desktopHero.avif}
          width={desktopHero.width}
          height={desktopHero.height}
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={desktopHero.webp}
          width={desktopHero.width}
          height={desktopHero.height}
        />
        <img
          src={desktopHero.webp}
          alt=""
          width={desktopHero.width}
          height={desktopHero.height}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="aspect-[1280/2475] size-full object-cover max-md:object-[18%_22%] md:aspect-[2560/1707] md:scale-[1.2] md:object-[12%_42%] lg:origin-left lg:scale-[1.45] lg:object-[left_42%]"
        />
      </picture>
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.9)_100%)] md:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-20 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.48)_48%,rgba(0,0,0,0.08)_100%)] md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.72)_100%)] md:block"
        aria-hidden="true"
      />

      <SectionShell className="flex min-h-[92svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-32">
        <AnimatedHeadline
          as="h1"
          lines={["Specialisten in", "legal recruitment"]}
          className="max-w-5xl font-display text-[clamp(2.75rem,7vw,5.25rem)] font-light leading-[1.02] tracking-[-0.02em] max-md:text-[clamp(1.9rem,8vw,2.25rem)] max-md:leading-[1.05] max-md:text-pretty"
        />

        <motion.div
          className="mt-8 max-w-[540px] space-y-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.45, duration: 0.7, ease: flatWhiteEase }}
        >
          <p className="text-[18px] leading-[1.5] text-white/70 max-md:text-white/85">
            Kwaliteit, service en vertrouwen staan bij ons nog ouderwets hoog
            in het vaandel.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <PillButton href="/contact" variant="dark" className="max-md:w-full">
              Neem contact op →
            </PillButton>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
