import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArticleBreadcrumbs } from "@/components/blogs/ArticleBreadcrumbs";
import { ArticleFaq } from "@/components/blogs/ArticleFaq";
import { AudienceCta } from "@/components/blogs/AudienceCta";
import { AuthorBox } from "@/components/blogs/AuthorBox";
import { BlogCard } from "@/components/blogs/BlogCard";
import { RelatedPages } from "@/components/blogs/RelatedPages";
import { TableOfContents } from "@/components/blogs/TableOfContents";
import { blogMdxComponents } from "@/components/blogs/mdx/components";
import { PillButton, SectionShell, SlashPill } from "@/components/home/primitives";
import { getBlogCategory } from "@/content/blog-categories";
import {
  blogBreadcrumbSchema,
  blogFaqSchema,
  blogAuthorLabel,
  blogHeroImage,
  blogPostingSchema,
  DEFAULT_BLOG_HERO_ALT,
  DEFAULT_BLOG_HERO_IMAGE,
  formatBlogDate,
  getAllPostSlugs,
  getPostBySlug,
  getPostHeadings,
  getRelatedPosts,
  resolveBlogAuthor,
} from "@/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://www.legaltalentsrecruitment.nl";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel niet gevonden",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = post.seoTitle ?? post.title;
  const canonical = `${siteUrl}/blogs/${slug}`;
  const modified = post.updatedAt ?? post.publishedAt;
  const heroImage = blogHeroImage(post);
  const socialImage = post.coverImage
    ? {
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.coverAlt ?? post.title,
      }
    : {
        url: heroImage,
        alt:
          heroImage === DEFAULT_BLOG_HERO_IMAGE
            ? DEFAULT_BLOG_HERO_ALT
            : post.title,
      };

  return {
    title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      locale: "nl_NL",
      title,
      description: post.description,
      url: canonical,
      siteName: "Legal Talents Recruitment",
      publishedTime: post.publishedAt,
      modifiedTime: modified,
      authors: [blogAuthorLabel(post)],
      tags: post.tags,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [socialImage],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = resolveBlogAuthor(post);
  const category = getBlogCategory(post.category);
  const headings = getPostHeadings(post.body);
  const relatedPosts = await getRelatedPosts(post, 3);
  const faqJsonLd = blogFaqSchema(post);
  const heroImage = blogHeroImage(post);
  const heroIsDefault = heroImage === DEFAULT_BLOG_HERO_IMAGE;

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden text-white md:min-h-[60vh]">
        <Image
          src={heroImage}
          alt={heroIsDefault ? DEFAULT_BLOG_HERO_ALT : ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          role={heroIsDefault ? undefined : "presentation"}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/20"
          aria-hidden="true"
        />
        <div className="relative flex min-h-[50vh] items-end md:min-h-[60vh]">
          <SectionShell className="w-full pb-10 pt-8 md:pb-14">
            <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-white">
              / Blog
            </p>
            <div className="mt-5">
              <ArticleBreadcrumbs title={post.title} tone="light" />
            </div>
            <h1 className="mt-5 max-w-[20ch] break-words font-display text-[clamp(2.25rem,4vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
              {post.title}
            </h1>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-[1.5] text-white/85">
              {post.description}
            </p>
            <p className="mt-6 text-sm leading-[1.5] text-white/70">
              {blogAuthorLabel(post)}
              <span aria-hidden="true"> · </span>
              {formatBlogDate(post.publishedAt)}
              <span aria-hidden="true"> · </span>
              {post.readingTime} min lezen
            </p>
          </SectionShell>
        </div>
      </section>

      <section className="bg-background pt-12 pb-16 text-foreground md:pt-20 md:pb-24">
        <SectionShell>
          <div
            className={
              headings.length >= 3
                ? "lg:grid lg:grid-cols-[240px_minmax(0,68ch)] lg:items-start lg:gap-16"
                : ""
            }
          >
            <TableOfContents headings={headings} />

            <div className={headings.length >= 3 ? "mt-8 lg:mt-0" : ""}>
              <article className="max-w-[68ch] space-y-5">
                <MDXRemote
                  source={post.body}
                  components={blogMdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </article>

              <div className="max-w-[68ch]">
                <ArticleFaq items={post.faq} />
                {author ? <AuthorBox author={author} /> : null}

                <section className="mt-16">
                  <SlashPill>/ VERDER</SlashPill>
                  <h2 className="mt-6 font-display text-[24px] font-medium leading-[1.2] tracking-[-0.005em]">
                    {category.audience === "kandidaat"
                      ? "Klaar voor een volgende stap?"
                      : "Talent dat blijft."}
                  </h2>
                  <AudienceCta audience={category.audience} className="mt-6" />
                </section>

                <RelatedPages hrefs={post.relatedPages} />
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="bg-background-secondary py-16 text-foreground md:py-24">
          <SectionShell>
            <SlashPill>/ GERELATEERDE ARTIKELEN</SlashPill>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
            <div className="mt-10">
              <PillButton href="/blogs" variant="secondary">
                Alle artikelen →
              </PillButton>
            </div>
          </SectionShell>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogBreadcrumbSchema(post)),
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
    </>
  );
}
