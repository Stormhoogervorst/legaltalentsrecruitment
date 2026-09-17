import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";
import { getAllVacatures } from "@/lib/vacatures";

export async function FeaturedJobs() {
  const allVacatures = await getAllVacatures();
  const featured = allVacatures.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="section-y bg-background-secondary text-foreground">
      <SectionShell>
        <SlashPill>/ UITGELICHTE VACATURES</SlashPill>
        <AnimatedHeadline
          lines={["Recent geplaatste", "posities."]}
          className="display-md mt-8 max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((vacature) => (
            <article
              key={vacature.slug}
              className="flex min-h-[360px] flex-col rounded-[16px] bg-background p-8"
            >
              <h3 className="display-h3">{vacature.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                {vacature.plaats} — {vacature.plaatsing}
              </p>
              <p className="mt-8 line-clamp-3 text-[16px] leading-[1.6] text-foreground-secondary">
                {vacature.excerpt}
              </p>
              <div className="mt-auto pt-10">
                <PillButton
                  href={`/vacatures/${vacature.slug}`}
                  className="bg-foreground-secondary text-background"
                >
                  Bekijk vacature →
                </PillButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PillButton href="/vacatures" variant="secondary">
            Bekijk alle vacatures →
          </PillButton>
        </div>
      </SectionShell>
    </section>
  );
}
