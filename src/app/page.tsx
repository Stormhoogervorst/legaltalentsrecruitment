import type { Metadata } from "next";
import { AboutShort } from "@/components/home/AboutShort";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Hero } from "@/components/home/Hero";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HowWeWork } from "@/components/home/HowWeWork";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { TrustStrip } from "@/components/home/TrustStrip";
import { websiteSchema } from "@/lib/schema";

const title = "Legal Recruitment | Legal Talents | Bereik 40.000+ Juristen";
const description =
  "Legal Talents Recruitment verbindt vooraanstaande juristen en advocaten met de meest gerenommeerde kantoren. Persoonlijk plan op maat en altijd gericht op de lange termijn.";
const socialImage = {
  url: "/social%20preview.png",
  width: 1024,
  height: 1024,
  alt: "Legal Recruitment, zoals het hoort.",
};

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title,
    description,
    siteName: "Legal Talents Recruitment",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function Home() {
  const jsonLd = websiteSchema();

  return (
    <>
      <Hero />
      <TrustStrip />
      <AudienceSplit />
      <HowWeWork />
      <PracticeAreas />
      <FeaturedJobs />
      <AboutShort />
      <HomeCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
