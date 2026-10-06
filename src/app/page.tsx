import type { Metadata } from "next";
import { AboutShort } from "@/components/home/AboutShort";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { BookingSection } from "@/components/home/BookingSection";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Hero } from "@/components/home/Hero";
import { HomeCTA } from "@/components/home/HomeCTA";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { TrustStrip } from "@/components/home/TrustStrip";
import { websiteSchema } from "@/lib/schema";

const title = "Legal recruitment voor de lange termijn | Legal Talents";
const description =
  "Legal recruitment voor advocaten, juristen en legal AI-specialisten. We komen voor de intake langs en stellen alleen kandidaten voor die we zelf spraken.";
const socialImage = {
  url: "/social%20preview.png",
  width: 1200,
  height: 1200,
  alt: "Legal recruitment voor de lange termijn.",
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
      <FeaturedJobs />
      <PracticeAreas />
      <AboutShort />
      <BookingSection />
      <HomeCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
