import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionShell, SlashPill } from "@/components/home/primitives";

const title = "Contact — Legal Talents Recruitment";
const description =
  "Plan een vrijblijvende kennismaking. Vertrouwelijk, persoonlijk, op locatie of digitaal.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title,
    description,
    siteName: "Legal Talents Recruitment",
  },
};

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

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url: "https://legaltalentsrecruitment.nl/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Legal Talents Recruitment",
      email: "storm@legal-talents.nl",
      telephone: "+31 6 85 68 09 98",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sint Annastraat 198-C",
        postalCode: "6531 HZ",
        addressLocality: "Nijmegen",
        addressCountry: "NL",
      },
      sameAs: [
        "https://www.linkedin.com/company/legal-talents-recruitment",
      ],
    },
  };

  return (
    <>
      <section className="bg-background py-16 text-foreground md:py-[120px]">
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <SlashPill>/ CONTACT</SlashPill>
              <h1 className="display-lg mt-8">Even contact?</h1>
              <p className="mt-8 max-w-[480px] text-[18px] leading-[1.5] text-foreground-secondary">
                We reageren binnen 24 uur, meestal sneller. Je bent ook altijd
                welkom voor een kop koffie.
              </p>

              <div className="mt-10 rounded-[16px] bg-background-secondary p-8">
                <p className="text-[18px] font-medium leading-[1.4]">
                  Storm Hoogervorst
                </p>
                <p className="mt-1 text-sm leading-[1.5] text-foreground-muted">
                  Eigenaar & Legal Recruiter
                </p>

                <address className="mt-8 space-y-4 text-sm not-italic leading-[1.6] text-foreground-secondary">
                  <p>
                    <a
                      href="mailto:storm@legal-talents.nl"
                      className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                    >
                      storm@legal-talents.nl
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+31685680998"
                      className="transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                    >
                      +31 6 85 68 09 98
                    </a>
                  </p>
                  <p>
                    Sint Annastraat 198-C
                    <br />
                    6531 HZ Nijmegen
                  </p>
                </address>

                <Link
                  href="https://www.linkedin.com/company/legal-talents-recruitment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium leading-none transition-colors hover:bg-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  <LinkedInIcon />
                  LinkedIn
                </Link>
              </div>

            </div>

            <div className="rounded-[24px] border border-border-light bg-background p-6 sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </SectionShell>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
