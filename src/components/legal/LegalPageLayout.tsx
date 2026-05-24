import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { SlashPill } from "@/components/home/primitives";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="bg-background px-5 py-12 text-foreground md:py-24">
      <div className="mx-auto max-w-[760px]">
        <header className="mb-16">
          <SlashPill>{eyebrow}</SlashPill>
          <h1 className="display-md mt-4">{title}</h1>
          <p className="mt-4 text-sm leading-[1.5] text-foreground-muted">
            Laatst bijgewerkt: {lastUpdated}
          </p>
        </header>

        <div className="[&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-6 [&_h2]:mt-16 [&_h2]:font-display [&_h2]:text-[28px] [&_h2]:font-medium [&_h2]:leading-[1.2] [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:font-display [&_h3]:text-[20px] [&_h3]:font-medium [&_li]:mb-2 [&_li]:text-[16px] [&_li]:leading-[1.7] [&_p]:mb-4 [&_p]:text-[16px] [&_p]:leading-[1.7] [&_strong]:font-medium [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>

        <footer className="mt-24 border-t border-border-light pt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm leading-[1.5] text-foreground-secondary transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Terug naar home
          </Link>
        </footer>
      </div>
    </section>
  );
}
