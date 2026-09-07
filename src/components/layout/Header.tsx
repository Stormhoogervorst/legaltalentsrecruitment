"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLink } from "@/components/layout/ActiveLink";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Vacatures", href: "/vacatures" },
  { label: "Voor Kandidaten", href: "/voor-kandidaten" },
  { label: "Voor Opdrachtgevers", href: "/voor-opdrachtgevers" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 16;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    () => false,
  );
  const isHomepage = pathname === "/";
  const isOverHero = isHomepage && !isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 border-b transition-[background-color,border-color,color] duration-300",
          isOverHero
            ? "border-transparent bg-transparent text-white"
            : "border-foreground/10 bg-background/90 text-foreground backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className={cn(
              "inline-flex size-14 shrink-0 items-center justify-center transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2",
              isOverHero
                ? "focus-visible:ring-offset-transparent"
                : "focus-visible:ring-offset-background",
            )}
            aria-label="Legal Talents home"
          >
            <Image
              src="/logo lt.svg"
              alt="Legal Talents Recruitment"
              width={56}
              height={56}
              className="block size-full object-contain"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Hoofdnavigatie"
          >
            {navItems.map((item) => (
              <ActiveLink
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                activeClassName={
                  isOverHero
                    ? "text-white underline decoration-white/80 decoration-[1.5px] underline-offset-[6px]"
                    : "text-foreground underline decoration-accent decoration-[1.5px] underline-offset-[6px]"
                }
                inactiveClassName={
                  isOverHero
                    ? "text-white/75 hover:text-white"
                    : "text-foreground/65 hover:text-foreground"
                }
              >
                {item.label}
              </ActiveLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden rounded-full px-5 py-3 text-sm font-medium transition-[transform,box-shadow] duration-[240ms] hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:inline-flex",
                isOverHero
                  ? "bg-white text-foreground hover:shadow-[0_0_0_2px_rgba(255,255,255,0.25)] focus-visible:ring-white focus-visible:ring-offset-transparent"
                  : "bg-foreground text-background hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)] focus-visible:ring-foreground focus-visible:ring-offset-background",
              )}
            >
              Plan kennismaking
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open mobiel menu"
              aria-expanded={isMenuOpen}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:hidden",
                isOverHero
                  ? "border-white/30 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-transparent"
                  : "border-foreground/10 text-foreground hover:bg-foreground/5 focus-visible:ring-foreground focus-visible:ring-offset-background",
              )}
            >
              <span className="sr-only">Open menu</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>
      {!isHomepage ? <div className="h-20" aria-hidden="true" /> : null}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
