"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HandDrawnUnderlineProps {
  children: ReactNode;
  color?: string;
  strokeWidth?: number;
  delay?: number;
}

export function HandDrawnUnderline({
  children,
  color = "#587dfe",
  strokeWidth = 6,
  delay = 0.3,
}: HandDrawnUnderlineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 30"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: "-12px",
          left: "-2%",
          width: "104%",
          height: "22px",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <motion.path
          d="M 6,16 C 50,8 110,22 165,12 C 220,5 270,18 296,14"
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
              duration: 1.4,
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
