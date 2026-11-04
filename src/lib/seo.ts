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

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;

/** Public profiles linked from the site footer. Keep in sync with Footer.tsx. */
const SAME_AS = [
  "https://www.facebook.com/diginizamofficial",
  "https://www.instagram.com/digi_nizam/",
  "https://x.com/rmsdevsinn",
  "https://www.linkedin.com/company/diginizam-devsinn/",
  "https://www.youtube.com/@DigiNizam",
];

/**
 * Site-wide entity graph. Only facts shown on the site are included:
 * office city (Contact page), phone/email (Contact page) and the
 * English-language global offering (About page). No ratings, prices, offers or
 * support hours (the Contact page hours and the 24/7 support claim still need
 * owner reconciliation).
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "DigiNizam",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/dn-mark.png`,
        width: 512,
        height: 512,
      },
      description:
        "DigiNizam provides POS, inventory and business management software for retail stores, restaurants, pharmacies, snooker clubs and other businesses, serving customers globally through an English-language offering.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+92-328-4602903",
        email: "diginizam0@gmail.com",
        availableLanguage: "English",
      },
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "DigiNizam",
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "SoftwareApplication",
      "@id": SOFTWARE_ID,
      name: "DigiNizam",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Point of sale and business management software",
      url: SITE_URL,
      description:
        "POS and business management software that connects billing, inventory, purchasing, sales and reports for retail, restaurants and other growing businesses.",
      image: `${SITE_URL}/dn-mark.png`,
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};
