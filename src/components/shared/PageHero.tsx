"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell } from "@/components/home/primitives";
import { cn } from "@/lib/utils";

const flatWhiteEase = [0.22, 1, 0.36, 1] as const;

const headlineClassName =
  "max-w-5xl font-display text-[clamp(1.9rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-pretty";

type HeroImageSource = {
  avif: string;
  webp: string;
  width: number;
  height: number;
};

export type PageHeroImage = {
  mobile: HeroImageSource;
  desktop: HeroImageSource;
  imgClassName: string;
};

type PageHeroBase = {
  title: string | readonly string[];
  subtitle: ReactNode;
  ctaLabel: string;
  ctaHref: string;
};

export type PageHeroProps =
  | (PageHeroBase & { variant: "light" })
  | (PageHeroBase & { variant: "image"; image: PageHeroImage });

function HeroPicture({ image }: { image: PageHeroImage }) {
  return (
    <>
      <picture className="pointer-events-none absolute inset-0 -z-30 block size-full">
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcSet={image.mobile.avif}
          width={image.mobile.width}
          height={image.mobile.height}
        />
        <source
          media="(max-width: 767px)"
          type="image/webp"
          srcSet={image.mobile.webp}
          width={image.mobile.width}
          height={image.mobile.height}
        />
        <source
          media="(min-width: 768px)"
          type="image/avif"
          srcSet={image.desktop.avif}
          width={image.desktop.width}
          height={image.desktop.height}
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={image.desktop.webp}
          width={image.desktop.width}
          height={image.desktop.height}
        />
        <img
          src={image.desktop.webp}
          alt=""
          width={image.desktop.width}
          height={image.desktop.height}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className={image.imgClassName}
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
    </>
  );
}

export function PageHero(props: PageHeroProps) {
  const { title, subtitle, ctaLabel, ctaHref, variant } = props;
  const shouldReduceMotion = useReducedMotion();
  const lines = Array.isArray(title) ? [...title] : [title];
  const isImage = variant === "image";

  return (
    <section
      className={cn(
        "relative isolate",
        isImage
          ? "min-h-[92svh] overflow-hidden bg-dark-background text-white"
          : "min-h-[92svh] border-b border-border-light bg-background text-foreground",
      )}
    >
      {isImage ? <HeroPicture image={props.image} /> : null}

      <SectionShell className="flex min-h-[92svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-32">
        <AnimatedHeadline
          as="h1"
          lines={lines}
          className={headlineClassName}
        />

        <motion.div
          className="mt-8 space-y-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.45,
            duration: 0.7,
            ease: flatWhiteEase,
          }}
        >
          <p
            className={cn(
              "max-w-[42ch] text-[18px] leading-[1.5]",
              isImage
                ? "text-white/70 max-md:text-white/85"
                : "text-foreground-secondary",
            )}
          >
            {subtitle}
          </p>

          <div>
            <PillButton
              href={ctaHref}
              variant={isImage ? "dark" : "primary"}
              className="max-md:w-full"
            >
              {ctaLabel}
            </PillButton>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
