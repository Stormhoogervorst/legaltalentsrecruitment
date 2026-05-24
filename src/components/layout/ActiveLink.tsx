"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
};

export function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "text-foreground",
  inactiveClassName = "text-foreground/70 hover:text-foreground",
  onClick,
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${
        isActive ? activeClassName : inactiveClassName
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
