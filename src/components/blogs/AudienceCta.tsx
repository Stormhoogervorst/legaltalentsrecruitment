import { PillButton } from "@/components/home/primitives";
import { audienceCtas, type BlogAudience } from "@/content/blog-categories";

export function AudienceCta({
  audience,
  className,
}: {
  audience: BlogAudience;
  className?: string;
}) {
  const cta = audienceCtas[audience];

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <PillButton href={cta.primary.href}>{cta.primary.label}</PillButton>
        <PillButton href={cta.secondary.href} variant="secondary">
          {cta.secondary.label}
        </PillButton>
      </div>
    </div>
  );
}
