import { SlashPill } from "@/components/home/primitives";
import { AudienceCta } from "@/components/blogs/AudienceCta";
import type { BlogAudience } from "@/content/blog-categories";

const copy: Record<BlogAudience, { eyebrow: string; title: string; body: string }> =
  {
    kandidaat: {
      eyebrow: "/ VOLGENDE STAP",
      title: "Op zoek naar een nieuwe rol?",
      body: "Wij denken vrijblijvend mee — vertrouwelijk, en alleen met functies die passen.",
    },
    opdrachtgever: {
      eyebrow: "/ VOLGENDE STAP",
      title: "Op zoek naar juridisch talent?",
      body: "Geen lijst met vijftig cv's, maar kandidaten die inhoudelijk en cultureel passen.",
    },
  };

export function CtaBlock({ variant }: { variant: BlogAudience }) {
  const content = copy[variant];

  return (
    <aside className="my-10 rounded-[16px] bg-background-secondary px-6 py-8 md:px-8">
      <SlashPill>{content.eyebrow}</SlashPill>
      <p className="mt-5 font-display text-[22px] font-medium leading-[1.2] tracking-[-0.005em] text-foreground">
        {content.title}
      </p>
      <p className="mt-3 max-w-[42rem] text-[16px] leading-[1.6] text-foreground-secondary">
        {content.body}
      </p>
      <AudienceCta audience={variant} className="mt-6" />
    </aside>
  );
}
