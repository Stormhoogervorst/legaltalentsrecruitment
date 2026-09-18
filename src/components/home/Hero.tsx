import { PageHero, type PageHeroImage } from "@/components/shared/PageHero";

const image = {
  mobile: {
    avif: "/hero-mobile.avif",
    webp: "/hero-mobile.webp",
    width: 1280,
    height: 2389,
  },
  desktop: {
    avif: "/stock-foto-6.avif",
    webp: "/stock-foto-6.webp",
    width: 2560,
    height: 1707,
  },
  imgClassName:
    "size-full object-cover max-md:object-[center_28%] md:object-[22%_40%] md:max-lg:origin-top md:max-lg:scale-[1.35] lg:object-[center_42%]",
} satisfies PageHeroImage;

export function Hero() {
  return (
    <PageHero
      variant="image"
      title={["Legal recruitment", "voor de lange termijn."]}
      subtitle={
        <>
          Vaste plaatsingen voor advocaten, bedrijfsjuristen en in-house
          counsel.
          <span className="max-md:hidden">
            {" "}
            Wij bereiken maandelijks 40.000 juristen.
          </span>
        </>
      }
      ctaLabel="Bekijk vacatures →"
      ctaHref="/vacatures"
      image={image}
    />
  );
}
