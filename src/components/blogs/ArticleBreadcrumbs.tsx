import Link from "next/link";

export function ArticleBreadcrumbs({
  title,
  tone = "default",
}: {
  title: string;
  tone?: "default" | "light";
}) {
  const light = tone === "light";
  const linkClass = light
    ? "text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    : "transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2";

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={
          light
            ? "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-[1.5] text-white/70"
            : "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-[1.5] text-foreground-muted"
        }
      >
        <li>
          <Link href="/" className={linkClass}>
            Home
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <Link href="/blogs" className={linkClass}>
            Blog
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li
          className={light ? "text-white" : "text-foreground"}
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </nav>
  );
}
