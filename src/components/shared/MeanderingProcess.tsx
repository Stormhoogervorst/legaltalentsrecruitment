"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { SectionShell, SlashPill } from "@/components/home/primitives";
import { cn } from "@/lib/utils";

export interface MeanderingProcessProps {
  eyebrow: string;
  eyebrowSubtitle?: string;
  title: string;
  steps: Array<{
    index: string;
    title: string;
    body: string;
  }>;
  footerText?: string;
  footerLink?: { label: string; href: string };
  background?: "slate" | "dark";
}

type Point = {
  x: number;
  y: number;
};

type CubicControl = {
  cp1: Point;
  cp2: Point;
};

const originalDesktopControls: CubicControl[] = [
  { cp1: { x: 1030, y: 170 }, cp2: { x: 1020, y: 300 } },
  { cp1: { x: 570, y: 410 }, cp2: { x: 280, y: 405 } },
  { cp1: { x: 220, y: 710 }, cp2: { x: 865, y: 640 } },
  { cp1: { x: 950, y: 990 }, cp2: { x: 310, y: 890 } },
  { cp1: { x: 245, y: 1135 }, cp2: { x: 280, y: 1170 } },
];

const originalMobileControls: CubicControl[] = [
  { cp1: { x: 62, y: 95 }, cp2: { x: 17, y: 155 } },
  { cp1: { x: 62, y: 340 }, cp2: { x: 18, y: 420 } },
  { cp1: { x: 60, y: 595 }, cp2: { x: 25, y: 680 } },
];

const desktopYTemplate = [340, 560, 805, 1080];
const mobileDotYTemplate = [70, 260, 490, 710];
const mobilePathYTemplate = [250, 510, 760];

function interpolateTemplate(template: number[], index: number, count: number) {
  if (count <= 1) {
    return template[0];
  }

  const position = (index / (count - 1)) * (template.length - 1);
  const lowerIndex = Math.floor(position);
  const upperIndex = Math.min(lowerIndex + 1, template.length - 1);
  const progress = position - lowerIndex;

  return (
    template[lowerIndex] +
    (template[upperIndex] - template[lowerIndex]) * progress
  );
}

function getDesktopDotPositions(stepCount: number) {
  const rightCount = Math.ceil(stepCount / 2);
  const leftCount = Math.floor(stepCount / 2);

  return Array.from({ length: stepCount }, (_, index) => {
    const isRight = index % 2 === 0;
    const occurrence = Math.floor(index / 2);
    const sideCount = isRight ? rightCount : leftCount;
    const sideProgress = sideCount <= 1 ? 0 : occurrence / (sideCount - 1);
    const x = isRight ? 860 + 45 * sideProgress : 250 + 10 * sideProgress;

    return {
      x,
      y: interpolateTemplate(desktopYTemplate, index, stepCount),
    };
  });
}

function getMobileDotPositions(stepCount: number) {
  return Array.from({ length: stepCount }, (_, index) => ({
    x: 40,
    y: interpolateTemplate(mobileDotYTemplate, index, stepCount),
  }));
}

function getSmoothControlPoints(from: Point, to: Point) {
  const horizontalDistance = to.x - from.x;
  const verticalDistance = to.y - from.y;

  return {
    cp1: {
      x: from.x + horizontalDistance * 0.45,
      y: from.y + verticalDistance * 0.2,
    },
    cp2: {
      x: to.x - horizontalDistance * 0.45,
      y: to.y - verticalDistance * 0.2,
    },
  };
}

function buildCubicPath(
  points: Point[],
  controls: CubicControl[] | undefined,
) {
  return points
    .slice(1)
    .reduce((path, point, index) => {
      const from = points[index];
      const { cp1, cp2 } = controls?.[index] ?? getSmoothControlPoints(from, point);

      return `${path} C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${point.x} ${point.y}`;
    }, `M ${points[0].x} ${points[0].y}`);
}

