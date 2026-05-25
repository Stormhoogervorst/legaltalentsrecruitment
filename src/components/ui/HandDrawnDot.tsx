"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

interface HandDrawnDotProps {
  color?: string;
  size?: number;
  delay?: number;
  mobileOffset?: number;
}

export function HandDrawnDot({
  color = "#587dfe",
  size = 22,
  delay = 1.1,
  mobileOffset = 0,
}: HandDrawnDotProps) {
  const prefersReducedMotion = useReducedMotion();
  const wrapperStyle: CSSProperties & {
    "--hand-drawn-dot-mobile-offset": string;
  } = {
    display: "inline-block",
    position: "relative",
    width: `${size}px`,
    height: `${size}px`,
    marginLeft: "4px",
    verticalAlign: "baseline",
    "--hand-drawn-dot-mobile-offset": `${mobileOffset}px`,
  };

  return (
    <span
      className="hand-drawn-dot"
      style={wrapperStyle}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <motion.path
          d="M 10,7 Q 12,7 13,9 Q 14,11 12,12 Q 10,13 8,12 Q 7,11 8,9 Q 10,7 12,8 Q 14,9 13,11 Q 12,13 10,12 Q 8,11 9,9 Q 11,8 13,10 Q 14,12 11,13 Q 8,13 8,10"
          fill="none"
          stroke={color}
          strokeWidth={3.5}
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
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1],
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
