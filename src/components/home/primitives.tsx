import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SlashPillProps = {
  children: ReactNode;
  variant?: "light" | "slate" | "dark";
  className?: string;
};

export function SlashPill({
  children,
  variant = "light",
  className,
}: SlashPillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-4 py-2 font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em]",
        variant === "light" && "bg-pill-light text-foreground",
        variant === "slate" && "bg-pill-slate text-slate-foreground",
        variant === "dark" && "bg-pill-dark text-dark-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

type PillButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "dark";
};

export function PillButton({
  variant = "primary",
  className,
  children,
  ...props
}: PillButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-medium leading-none transition-[transform,box-shadow] duration-[240ms] ease-flatwhite hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-foreground text-background hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)]",
        variant === "secondary" &&
          "border border-border-strong bg-transparent text-foreground",
        variant === "dark" && "bg-dark-foreground text-dark-background",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function SectionShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("section-shell", className)}>{children}</div>;
}

export function ArrowText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[15px] font-medium leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
