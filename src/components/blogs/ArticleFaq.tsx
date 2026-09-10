import { SlashPill } from "@/components/home/primitives";

export function ArticleFaq({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <SlashPill>/ FAQ</SlashPill>
      <div className="mt-6 divide-y divide-border-light border-y border-border-light">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="cursor-pointer list-none font-display text-[18px] font-medium leading-[1.35] text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.q}
                <span
                  aria-hidden="true"
                  className="mt-1 font-mono text-[12px] text-foreground-muted transition-transform duration-[240ms] ease-flatwhite group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-[68ch] text-[16px] leading-[1.7] text-foreground-secondary">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
