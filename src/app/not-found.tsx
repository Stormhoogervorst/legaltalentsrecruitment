import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SlashPill } from "@/components/home/primitives";

export const metadata: Metadata = {
  title: "Pagina niet gevonden — Legal Talents Recruitment",
  robots: {
    index: false,
    follow: false,
  },
};

const quickLinks = [
  {
    index: "/ 001",
    title: "Vacatures",
    body: "Bekijk actuele juridische posities",
    href: "/vacatures",
  },
  {
    index: "/ 002",
    title: "Voor opdrachtgevers",
    body: "Werving & selectie van juridisch talent",
    href: "/voor-opdrachtgevers",
  },
  {
    index: "/ 003",
    title: "Voor kandidaten",
    body: "Persoonlijke loopbaanbegeleiding",
    href: "/voor-kandidaten",
  },
  {
    index: "/ 004",
    title: "Contact",
    body: "Plan een vrijblijvend gesprek",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <section className="bg-background py-[160px] text-foreground">
      <div className="mx-auto max-w-[640px] px-5 text-center md:px-0">
        <SlashPill>/ 404</SlashPill>

        <h1 className="display-lg mt-8">Deze pagina / bestaat niet.</h1>

        <p className="mx-auto mt-6 max-w-[480px] text-[18px] leading-[1.6] text-foreground-muted">
          De link die je volgde is verbroken of de pagina is verplaatst. Geen
          zorgen — hieronder vind je waar je waarschijnlijk naar zocht.
        </p>

        <div className="mt-12 grid gap-4 text-left md:grid-cols-2">
          {quickLinks.map((item) => (
            <Link
              key={item.index}
              href={item.href}
              className="group block rounded-[16px] bg-background-secondary p-6 transition-colors duration-[280ms] ease-flatwhite hover:bg-background-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <article>
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
                    {item.index}
                  </p>
                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform duration-[280ms] ease-flatwhite group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 font-display text-[20px] font-medium leading-[1.25] tracking-[-0.005em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.5] text-foreground-muted">
                  {item.body}
                </p>
              </article>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-sm leading-[1.5] text-foreground-muted">
          Klopt er iets niet? Mail ons via storm@legal-talents.nl
        </p>
      </div>
    </section>
  );
}
