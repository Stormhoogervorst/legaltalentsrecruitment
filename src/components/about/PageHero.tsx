import {
  PillButton,
  SectionShell,
  SlashPill,
} from "@/components/home/primitives";

export function PageHero() {
  return (
    <section className="bg-background py-16 text-foreground md:py-[120px]">
      <SectionShell>
        <SlashPill>/ OVER ONS</SlashPill>
        <h1 className="display-lg mt-8 max-w-5xl">
          Over <br className="md:hidden" />
          <span className="whitespace-nowrap">Legal Talents.</span>
        </h1>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
          Een jong en fris boutique legal recruitment agency waarbij kwaliteit,
          service en vertrouwen nog ouderswets hoog in het vaandel staan.
        </p>
        <div className="mt-10">
          <PillButton href="/contact">Neem contact op →</PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
