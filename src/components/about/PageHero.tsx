import { PageHero, type PageHeroImage } from "@/components/shared/PageHero";

const image = {
  mobile: {
    avif: "/over-ons-hero-mobile.avif",
    webp: "/over-ons-hero-mobile.webp",
    width: 1280,
    height: 2475,
  },
  desktop: {
    avif: "/stock-foto-4.avif",
    webp: "/stock-foto-4.webp",
    width: 2560,
    height: 1707,
  },
  imgClassName:
    "aspect-[1280/2475] size-full object-cover max-md:object-[18%_22%] md:aspect-[2560/1707] md:scale-[1.2] md:object-[12%_42%] lg:origin-left lg:scale-[1.45] lg:object-[left_42%]",
} satisfies PageHeroImage;

export function AboutPageHero() {
  return (
    <PageHero
      variant="image"
      title={["Specialisten in", "legal recruitment"]}
      subtitle="Kwaliteit, service en vertrouwen staan bij ons nog ouderwets hoog in het vaandel."
      ctaLabel="Neem contact op →"
      ctaHref="/contact"
      image={image}
    />
  );
}
