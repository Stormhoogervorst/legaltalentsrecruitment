import Image from "next/image";
import Link from "next/link";
import { AnimatedHeadline } from "@/components/home/AnimatedHeadline";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";

export function AboutShort() {
  return (
    <section className="section-y bg-background text-foreground">
      <SectionShell>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SlashPill>/ OVER ONS</SlashPill>
            <AnimatedHeadline
              lines={["Begonnen als twee rechtenstudenten."]}
              className="display-md mt-8 max-w-xl"
            />
            <div className="mt-8 max-w-xl space-y-5 text-[16px] leading-[1.6] text-foreground-secondary">
              <p>
                Storm en Max begonnen Legal Talents Recruitment als
                rechtenstudenten. Ze wilden legal recruitment waarbij persoonlijk
                contact en vertrouwen voorop staan.
              </p>
              <p>
                Met een achtergrond in de juridische wereld en een breed netwerk
                van advocaten, bedrijfsjuristen en kantoren werken we als{" "}
                <Link
                  href="/juridisch-recruiter"
                  className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  juridisch recruiter
                </Link>{" "}
                voor beide kanten van de tafel.
              </p>
            </div>
            <div className="mt-10">
              <PillButton href="/over-ons" variant="secondary">
                Lees ons verhaal →
              </PillButton>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[24px] bg-background-secondary">
            <Image
              src="/over ons.jpg"
              alt="Drie mensen in gesprek aan een rode tafel bij Legal Talents Recruitment"
              fill
              // Bron is al vierkant bijgesneden (1600×1600) en het kader is
              // aspect-square, dus er wordt niets meer afgesneden: nodig = kaderbreedte.
              // Kaderbreedte = (min(vw, 1440px) - 2×48px padding - 64px gap) / 2 vanaf lg
              //   ≥1440px: (1440 - 96 - 64) / 2 = 640px
              //   1024-1439px: (100vw - 96px - 64px) / 2 = 50vw - 80px
              //   768-1023px: 1 kolom, 100vw - 2×48px = 100vw - 96px
              //   <768px: 1 kolom, 100vw - 2×20px = 100vw - 40px
              sizes="(min-width: 1440px) 640px, (min-width: 1024px) calc(50vw - 80px), (min-width: 768px) calc(100vw - 96px), calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
