"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fragment, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

type AnimatedHeadlineProps = {
  as?: ElementType;
  lines: string[];
  className?: string;
  lineClassName?: string;
  renderWord?: (word: string, index: number, line: string) => ReactNode;
};

export function AnimatedHeadline({
  as: Tag = "h2",
  lines,
  className,
  lineClassName,
  renderWord,
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
        {lines.map((line) => {
          const words = line.split(" ");
          return (
            <span
              key={line}
              className={cn("mb-[-0.12em] block overflow-hidden pb-[0.12em]", lineClassName)}
            >
              {words.map((wordPart, index) => (
                <Fragment key={`${line}-${wordPart}-${index}`}>
                  <motion.span className="inline-block" variants={word}>
                    {renderWord ? renderWord(wordPart, index, line) : wordPart}
                  </motion.span>
                  {index < words.length - 1 ? (
                    <span className="inline-block w-[0.18em]">{" "}</span>
                  ) : null}
                </Fragment>
              ))}
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
