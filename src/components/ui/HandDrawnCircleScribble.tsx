"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HandDrawnCircleScribbleProps {
  children: ReactNode;
  color?: string;
  strokeWidth?: number;
  delay?: number;
}

export function HandDrawnCircleScribble({
  children,
  color = "#587dfe",
  strokeWidth = 3,
  delay = 0.3,
}: HandDrawnCircleScribbleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        whiteSpace: "nowrap",
        padding: "0 0.15em",
        overflow: "visible",
      }}
      className="hand-drawn-circle-scribble"
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 320 130"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "-30%",
          left: "-10%",
          width: "120%",
          height: "160%",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <motion.path
          d="M 175,25 C 95,15 25,30 18,55 C 15,82 50,100 130,105 C 220,108 295,95 305,65 C 308,38 275,22 205,15 C 165,12 130,18 110,28"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: prefersReducedMotion ? 1 : 0,
            opacity: prefersReducedMotion ? 1 : 0,
          }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              delay,
              duration: 1.8,
              ease: [0.45, 0, 0.55, 1],
            },
            opacity: {
              delay,
              duration: 0.15,
            },
          }}
        />
      </svg>
    </span>
  );
}
