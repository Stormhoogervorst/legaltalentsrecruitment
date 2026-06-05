"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { ArrowText, SectionShell, SlashPill } from "@/components/home/primitives";

const flatWhiteEase = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    index: "/ 001",
    title: "Voor juridisch talent",
    body: "Op zoek naar een nieuwe juridische uitdaging? Wij begeleiden je vertrouwelijk en persoonlijk naar de juiste positie.",
    bullets: [
      "Vaste posities op niveau",
      "Persoonlijke begeleiding",
      "Discreet en vertrouwelijk",
    ],
    href: "/voor-kandidaten",
    link: "Meer voor kandidaten",
  },
  {
    index: "/ 002",
    title: "Voor opdrachtgevers",
    body: "Op zoek naar juridisch talent dat blijft? Wij vinden de match die zowel inhoudelijk als cultureel past.",
    bullets: [
      "Persoonlijk netwerk",
      "Brede dekking alle rechtsgebieden",
      "Fee bij plaatsing",
    ],
    href: "/voor-opdrachtgevers",
    link: "Meer voor opdrachtgevers",
  },
];

export function AudienceSplit() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion ? {} : { staggerChildren: 0.1 },
    },
  };

  const card: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.7, ease: flatWhiteEase },
    },
  };

  return (
    <section className="section-y bg-background text-foreground">
      <SectionShell>
        <SlashPill>/ VOOR WIE</SlashPill>
        <AnimatedHeadline
          lines={["Voor werkgever of werknemer."]}
          className="display-md mt-8 max-w-3xl"
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {cards.map((item) => (
            <motion.article
              key={item.index}
              variants={card}
              className="flex min-h-[480px] flex-col rounded-[24px] bg-background-secondary p-8 md:p-12"
            >
              <p className="font-mono text-[14px] font-medium leading-none tracking-[0.04em] text-foreground-muted">
                {item.index}
              </p>
              <h3 className="display-h3 mt-10">{item.title}</h3>
              <p className="mt-5 text-[16px] leading-[1.6] text-foreground-secondary">
                {item.body}
              </p>
              <ul className="mt-8 space-y-3 text-[16px] leading-[1.6] text-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true">/</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className="mt-auto pt-10 text-foreground transition-colors hover:text-foreground-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background-secondary"
              >
                <ArrowText>
                  {item.link}
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </ArrowText>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </SectionShell>
    </section>
  );
}
