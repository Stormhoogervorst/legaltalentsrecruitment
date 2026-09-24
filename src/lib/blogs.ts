import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import {
  blogAuthorSlugs,
  getBlogAuthor,
  type BlogAuthor,
} from "@/content/blog-authors";
import {
  blogCategorySlugs,
  getBlogCategory,
} from "@/content/blog-categories";

const blogsDirectory = path.join(process.cwd(), "content", "blogs");
const WORDS_PER_MINUTE = 200;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.legaltalentsrecruitment.nl";
export const DEFAULT_BLOG_HERO_IMAGE = "/foto-lopend.jpg";
export const DEFAULT_BLOG_HERO_ALT = "Juridisch professional onderweg";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Datum moet YYYY-MM-DD zijn");

const optionalIsoDate = z.preprocess(
  (value) => (value === "" || value == null ? undefined : value),
  isoDate.optional(),
);

const optionalSeoTitle = z.preprocess(
  (value) => (value === "" || value == null ? undefined : value),
  z.string().trim().max(60, "seoTitle mag maximaal 60 tekens zijn").optional(),
);

const optionalAsset = z.preprocess(
  (value) => (value === "" || value == null ? undefined : value),
  z.string().trim().min(1).optional(),
);

const blogFrontmatterSchema = z.object({
  title: z.string().trim().min(1, "title is verplicht"),
  description: z.string().trim().min(1, "description is verplicht"),
  seoTitle: optionalSeoTitle,
  publishedAt: isoDate,
  updatedAt: optionalIsoDate,
  category: z.enum(blogCategorySlugs).default("loopbaan"),
  excerpt: z.string().trim().min(1),
  coverImage: optionalAsset,
  coverAlt: optionalAsset,
  image: z.preprocess(
    (value) => (value === "" || value == null ? undefined : value),
    z
      .string()
      .trim()
      .min(1)
      .startsWith("/", "image moet een pad in /public zijn")
      .optional(),
  ),
  draft: z.boolean().default(false),
  author: z.string().trim().min(1, "author is verplicht"),
  tags: z.array(z.string().trim().min(1)).default([]),
  relatedPages: z.array(z.string().startsWith("/")).default([]),
  faq: z
    .array(
      z.object({
        q: z.string().trim().min(1),
        a: z.string().trim().min(1),
      }),
    )
    .default([]),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  readingTime: number;
}

export interface BlogArticle extends BlogPost {
  body: string;
}

export interface BlogHeading {
  id: string;
  title: string;
}

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function getReadingTime(body: string): number {
  return Math.max(1, Math.ceil(countWords(body) / WORDS_PER_MINUTE));
}

function includePost(post: BlogPost): boolean {
  if (!post.draft) return true;
  return process.env.NODE_ENV !== "production";
}

function isMdxArticle(fileName: string): boolean {
  return fileName.endsWith(".mdx") && !fileName.startsWith("_");
}

export function slugifyHeading(title: string): string {
  return title
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPostHeadings(body: string): BlogHeading[] {
  const withoutCode = body.replace(/```[\s\S]*?```/g, "");
  const headings: BlogHeading[] = [];

  for (const line of withoutCode.split(/\r?\n/)) {
    const match = line.match(/^##\s+(?!#)(.+)$/);
    if (!match) continue;

    const title = match[1].trim();
    headings.push({ id: slugifyHeading(title), title });
  }

  return headings;
}

function normalizeFrontmatter(data: unknown): unknown {
  if (!data || typeof data !== "object" || Array.isArray(data)) return data;

  const raw = { ...(data as Record<string, unknown>) };

  if (raw.publishedAt == null && typeof raw.date === "string") {
    raw.publishedAt = raw.date;
  }

  if (raw.tags == null && Array.isArray(raw.keywords)) {
    raw.tags = raw.keywords;
  }

  if (
    (raw.excerpt == null || raw.excerpt === "") &&
    typeof raw.description === "string"
  ) {
    raw.excerpt = raw.description;
  }

  if (Array.isArray(raw.faq)) {
    raw.faq = raw.faq.map((item) => {
      if (!item || typeof item !== "object") return item;
      const row = item as Record<string, unknown>;
      return {
        q: row.q ?? row.question,
        a: row.a ?? row.answer,
      };
    });
  }

  return raw;
}

function parseFrontmatter(data: unknown, slug: string): BlogFrontmatter {
  const parsed = blogFrontmatterSchema.safeParse(normalizeFrontmatter(data));

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join(".") || "frontmatter"}: ${issue.message}`)
      .join("; ");
    throw new Error(`Ongeldige frontmatter in content/blogs/${slug}.mdx — ${details}`);
  }

  return parsed.data;
}

function parseArticle(fileContents: string, slug: string): BlogArticle {
  const { data, content } = matter(fileContents);
  const frontmatter = parseFrontmatter(data, slug);

  return {
    ...frontmatter,
    slug,
    body: content,
    readingTime: getReadingTime(content),
  };
}

function toListItem(article: BlogArticle): BlogPost {
  const { body: _body, ...post } = article;
  return post;
}

async function readArticleFiles(): Promise<BlogArticle[]> {
  const fileNames = await readdir(blogsDirectory);
  const mdxFiles = fileNames.filter(isMdxArticle);

  return Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(blogsDirectory, fileName);
      const fileContents = await readFile(filePath, "utf8");

      return parseArticle(fileContents, slug);
    }),
  );
}

export function formatBlogDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) return value;

  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const articles = await readArticleFiles();

  return articles
    .filter(includePost)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(toListItem);
}

export async function getPostBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = await readFile(filePath, "utf8");
    const article = parseArticle(fileContents, slug);

    return includePost(article) ? article : null;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getRelatedPosts(
  post: BlogPost,
  limit = 3,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const tagSet = new Set(post.tags);

  return posts
    .filter((item) => item.slug !== post.slug)
    .map((item) => ({
      item,
      score:
        (item.category === post.category ? 100 : 0) +
        item.tags.filter((tag) => tagSet.has(tag)).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.item.publishedAt.localeCompare(a.item.publishedAt);
    })
    .slice(0, limit)
    .map(({ item }) => item);
}

const PUBLISHER_NAME = "Legal Talents Recruitment";

export function blogPostingSchema(post: BlogArticle) {
  const canonical = `${SITE_URL}/blogs/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    inLanguage: "nl-NL",
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER_NAME,
      "@id": ORGANIZATION_ID,
    },
  };
}

export function blogBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blogs/${post.slug}`,
      },
    ],
  };
}

export function blogFaqSchema(post: BlogPost) {
  if (post.faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function resolveBlogAuthor(post: BlogPost): BlogAuthor | null {
  if ((blogAuthorSlugs as readonly string[]).includes(post.author)) {
    return getBlogAuthor(post.author);
  }

  return null;
}

export function blogAuthorLabel(post: BlogPost): string {
  return resolveBlogAuthor(post)?.name ?? post.author;
}

export function blogHeroImage(post: Pick<BlogPost, "image">): string {
  return post.image ?? DEFAULT_BLOG_HERO_IMAGE;
}

export function resolveBlogCategoryTitle(category: string): string {
  return getBlogCategory(category).title;
}
