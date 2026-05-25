"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "@/components/layout/ActiveLink";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navItems = [
  { label: "Vacatures", href: "/vacatures" },
  { label: "Voor Kandidaten", href: "/voor-kandidaten" },
  { label: "Voor Opdrachtgevers", href: "/voor-opdrachtgevers" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="inline-flex size-14 shrink-0 items-center justify-center transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                activeClassName="text-foreground underline decoration-accent decoration-[1.5px] underline-offset-[6px]"
                inactiveClassName="text-foreground/65 hover:text-foreground"
              >
                {item.label}
              </ActiveLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-[transform,box-shadow] duration-[240ms] hover:scale-[1.02] hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
            >
              Plan kennismaking
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open mobiel menu"
              aria-expanded={isMenuOpen}
              className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="h-px w-full bg-foreground" />
                <span className="h-px w-full bg-foreground" />
                <span className="h-px w-full bg-foreground" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
