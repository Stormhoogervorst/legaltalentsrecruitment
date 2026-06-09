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
  {
    src: "/Simmons + Simmons logo.png",
    alt: "Simmons + Simmons",
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
                  className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10 md:gap-12 md:pr-12"
                  aria-hidden={setIndex > 0}
                >
                  {logoSet.map((logo) => (
                    <div
                      key={`${logo.src}-${setIndex}`}
                      className="flex h-[72px] w-52 shrink-0 items-center justify-center sm:h-[72px] sm:w-52 md:h-20 md:w-[260px]"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={360}
                        height={100}
                        sizes="(max-width: 768px) 208px, 260px"
                        className="h-auto max-h-[72px] w-full object-contain sm:max-h-[72px] md:max-h-20"
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
