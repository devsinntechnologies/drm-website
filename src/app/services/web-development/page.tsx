import type { Metadata } from "next";
import WebDevelopmentContent from "@/components/services/WebDevelopmentContent";
import JsonLd from "@/components/seo/JsonLd";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import { faqJsonLd, ORGANIZATION_ID, pageMetadata, SITE_URL, type FaqItem } from "@/lib/seo";

const PATH = "/services/web-development";

export const metadata: Metadata = pageMetadata({
  title: "Web Development Services for Businesses | DigiNizam",
  description:
    "DigiNizam web development services: responsive business websites and custom web applications with fast performance, SEO-ready structure and API integrations.",
  path: PATH,
});

// Questions taken from real search suggestions (what is / cost / vs software development / company).
// Answers avoid ranking or speed guarantees (Google: no one can guarantee a ranking).
const faqs: FaqItem[] = [
  {
    q: "What do web development services include?",
    a: "Web development services cover planning, design, front-end and back-end development, testing, launch and ongoing support for a website or web application. DigiNizam builds business websites and custom web applications with responsive design, performance optimization, SEO-ready structure and API integrations.",
  },
  {
    q: "How much does it cost to build a business website?",
    a: "Cost depends on the number of pages, custom features, integrations, content and support needed after launch. A simple business website and a custom web application are priced very differently. DigiNizam reviews your requirements and agrees the scope and price with you before work starts.",
  },
  {
    q: "What is the difference between web development and software development?",
    a: "Web development focuses on websites and applications that run in a browser. Software development is broader and also includes desktop, mobile and back-office systems. DigiNizam offers both web development and custom software development.",
  },
  {
    q: "Will my new website rank on Google?",
    a: "DigiNizam builds sites with technical SEO foundations such as clean page structure, metadata, sitemaps and fast loading, so search engines can crawl and understand them. Rankings also depend on content, competition and authority, so no developer can guarantee a position.",
  },
  {
    q: "Does DigiNizam build websites for clients outside Pakistan?",
    a: "Yes. DigiNizam is based in Lahore, Pakistan, and serves customers globally through an English-language offering. Share your target markets, languages and time-zone needs when you contact the team.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "Web Development",
  serviceType: "Web development",
  description:
    "Business website and custom web application development with responsive design, performance optimization, SEO-ready structure, secure development practices and API integrations.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: "Worldwide",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd(faqs)} />
      <WebDevelopmentContent />
      <SeoFaq
        label="Web development"
        title="Web development questions"
        description="Direct answers to common questions before starting a website or web app project."
        items={faqs}
      />
      <SeoRelatedLinks
        intro="Related DigiNizam services:"
        links={[
          { href: "/services/software-solution", label: "custom software development" },
          { href: "/services/hr-digitalization", label: "HR digitalization and HRIS software" },
          { href: "/industries", label: "industry POS solutions" },
          { href: "/contact", label: "contact the DigiNizam team" },
        ]}
      />
    </>
  );
}
