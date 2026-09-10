"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogHeading } from "@/lib/blogs";

function TocList({
  headings,
  onNavigate,
}: {
  headings: BlogHeading[];
  onNavigate?: () => void;
}) {
  return (
    <ol className="mt-4 space-y-3">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={onNavigate}
            className="text-[14px] leading-[1.5] text-foreground-secondary transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            {heading.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ headings }: { headings: BlogHeading[] }) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  if (headings.length < 3) return null;

  return (
    <div>
      <div className="rounded-[16px] bg-background-secondary lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          <span className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-foreground-muted">
            / Inhoudsopgave
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-foreground-muted transition-transform duration-[240ms] ease-flatwhite",
              open && "rotate-180",
            )}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>
        {open ? (
          <nav id={panelId} aria-label="Inhoudsopgave" className="px-5 pb-5">
            <TocList headings={headings} onNavigate={() => setOpen(false)} />
          </nav>
        ) : null}
      </div>

      <nav
        aria-label="Inhoudsopgave"
        className="sticky top-28 hidden self-start lg:block"
      >
        <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
          / Inhoudsopgave
        </p>
        <TocList headings={headings} />
      </nav>
    </div>
  );
}
