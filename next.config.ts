import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline the (small, Tailwind) stylesheet into the HTML so it is not a
  // render-blocking request (PageSpeed: ~640 ms on mobile). Production-only.
  experimental: {
    inlineCss: true,
  },
  images: {
    // 75 is the default; 90 keeps on-screen UI text sharp in product shots (hero).
    qualities: [75, 90],
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
      // Regional blog articles replaced by global English editions (Nov 2026).
      // Keep these permanently so old links and search results keep working.
      {
        source: "/blog/best-pos-software-for-restaurants-in-pakistan",
        destination: "/blog/how-to-choose-restaurant-pos-software",
        permanent: true,
      },
      {
        source: "/blog/pos-software-price-in-pakistan",
        destination: "/blog/pos-software-pricing-guide",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-best-retail-pos-software-pakistan",
        destination: "/blog/how-to-choose-retail-pos-software",
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
