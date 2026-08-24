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
};

// @ts-ignore
nextConfig.allowedDevOrigins = ['127.0.0.1', 'localhost'];

export default nextConfig;
