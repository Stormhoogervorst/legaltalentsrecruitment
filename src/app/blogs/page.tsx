import type { Metadata } from "next";
import { BlogCard } from "@/components/blogs/BlogCard";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";
import { getAllPosts } from "@/lib/blogs";

const title = "Blog | Legal Talents";
const description =
  "Artikelen over legal recruitment, de advocatuur en in-house carrières. Inzichten van Legal Talents voor juristen en werkgevers die verder willen.";
const canonical = "https://www.legaltalentsrecruitment.nl/blogs";
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
    canonical,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title,
    description,
    url: canonical,
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

function blogSchema(posts: Awaited<ReturnType<typeof getAllPosts>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: canonical,
    inLanguage: "nl-NL",
    publisher: {
      "@type": "Organization",
      name: "Legal Talents Recruitment",
      url: "https://www.legaltalentsrecruitment.nl",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description || post.excerpt,
      datePublished: post.publishedAt,
      url: `https://www.legaltalentsrecruitment.nl/blogs/${post.slug}`,
    })),
  };
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.legaltalentsrecruitment.nl/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: canonical,
    },
  ],
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="bg-background pt-16 pb-8 text-foreground md:pt-[120px] md:pb-12">
        <SectionShell>
          <SlashPill>/ BLOG</SlashPill>
          <h1 className="display-lg mt-8 max-w-5xl">
            Inzichten uit
            <br />
            de praktijk.
          </h1>
          <p className="mt-8 max-w-[640px] text-[18px] leading-[1.5] text-foreground-secondary">
            Wat we zien in de juridische markt — van advocatuur tot in-house.
            Korte artikelen voor juristen en werkgevers die verder willen.
          </p>
        </SectionShell>
      </section>

      <section className="bg-background pt-8 pb-16 text-foreground md:pt-12 md:pb-24">
        <SectionShell>
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-[16px] bg-background-secondary p-8 md:p-10">
              <p className="max-w-[680px] text-[16px] leading-[1.6] text-foreground-muted">
                Er staan nog geen artikelen online. Bekijk in de tussentijd
                onze actuele vacatures.
              </p>
              <div className="mt-8">
                <PillButton href="/vacatures" variant="secondary">
                  Bekijk vacatures →
                </PillButton>
              </div>
            </div>
          )}
        </SectionShell>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema(posts)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
