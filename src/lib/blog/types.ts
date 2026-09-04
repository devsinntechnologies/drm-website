export type BlogCategory = "Restaurant POS" | "Inventory" | "POS Pricing";

export type InlineLink = {
  href: string;
  label: string;
};

export type ContentBlock =
  | { type: "paragraphs"; paragraphs: string[]; links?: InlineLink[] }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "ordered-list"; intro?: string; items: string[]; outro?: string }
  | { type: "bullet-list"; intro?: string; items: string[]; outro?: string; links?: InlineLink[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "faq-section"; heading: string; items: { question: string; answer: string }[] }
  | {
      type: "cta";
      title: string;
      body: string;
      buttonLabel: string;
      href: string;
      secondaryButtonLabel?: string;
      secondaryHref?: string;
    };

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string; // ISO 8601 with timezone
  modifiedAt: string;
  readTime: string;
  featuredImage: string;
  imageAlt: string;
  seoTitle: string;
  metaDescription: string;
  canonicalPath: string;
  content: ContentBlock[];
};
