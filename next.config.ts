import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF eerst (kleinste bestand), WebP als fallback.
    formats: ["image/avif", "image/webp"],
    // Eén kwaliteit: de default van 75. Geen quality-prop meer nodig in de code.
    qualities: [75],
    // Default + 1440 (1x laptop) + 2880 (2x laptop van 1440 css-px), zodat een
    // retina-scherm geen 3840-variant hoeft te laden.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2880, 3840],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
    taint: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "legaltalentsrecruitment.nl",
          },
        ],
        destination: "https://www.legaltalentsrecruitment.nl/:path*",
        permanent: true,
      },
      {
        source: "/vacatures/advocaat-huurrecht-eindhoven",
        destination:
          "/vacatures/advocaat-financieel-en-ondernemingsrecht-eindhoven",
        permanent: true,
      },
      {
        source: "/vacatures/advocaat-huurrecht-senior-eindhoven",
        destination:
          "/vacatures/advocaat-financieel-en-ondernemingsrecht-senior-eindhoven",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