function buildDesktopPath(stepCount: number, dots: Point[]) {
  const lastDot = dots[dots.length - 1];
  const tail = lastDot.x < 600 ? { x: 335, y: 1190 } : { x: 825, y: 1190 };
  const points = [{ x: 880, y: 110 }, ...dots, tail];
  const controls = stepCount === 4 ? originalDesktopControls : undefined;

  return buildCubicPath(points, controls);
}

function buildMobilePath(stepCount: number) {
  const anchors =
    stepCount === 4
      ? mobilePathYTemplate
      : Array.from({ length: stepCount - 1 }, (_, index) =>
          interpolateTemplate(mobilePathYTemplate, index, stepCount - 1),
        );
  const points = [
    { x: 38, y: 0 },
    ...anchors.map((y, index) => ({
      x: index === anchors.length - 1 ? 42 : 40,
      y,
    })),
  ];
  const controls = stepCount === 4 ? originalMobileControls : undefined;

  return buildCubicPath(points, controls);
}

function getTitleLines(title: string) {
  return title
    .split("/")
    .map((line) => line.trim())
    .filter(Boolean);
}

function formatStepIndex(index: string) {
  return index.trim().startsWith("/") ? index : `/ ${index}`;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

function getStepAlignment(index: number) {
  const occurrence = Math.floor(index / 2);

  if (index % 2 === 0) {
    return [
      "md:ml-auto md:mr-[8%]",
      "md:ml-auto md:mr-[14%]",
      "md:ml-auto md:mr-[8%]",
    ][occurrence];
  }

  return [
    "md:mr-auto md:ml-[6%]",
    "md:mr-auto md:ml-[12%]",
  ][occurrence];
}

function AnimatedDot({
  point,
  index,
  total,
  scrollYProgress,
  shouldReduceMotion,
}: {
  point: Point;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  const start = 0.15 + (0.6 * index) / Math.max(total - 1, 1);
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);

  return (
    <motion.circle
      cx={point.x}
      cy={point.y}
      r="4"
      fill="white"
      style={{ opacity: shouldReduceMotion ? 1 : opacity }}
    />
  );
}

function StaticDots({ dots }: { dots: Point[] }) {
  return dots.map((point) => (
    <circle
      key={`${point.x}-${point.y}`}
      cx={point.x}
      cy={point.y}
      r="4"
      fill="white"
      opacity="1"
    />
  ));
}

function DesktopAnimatedSvg({
  sectionRef,
  path,
  dots,
  stepCount,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  path: string;
  dots: Point[];
  stepCount: number;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <motion.svg
      className="pointer-events-none absolute inset-x-12 top-40 z-0 hidden h-[1120px] w-[calc(100%-96px)] md:block"
      viewBox="0 0 1200 1200"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        stroke="var(--slate-line)"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength={1}
        style={{ pathLength, filter: "blur(8px)", opacity: 0.2 }}
      />
      <motion.path
        d={path}
        stroke="var(--slate-line)"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength={1}
        style={{ pathLength }}
      />
      {dots.map((point, index) => (
        <AnimatedDot
          key={`${point.x}-${point.y}`}
          point={point}
          index={index}
          total={stepCount}
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={false}
        />
      ))}
    </motion.svg>
  );
}

function DesktopStaticSvg({ path, dots }: { path: string; dots: Point[] }) {
  return (
    <svg
      className="pointer-events-none absolute inset-x-12 top-40 z-0 hidden h-[1120px] w-[calc(100%-96px)] md:block"
      viewBox="0 0 1200 1200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        stroke="var(--slate-line)"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength={1}
        style={{ filter: "blur(8px)", opacity: 0.2 }}
      />
      <path
        d={path}
        stroke="var(--slate-line)"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength={1}
      />
      <StaticDots dots={dots} />
    </svg>
  );
}

function MobileStaticSvg({
  path,
  dots,
  shouldReduceMotion,
}: {
  path: string;
  dots: Point[];
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.svg
      className="pointer-events-none absolute left-5 top-[360px] z-0 h-[760px] w-20 md:hidden"
      viewBox="0 0 80 760"
      fill="none"
      aria-hidden="true"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
    >
      <path
        d={path}
        stroke="var(--slate-line)"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength={1}
      />
      <StaticDots dots={dots} />
    </motion.svg>
  );
}

export function MeanderingProcess({
  eyebrow,
  eyebrowSubtitle,
  title,
  steps,
  footerText,
  footerLink,
  background = "slate",
}: MeanderingProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const desktopDots = getDesktopDotPositions(steps.length);
  const mobileDots = getMobileDotPositions(steps.length);
  const desktopPath = buildDesktopPath(steps.length, desktopDots);
  const mobilePath = buildMobilePath(steps.length);
  const isDark = background === "dark";

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden py-16 md:py-40",
        isDark
          ? "bg-dark-background text-dark-foreground"
          : "bg-slate-background text-slate-foreground",
      )}
    >
      <SectionShell className="relative min-h-[1180px] md:min-h-[1420px]">
        {isDesktop ? (
          shouldReduceMotion === false ? (
            <DesktopAnimatedSvg
              sectionRef={sectionRef}
              path={desktopPath}
              dots={desktopDots}
              stepCount={steps.length}
            />
          ) : (
            <DesktopStaticSvg path={desktopPath} dots={desktopDots} />
          )
        ) : (
          <MobileStaticSvg
            path={mobilePath}
            dots={mobileDots}
            shouldReduceMotion={shouldReduceMotion}
          />
        )}

        <div className="relative z-10">
          <SlashPill variant={isDark ? "dark" : "slate"}>{eyebrow}</SlashPill>
          {eyebrowSubtitle ? (
            <p
              className={cn(
                "mt-6 text-[14px] leading-[1.5]",
                isDark
                  ? "text-dark-foreground-secondary"
                  : "text-slate-foreground-secondary",
              )}
            >
              {eyebrowSubtitle}
            </p>
          ) : null}
          <AnimatedHeadline
            lines={getTitleLines(title)}
            className="display-lg mt-5 max-w-3xl"
          />
        </div>

        <div className="relative z-10 mt-20 space-y-28 pl-16 md:mt-6 md:space-y-[200px] md:pl-0">
          {steps.map((step, index) => (
            <article
              key={step.index}
              className={cn("max-w-[360px]", getStepAlignment(index))}
            >
              <p
                className={cn(
                  "font-mono text-[14px] font-medium leading-none tracking-[0.04em]",
                  isDark
                    ? "text-dark-foreground-secondary"
                    : "text-slate-foreground-secondary",
                )}
              >
                {formatStepIndex(step.index)}
              </p>
              <h3 className="display-h3 mt-5">{step.title}</h3>
              <p
                className={cn(
                  "mt-4 text-[16px] leading-[1.6]",
                  isDark
                    ? "text-dark-foreground-secondary"
                    : "text-slate-foreground-secondary",
                )}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>

        {footerText || footerLink ? (
          <div className="relative z-10 mx-auto mt-28 max-w-[540px] text-center md:mt-36">
            {footerText ? (
              <p
                className={cn(
                  "text-[16px] leading-[1.6]",
                  isDark
                    ? "text-dark-foreground-secondary"
                    : "text-slate-foreground-secondary",
                )}
              >
                {footerText}
              </p>
            ) : null}
            {footerLink ? (
              <Link
                href={footerLink.href}
                className={cn(
                  "body-sm mt-4 inline-flex items-center gap-2 rounded-full bg-[#3A3F4A] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[#2A2F38] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4",
                  isDark
                    ? "focus-visible:ring-dark-foreground focus-visible:ring-offset-dark-background"
                    : "focus-visible:ring-slate-foreground focus-visible:ring-offset-slate-background",
                )}
              >
                {footerLink.label}
                <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
              </Link>
            ) : null}
          </div>
        ) : null}
      </SectionShell>
    </section>
  );
}
