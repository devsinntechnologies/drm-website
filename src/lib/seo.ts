import type { Metadata } from "next";

export const SITE_URL = "https://diginizam.com";

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  follow = index,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
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
      images: [
        {
          url: "/og-logo.png",
          width: 1200,
          height: 1200,
          alt: "DigiNizam",
        },
      ],
    },
    twitter: {
      card: "summary",
      images: ["/og-logo.png"],
    },
    robots: { index, follow },
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
  "@id": `${SITE_URL}/#software`,
  name: "DigiNizam",
  applicationCategory: "BusinessApplication",
  url: SITE_URL,
  description:
    "POS software for billing, inventory, sales and daily operations across retail, restaurants and other growing businesses.",
  image: `${SITE_URL}/dn-mark.png`,
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "DigiNizam",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/dn-mark.png`,
      width: 512,
      height: 512,
    },
  },
};
