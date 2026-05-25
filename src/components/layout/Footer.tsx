import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Vacatures", href: "/vacatures" },
  { label: "Voor Kandidaten", href: "/voor-kandidaten" },
  { label: "Voor Opdrachtgevers", href: "/voor-opdrachtgevers" },
  { label: "Over Ons", href: "/over-ons" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
];

function LinkedInIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1Zm7.2 0h4.2v2.03h.06c.58-1.1 2-2.26 4.13-2.26 4.42 0 5.23 2.91 5.23 6.69V23h-4.39v-7.49c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V23H7.5V8.1Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-12">
        <section aria-labelledby="footer-company">
          <Link
            href="/"
            className="inline-flex size-14 shrink-0 items-center justify-center transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Legal Talents home"
          >
            <Image
              src="/logo lt.svg"
              alt="Legal Talents Recruitment"
              width={56}
              height={56}
              className="block size-full object-contain"
            />
          </Link>
          <h2 id="footer-company" className="sr-only">
            Bedrijf
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/70">
            Legal Talents Recruitment verbindt juridische professionals met
            werkgevers die vooruit willen.
          </p>
          <nav className="mt-6" aria-label="Sociale media">
            <Link
              href="https://www.linkedin.com/company/legal-talents-recruitment"
              className="inline-flex size-10 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Legal Talents Recruitment op LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </nav>
        </section>

        <nav aria-label="Snelle links">
          <h2
            id="footer-quick-links"
            className="text-sm font-semibold text-foreground"
          >
            Snelle links
          </h2>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact">
          <h2
            id="footer-contact"
            className="text-sm font-semibold text-foreground"
          >
            Contact
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-foreground/70">
            <p>Sint Annastraat 198-C, 6531 HZ Nijmegen</p>
            <p>
              <a
                href="tel:+31685680998"
                className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                +31 6 85 68 09 98
              </a>
            </p>
            <p>
              <a
                href="mailto:storm@legal-talents.nl"
                className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                storm@legal-talents.nl
              </a>
            </p>
          </address>
        </section>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-foreground/60 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>&copy; {currentYear} Legal Talents Recruitment</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
            <span>KvK 98803093</span>
            <span>BTW NL868649818B01</span>
            <nav
              className="flex flex-wrap gap-x-5 gap-y-2"
              aria-label="Juridische links"
            >
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
