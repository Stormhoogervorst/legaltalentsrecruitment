import Link from "next/link";

export function ArticleBreadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-[1.5] text-foreground-muted">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <Link
            href="/blogs"
            className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Blog
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li className="text-foreground" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}
