export type BlogCategory = "Restaurant POS" | "Inventory" | "POS Pricing" | "Retail POS" | "Snooker Club Software";

export type InlineLink = {
  href: string;
  label: string;
};

export type ContentBlock =
  | { type: "paragraphs"; paragraphs: string[]; links?: InlineLink[] }
  | { type: "heading"; level: 2 | 3; text: string; id?: string }
  | { type: "jump-links"; title: string; items: InlineLink[] }
  | { type: "link-list"; items: InlineLink[] }
  | { type: "table"; label: string; columns: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string }
  | { type: "ordered-list"; intro?: string; items: string[]; outro?: string; links?: InlineLink[] }
  | { type: "bullet-list"; intro?: string; items: string[]; outro?: string; links?: InlineLink[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | {
      type: "faq-section";
      heading: string;
      items: { question: string; answer: string }[];
      id?: string;
      /** Render each question as an H3 instead of a styled div. */
      questionHeadings?: boolean;
    }
  | {
      type: "cta";
      title: string;
      body: string;
      links?: InlineLink[];
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
  /** Site path (/blog/…) or an absolute URL on an allowed image host. */
  featuredImage: string;
  imageAlt: string;
  seoTitle: string;
  metaDescription: string;
  canonicalPath: string;
  content: ContentBlock[];
};
