"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HandDrawnCircleProps {
  children: ReactNode;
  color?: string;
  strokeWidth?: number;
  delay?: number;
}

export function HandDrawnCircle({
  children,
  color = "#587dfe",
  strokeWidth = 2.5,
  delay = 0.5,
}: HandDrawnCircleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-8%",
          width: "116%",
          height: "120%",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <motion.path
          d="M 30,55 Q 12,35 35,22 Q 80,8 150,12 Q 230,16 275,30 Q 295,42 280,62 Q 255,82 180,88 Q 90,92 35,80 Q 8,70 22,50 Q 35,38 80,32"
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
              ease: [0.65, 0, 0.35, 1],
            },
            opacity: {
              delay,
              duration: 0.2,
            },
          }}
        />
      </svg>
    </span>
  );
}
