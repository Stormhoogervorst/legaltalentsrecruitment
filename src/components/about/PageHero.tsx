import { PageHero, type PageHeroImage } from "@/components/shared/PageHero";

// TODO(afbeelding): vervang de desktopbron door een bestand van minimaal 2880 px breed
// met deze uitsnede (verhouding 1766:1015). Het kader is op een laptop 1440 css-px breed,
// dus een retina-scherm heeft 2880 px nodig. Dat betekent een originele foto van ~4175 px
// breed (de uitsnede is 69% van de breedte). De huidige bron is 1766 px breed (uitsnede van
// het oude 2560 px-bestand) en wordt op retina ~1,6× opgerekt.
const image = {
  mobile: {
    avif: "/over-ons-hero-mobile.avif",
    webp: "/over-ons-hero-mobile.webp",
    width: 1280,
    height: 2475,
  },
  // Uitsnede (x 0-1766, y 327-1342) van het oude stock-foto-4 (2560×1707): precies wat
  // de oude lg:scale-[1.45] (origin-left, object-position left 42%) op 1440×900 liet zien.
  // De uitsnede heeft dezelfde verhouding (1,74) als het hero-kader op dat formaat.
  desktop: {
    avif: "/over-ons-hero-desktop.avif",
    webp: "/over-ons-hero-desktop.webp",
    width: 1766,
    height: 1015,
  },
  imgClassName:
    "aspect-[1280/2475] size-full object-cover max-md:object-[18%_22%] md:aspect-[1766/1015] md:object-[45%_42%] lg:object-[28%_42%]",
} satisfies PageHeroImage;

export function AboutPageHero() {
  return (
    <PageHero
      variant="image"
      title={["Specialisten in", "legal recruitment"]}
      subtitle="Twee rechtenstudenten begonnen Legal Talents. Het groeide uit tot een recruitment bureau dat bemiddelt binnen het gehele juridische werkveld."
      ctaLabel="Neem contact op →"
      ctaHref="/contact"
      image={image}
    />
  );
}
