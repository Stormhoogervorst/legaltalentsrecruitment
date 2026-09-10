import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArrowText } from "@/components/home/primitives";
import { getBlogCategory } from "@/content/blog-categories";
import { formatBlogDate, type BlogPost } from "@/lib/blogs";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col rounded-[16px] bg-background-secondary p-6 transition-colors duration-[280ms] ease-flatwhite hover:bg-background-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background md:p-8"
    >
      <article className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
            {getBlogCategory(post.category).title}
          </p>
          <ArrowUpRight
            className="size-5 shrink-0 transition-transform duration-[280ms] ease-flatwhite group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-4 font-display text-[20px] font-medium leading-[1.2] tracking-[-0.005em] md:text-[24px]">
          {post.title}
        </h2>

        <p className="mt-4 line-clamp-2 text-[16px] leading-[1.6] text-foreground-secondary">
          {post.excerpt}
        </p>

        <p className="mt-6 text-sm leading-[1.5] text-foreground-muted">
          {formatBlogDate(post.publishedAt)}
          <span aria-hidden="true"> · </span>
          {post.readingTime} min lezen
        </p>

        <ArrowText className="mt-auto pt-8">
          Lees artikel
          <ArrowUpRight className="size-4" strokeWidth={1.5} />
        </ArrowText>
      </article>
    </Link>
  );
}
