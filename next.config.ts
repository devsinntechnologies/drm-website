import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Old products hub — no dedicated page exists; send visitors to the closest
      // equivalent (per-industry solutions overview).
      {
        source: "/products",
        destination: "/industries",
        permanent: true,
      },
    ];
  },
};

// @ts-ignore
nextConfig.allowedDevOrigins = ['127.0.0.1', 'localhost'];

export default nextConfig;
