import type { Metadata } from "next";
import { cookies } from "next/headers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { GetLeadsConsent } from "@/components/consent/GetLeadsConsent";
import { LenisProvider } from "@/components/providers/LenisProvider";
import {
  CONSENT_COOKIE_NAME,
  GETLEADS_PIXEL_KEY,
  GETLEADS_PIXEL_SRC,
  parseConsentCookie,
} from "@/lib/consent";
import { organizationSchema } from "@/lib/schema";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  display: "swap",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.legaltalentsrecruitment.nl"),
  title: {
    default: "Legal Talents Recruitment",
    template: "%s | Legal Talents Recruitment",
  },
  description:
    "Legal Talents Recruitment verbindt juridische professionals met werkgevers die vooruit willen. Persoonlijke search, no cure no pay.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Legal Talents Recruitment",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialVisitorId = parseConsentCookie(
    cookieStore.get(CONSENT_COOKIE_NAME)?.value,
  );

  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        {initialVisitorId === "granted" ? (
          <script async src={GETLEADS_PIXEL_SRC} data-key={GETLEADS_PIXEL_KEY} />
        ) : null}
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <GetLeadsConsent initialVisitorId={initialVisitorId}>
          <SiteHeader />
          <LenisProvider>
            <main className="min-h-screen">{children}</main>
          </LenisProvider>
          <Footer />
        </GetLeadsConsent>
      </body>
    </html>
  );
}
