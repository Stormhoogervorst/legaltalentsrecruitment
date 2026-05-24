import type { Metadata } from "next";
import { AboutShort } from "@/components/home/AboutShort";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Hero } from "@/components/home/Hero";
import { HomeCTA } from "@/components/home/HomeCTA";
import { HowWeWork } from "@/components/home/HowWeWork";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { TrustStrip } from "@/components/home/TrustStrip";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const title =
  "Juridisch Recruitment | Vaste Plaatsingen voor Juristen — Legal Talents";
const description =
  "Persoonlijk juridisch recruitment voor vaste plaatsingen. Geen massadatabase — een netwerk. Voor advocaten, bedrijfsjuristen en in-house counsel.";

export const metadata: Metadata = {
  title,
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
  },
};

export default function Home() {
  const jsonLd = [organizationSchema(), websiteSchema()];

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
