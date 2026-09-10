import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowText, SlashPill } from "@/components/home/primitives";
import { getRelatedPageLabel } from "@/content/blog-categories";

export function RelatedPages({ hrefs }: { hrefs: string[] }) {
  if (hrefs.length === 0) return null;

  return (
    <section className="mt-16">
      <SlashPill>/ RELEVANTE PAGINA&apos;S</SlashPill>
      <ul className="mt-6 grid gap-3">
        {hrefs.map((href) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex items-center justify-between gap-4 rounded-[16px] bg-background-secondary px-5 py-4 transition-colors duration-[280ms] ease-flatwhite hover:bg-background-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              <ArrowText>{getRelatedPageLabel(href)}</ArrowText>
              <ArrowUpRight
                className="size-4 shrink-0 transition-transform duration-[280ms] ease-flatwhite group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
