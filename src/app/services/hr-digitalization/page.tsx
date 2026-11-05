import type { Metadata } from "next";
import HrDigitalizationContent from "@/components/services/HrDigitalizationContent";
import JsonLd from "@/components/seo/JsonLd";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import { faqJsonLd, ORGANIZATION_ID, pageMetadata, SITE_URL, type FaqItem } from "@/lib/seo";

const PATH = "/services/hr-digitalization";

export const metadata: Metadata = pageMetadata({
  title: "HRIS & HR Software for Payroll and Attendance | DigiNizam",
  description:
    "DigiNizam HRIS software brings employee records, payroll, attendance, self-service and recruitment into one system for businesses in Pakistan and worldwide.",
  path: PATH,
});

// Questions taken from real search suggestions (what is HRIS / what does HR software do /
// payroll and attendance / cost / HR software in Pakistan). Answers stay within the modules
// shown on the page; local payroll and statutory rules are confirmed per customer.
const faqs: FaqItem[] = [
  {
    q: "What is HRIS software?",
    a: "An HRIS (Human Resource Information System) is software that stores employee records and runs HR processes such as payroll, attendance, leave, performance and recruitment from one central system instead of spreadsheets and paper files.",
  },
  {
    q: "What does HR software do for a business?",
    a: "HR software keeps employee information in one place, tracks attendance and leave, supports payroll calculations and payslips, and lets employees handle requests through self-service. DigiNizam HRIS also covers performance appraisals and recruitment and onboarding.",
  },
  {
    q: "Can DigiNizam HR software manage payroll and attendance together?",
    a: "Yes. DigiNizam HRIS connects attendance, shifts, overtime and leave records with payroll calculations and payslips, so salaries are processed from the same data HR already maintains. Confirm your attendance devices and payroll rules with the team during setup.",
  },
  {
    q: "How much does an HRIS system cost?",
    a: "Cost depends on the number of employees, the modules you need and any attendance devices or systems to connect. DigiNizam reviews your HR requirements first and then agrees the scope and price with you.",
  },
  {
    q: "Is DigiNizam HR software only for businesses in Pakistan?",
    a: "No. DigiNizam HRIS is built with businesses in Pakistan in mind, and DigiNizam serves customers globally through an English-language offering. Payroll and labour rules differ by country, so organizations outside Pakistan should share their local requirements with the team.",
  },
];

// Service schema mirrors only what the page shows (HRIS, payroll, attendance, self-service, hiring).
const hrServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "HR Digitalization",
  serviceType: "HR digitalization and HRIS software",
  description:
    "DigiNizam HRIS software for HR digitalization: employee records, payroll, time and attendance, employee self-service, performance and recruitment workflows.",
  url: `${SITE_URL}${PATH}`,
  provider: { "@id": ORGANIZATION_ID },
};

export default function HRDigitalizationPage() {
  return (
    <>
      <JsonLd data={hrServiceJsonLd} />
      <JsonLd data={faqJsonLd(faqs)} />
      <HrDigitalizationContent />
      <SeoFaq
        label="HR software"
        title="HRIS and HR software questions"
        description="Direct answers to common questions before choosing HR and payroll software."
        items={faqs}
      />
      <SeoRelatedLinks
        intro="Related DigiNizam services:"
        links={[
          { href: "/services/software-solution", label: "custom software development" },
          { href: "/services/web-development", label: "web development services" },
          { href: "/about", label: "about DigiNizam" },
          { href: "/contact", label: "contact the DigiNizam team" },
        ]}
      />
    </>
  );
}
