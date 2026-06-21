import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
