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

export function HeadhunterAdvocatuurHero() {
  return (
    <PageHero
      variant="image"
      title="Headhunter advocatuur"
      subtitle="Headhunter voor advocatenkantoren en inhouse legal teams die senior juridisch talent zoeken. Legal Talents is een juridisch headhunter: legal executive search voor rollen die niet via een advertentie binnenkomen — partner, counsel, general counsel, senior bedrijfsjurist. Discreet, landelijk, no cure no pay."
      ctaLabel="Plan een gesprek →"
      ctaHref="/contact"
      image={image}
    />
  );
}
