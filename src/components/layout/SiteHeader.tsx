"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";

function isBlogArticlePath(pathname: string) {
  return /^\/blogs\/[^/]+$/.test(pathname);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <Header variant={isBlogArticlePath(pathname) ? "transparent" : "default"} />
  );
}
