import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { VacatureListItem } from "@/lib/vacatures";

function getVacatureCode(vacature: VacatureListItem) {
  const niveau = vacature.niveau.slice(0, 3).toUpperCase();
  const rechtsgebied = vacature.rechtsgebieden?.[0]?.title.slice(0, 3).toUpperCase() ?? "ALG";

  return `/ ${niveau}-${rechtsgebied}`;
}

export function VacatureCard({ vacature }: { vacature: VacatureListItem }) {
  const meta = [vacature.plaats, vacature.werkvorm, vacature.plaatsing].filter(Boolean);
  const rechtsgebieden = vacature.rechtsgebieden ?? [];

  return (
    <Link
      href={`/vacatures/${vacature.slug}`}
      className="group block rounded-[16px] bg-background-secondary p-6 transition-colors duration-[280ms] ease-flatwhite hover:bg-background-tertiary md:p-8"
    >
      <article>
        <div className="flex items-center justify-between gap-6">
          <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
            {getVacatureCode(vacature)}
          </p>
          <ArrowUpRight
            className="size-5 shrink-0 transition-transform duration-[280ms] ease-flatwhite group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-4 font-display text-[20px] font-medium leading-[1.2] tracking-[-0.005em] md:text-[24px]">
          {vacature.title}
        </h3>

        {meta.length > 0 ? (
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm leading-[1.5] text-foreground-muted">
            {meta.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                {item}
              </span>
            ))}
          </p>
        ) : null}

        <p className="mt-4 line-clamp-2 text-[16px] leading-[1.6] text-foreground-secondary">
          {vacature.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {rechtsgebieden.map((rechtsgebied) => (
            <span
              key={rechtsgebied.slug}
              className="rounded-full bg-background px-3 py-1 text-sm leading-[1.5] text-foreground-secondary"
            >
              {rechtsgebied.title}
            </span>
          ))}
          <span className="rounded-full bg-background px-3 py-1 text-sm leading-[1.5] text-foreground-secondary">
            {vacature.niveau}
          </span>
        </div>
      </article>
    </Link>
  );
}
