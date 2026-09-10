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
  blogPostingSchema,
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
  const author = resolveBlogAuthor(post);
  const socialImage = {
    url: post.coverImage,
    width: 1200,
    height: 630,
    alt: post.coverAlt,
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
      authors: [author.name],
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
  const showUpdated =
    Boolean(post.updatedAt) && post.updatedAt !== post.publishedAt;
  const faqJsonLd = blogFaqSchema(post);

  return (
    <>
      <section className="bg-background pt-16 pb-8 text-foreground md:pt-[120px] md:pb-12">
        <SectionShell className="max-w-[920px]">
          <ArticleBreadcrumbs title={post.title} />

          <div className="mt-10">
            <SlashPill>/ {category.title}</SlashPill>
            <h1 className="mt-6 break-words hyphens-auto font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-[68ch] text-[18px] leading-[1.5] text-foreground-secondary">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={author.image}
                alt={`Portretfoto van ${author.name}`}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium leading-[1.4]">{author.name}</p>
                <p className="text-sm leading-[1.4] text-foreground-muted">
                  {author.role}
                </p>
              </div>
            </div>
            <p className="text-sm leading-[1.5] text-foreground-muted">
              {formatBlogDate(post.publishedAt)}
              {showUpdated ? (
                <>
                  <span aria-hidden="true"> · </span>
                  Bijgewerkt op {formatBlogDate(post.updatedAt!)}
                </>
              ) : null}
              <span aria-hidden="true"> · </span>
              {post.readingTime} min lezen
            </p>
          </div>

          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            width={1200}
            height={630}
            priority
            sizes="(min-width: 920px) 920px, 100vw"
            className="mt-10 h-auto w-full rounded-[16px]"
          />
        </SectionShell>
      </section>

      <section className="bg-background pt-8 pb-16 text-foreground md:pt-12 md:pb-24">
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
                <AuthorBox author={author} />

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
