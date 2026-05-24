import Image from "next/image";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const logos = [
  {
    src: "/logo freshfields.svg",
    alt: "Freshfields",
  },
  {
    src: "/logo legal mind.svg",
    alt: "Legal Mind",
  },
  {
    src: "/logo law and pepper.svg",
    alt: "Law & Pepper",
  },
];

const carouselLogoSets = [logos, logos];

export function TrustStrip() {
  return (
    <section className="bg-background-secondary py-8 text-foreground">
      <SectionShell>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-14">
          <SlashPill>/ VERTROUWD DOOR O.A.</SlashPill>
          <div
            className="trust-carousel flex-1 overflow-hidden"
            aria-label="Vertrouwde organisaties"
          >
            <div className="trust-carousel-track flex w-max items-center">
              {carouselLogoSets.map((logoSet, setIndex) => (
                <div
                  key={setIndex}
                  className="flex shrink-0 items-center gap-6 pr-6 md:gap-12 md:pr-12"
                  aria-hidden={setIndex > 0}
                >
                  {logoSet.map((logo) => (
                    <div
                      key={`${logo.src}-${setIndex}`}
                      className="flex h-14 w-32 shrink-0 items-center justify-center opacity-80 sm:w-40 md:w-[260px]"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={320}
                        height={80}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
