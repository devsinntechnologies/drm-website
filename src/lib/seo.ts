import type { Metadata } from "next";

export const SITE_URL = "https://diginizam.com";

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "DigiNizam",
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export type FaqItem = { q: string; a: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DigiNizam",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, Windows",
  url: SITE_URL,
  description:
    "POS software in Pakistan for billing, inventory, orders and daily operations.",
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/pricing`,
    availability: "https://schema.org/InStock",
  },
};
