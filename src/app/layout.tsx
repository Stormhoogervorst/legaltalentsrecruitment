import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";
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
  metadataBase: new URL("https://legaltalentsrecruitment.nl"),
  title: {
    default: "Legal Talents Recruitment",
    template: "%s | Legal Talents Recruitment",
  },
  description:
    "Legal Talents Recruitment verbindt juridische professionals met toonaangevende werkgevers in de juridische sector.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <LenisProvider>
          <main className="min-h-screen">{children}</main>
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
