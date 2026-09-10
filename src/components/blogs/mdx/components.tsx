import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Callout } from "@/components/blogs/mdx/Callout";
import { CtaBlock } from "@/components/blogs/mdx/CtaBlock";
import { slugifyHeading } from "@/lib/blogs";

function headingText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (!node || typeof node !== "object") return "";

  if (Array.isArray(node)) {
    return node.map(headingText).join("");
  }

  if (
    "props" in node &&
    node.props &&
    typeof node.props === "object" &&
    "children" in node.props
  ) {
    return headingText(node.props.children as ReactNode);
  }

  return "";
}

function MdxLink({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  const className =
    "underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-accent";

  if (href?.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener"
      className={className}
    >
      {children}
    </a>
  );
}

function MdxImage({
  src,
  alt,
  width,
  height,
}: ComponentPropsWithoutRef<"img">) {
  if (!src || typeof src !== "string") return null;

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={Number(width) || 1200}
      height={Number(height) || 630}
      sizes="(min-width: 768px) 680px, 100vw"
      className="my-8 h-auto w-full rounded-[16px]"
    />
  );
}

export const blogMdxComponents = {
  Callout,
  CtaBlock,
  h2: ({ children }: { children?: ReactNode }) => {
    const id = slugifyHeading(headingText(children));

    return (
      <h2
        id={id}
        className="display-h3 scroll-mt-28 pt-10 text-foreground first:pt-0"
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="scroll-mt-28 pt-6 font-display text-[22px] font-medium leading-[1.25] tracking-[-0.005em] text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-[17px] leading-[1.75] text-foreground-secondary">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc space-y-3 pl-5 text-[17px] leading-[1.7] text-foreground-secondary">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal space-y-3 pl-5 text-[17px] leading-[1.7] text-foreground-secondary">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="pl-1">{children}</li>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-medium text-foreground">{children}</strong>
  ),
  em: ({ children }: { children?: ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="my-8 border-l-2 border-foreground pl-5 text-[17px] leading-[1.7] text-foreground-secondary italic">
      {children}
    </blockquote>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[15px] leading-[1.6] text-foreground-secondary">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children?: ReactNode }) => (
    <thead className="border-b border-border-strong text-foreground">
      {children}
    </thead>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="px-3 py-3 font-medium">{children}</th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border-b border-border-light px-3 py-3">{children}</td>
  ),
  a: MdxLink,
  img: MdxImage,
};
