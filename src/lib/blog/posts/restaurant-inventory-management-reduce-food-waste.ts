import type { BlogPost } from "../types";

/** First live publish date for Blog 2 (Asia/Karachi). */
const PUBLISHED_AT = "2026-08-20T10:00:00+05:00";

/** Global English rewrite. Set to the day this update goes live. */
const MODIFIED_AT = "2026-11-04T10:00:00+05:00";

export const blog2: BlogPost = {
  slug: "restaurant-inventory-management-reduce-food-waste",
  category: "Inventory",
  title: "How to Manage Restaurant Inventory and Reduce Food Waste",
  excerpt:
    "Build a restaurant stock routine for receiving, counts, purchasing and waste logs. Learn how to investigate ingredient differences without guessing.",
  author: "DigiNizam Team",
  publishedAt: PUBLISHED_AT,
  modifiedAt: MODIFIED_AT,
  readTime: "4 min read",
  featuredImage: "/blog/restaurant-ingredient-stock-check.webp",
  imageAlt: "Restaurant manager checking ingredient stock on a clipboard in a kitchen storeroom",
  seoTitle: "Restaurant Inventory Management: Reduce Food Waste",
  metaDescription:
    "Build a restaurant stock routine for receiving, counts, purchasing and waste logs. Learn how to investigate ingredient differences without guessing.",
  canonicalPath: "/blog/restaurant-inventory-management-reduce-food-waste",
  content: [
    {
      type: "paragraphs",
      paragraphs: [
        "Restaurant inventory management tracks ingredients and supplies from receiving to use, transfer or disposal. A useful routine connects physical counts with purchasing and waste records so the team can identify recurring over-ordering or losses. Software can support records, but purchasing, storage and preparation decisions still need human review.",
      ],
    },
    { type: "heading", level: 2, text: "Start with a repeatable receiving and count routine" },
    {
      type: "paragraphs",
      paragraphs: [
        "Keep an item list with consistent units: kilograms, litres or individual units, for example. Record what actually arrives, including rejected or missing goods, rather than copying every quantity from the supplier invoice.",
        "Count at a consistent stage of operations and include stock in each relevant storage area. If a delivery or transfer happens during the count, note it so the comparison uses the same cut-off point.",
      ],
    },
    { type: "heading", level: 2, text: "Understand usage before treating it as waste" },
    {
      type: "paragraphs",
      paragraphs: [
        "Imagine a kitchen begins with 10 kg of one ingredient, receives 5 kg and closes with 4 kg. With no transfers, the quantity leaving stock is 11 kg. That number can include prepared meals, recorded waste and other use; it does not mean 11 kg was wasted.",
        "Separate spoiled ingredients, preparation loss, overproduction and plate leftovers in the waste log. A sales-to-ingredient comparison needs dependable portion or recipe data. Do not assume a POS bill automatically establishes ingredient consumption.",
      ],
    },
    { type: "heading", level: 2, text: "Record enough detail to act" },
    {
      type: "paragraphs",
      paragraphs: [
        "An original example waste-log entry might read: Tuesday lunch; chopped vegetables; 1 kg; over-prepared; preparation station; next action: review the next comparable lunch batch.",
        "Choose a consistent measuring method. Compare similar service periods and account for changes in covers or menu. A lower total after a quiet shift is not by itself evidence of a better process.",
        "EPA's food-service resources include paper waste logs and assessment tools. Start with a method staff will consistently use before deciding whether additional software is needed.",
      ],
    },
    { type: "heading", level: 2, text: "Turn the log into a purchasing decision" },
    {
      type: "paragraphs",
      paragraphs: [
        "Before the next order, review usable stock, confirmed deliveries and expected demand. Investigate items repeatedly discarded or left unused. Make a small, documented adjustment to purchasing or preparation and compare the next relevant periods.",
        "Stock rotation and date labels should support the kitchen's food-safety procedures. Follow applicable local requirements and supplier instructions. Never extend a use-by limit to reduce reported waste.",
      ],
    },
    { type: "heading", level: 2, text: "What should restaurant software demonstrate?" },
    {
      type: "paragraphs",
      paragraphs: [
        "Ask how the chosen system records receiving, units, adjustments and stock review. If you need expiry fields, ingredient deduction or recipe costing, request a demonstration rather than assuming these functions are included.",
      ],
    },
    {
      type: "faq-section",
      heading: "Frequently asked questions",
      questionHeadings: true,
      items: [
        {
          question: "Is ingredient usage the same as food waste?",
          answer:
            "No. Usage includes ingredients used in food that was sold or served. A waste log separately records discarded food and its reason.",
        },
        {
          question: "Do we need software to start measuring waste?",
          answer:
            "No. A consistent paper or spreadsheet log can establish a baseline. Assess software after the team understands what it needs to record and review.",
        },
        {
          question: "Will inventory software guarantee lower food costs?",
          answer:
            "No. Purchasing, portioning, demand and record quality all affect outcomes. Measure changes using comparable periods instead of relying on a promised savings percentage.",
        },
      ],
    },
    {
      type: "cta",
      title: "Review the records your restaurant needs",
      body: "Explore DigiNizam's restaurant software and book a demo with your receiving and stock examples. For order entry and billing, read the restaurant POS guide.",
      links: [
        { href: "/products/restaurant", label: "DigiNizam's restaurant software" },
        { href: "/demo", label: "book a demo" },
        { href: "/blog/what-is-a-restaurant-pos-system", label: "restaurant POS guide" },
      ],
      buttonLabel: "Book a demo",
      href: "/demo",
    },
  ],
};
