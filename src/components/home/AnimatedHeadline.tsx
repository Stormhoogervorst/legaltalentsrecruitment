"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

type AnimatedHeadlineProps = {
  as?: ElementType;
  lines: string[];
  className?: string;
  lineClassName?: string;
};

export function AnimatedHeadline({
  as: Tag = "h2",
  lines,
  className,
  lineClassName,
}: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : {
            staggerChildren: 0.06,
          },
    },
  };

  const word: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.9,
            ease: flatWhiteEase,
          },
    },
  };

  return (
    <Tag className={cn("text-balance", className)}>
      <motion.span
        className="block"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {lines.map((line) => (
          <span
            key={line}
            className={cn("mb-[-0.12em] block overflow-hidden pb-[0.12em]", lineClassName)}
          >
            {line.split(" ").map((wordPart, index) => (
              <motion.span
                key={`${line}-${wordPart}-${index}`}
                className="inline-block pr-[0.18em]"
                variants={word}
              >
                {wordPart}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
