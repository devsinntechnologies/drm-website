import type { Metadata } from "next";
import SoftwareSolutionContent from "@/components/services/SoftwareSolutionContent";
import JsonLd from "@/components/seo/JsonLd";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import { faqJsonLd, ORGANIZATION_ID, pageMetadata, SITE_URL, type FaqItem } from "@/lib/seo";

const PATH = "/services/software-solution";

export const metadata: Metadata = pageMetadata({
  title: "Custom Software Development Services | DigiNizam",
  description:
    "DigiNizam builds custom software for businesses worldwide: web and mobile apps, workflow automation, system integration, cloud deployment and reporting dashboards.",
  path: PATH,
});

// Questions taken from real search suggestions (what is / vs off-the-shelf / cost / company).
// Answers describe the service shown on the page; no prices, timelines or guarantees are promised.
const faqs: FaqItem[] = [
  {
    q: "What is custom software development?",
    a: "Custom software development is the process of designing, building and maintaining software for one organization's specific workflows, instead of buying a ready-made product. It usually covers requirements, design, development, testing, deployment and ongoing support.",
  },
  {
    q: "Custom software or off-the-shelf software: which is better?",
    a: "Off-the-shelf software is faster to start with when it already fits your process. Custom software makes sense when your workflows, integrations or reporting needs are not covered by an existing product. DigiNizam offers both: ready POS and business management software, and custom development for requirements it does not cover.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Cost depends on the number of features, users and integrations, the platforms involved (web, mobile or both) and the support needed after launch. DigiNizam reviews your requirements first and then agrees the scope and price with you.",
  },
  {
    q: "Does DigiNizam develop software for clients outside Pakistan?",
    a: "Yes. DigiNizam is based in Lahore, Pakistan, and serves customers globally through an English-language offering. Share your location, preferred communication channels and time-zone needs when you contact the team.",
  },
  {
    q: "How do I start a custom software project with DigiNizam?",
    a: "Contact the team with a short description of your business, the process you want to digitize, who will use the system and any software it must connect with. DigiNizam will review the requirements with you before agreeing the next steps.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "Custom Software Development",
  serviceType: "Custom software development",
  description:
    "Custom web and mobile application development, workflow digitization, system integration, cloud deployment, UI/UX design and reporting dashboards.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: "Worldwide",
};

export default function SoftwareSolutionPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd(faqs)} />
      <SoftwareSolutionContent />
      <SeoFaq
        label="Custom software"
        title="Custom software development questions"
        description="Direct answers to common questions before starting a software project."
        items={faqs}
      />
      <SeoRelatedLinks
        intro="Related DigiNizam services:"
        links={[
          { href: "/services/web-development", label: "web development services" },
          { href: "/services/hr-digitalization", label: "HR digitalization and HRIS software" },
          { href: "/features", label: "ready-made POS and business management features" },
          { href: "/contact", label: "contact the DigiNizam team" },
        ]}
      />
    </>
  );
}
