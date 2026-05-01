"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect only the information necessary to operate and improve our restaurant management platform. This may include business details, employee accounts, order records, payment activity, inventory data, and customer interaction information generated through your use of the platform.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to deliver core platform functionality, improve operational performance, provide analytics and reporting, process transactions, maintain security, and offer customer support. We use aggregated insights to enhance system performance and user experience.",
  },
  {
    title: "Data Protection & Security",
    content:
      "We implement industry-standard security practices to protect your data from unauthorized access, disclosure, or misuse. All sensitive information is encrypted during transmission and securely stored using enterprise-grade infrastructure with continuous monitoring and backup systems.",
  },
  {
    title: "Third-Party Services",
    content:
      "Certain features may integrate with trusted third-party services such as payment gateways, cloud hosting providers, analytics tools, or communication services. These providers are carefully selected and are required to maintain strong security and confidentiality standards.",
  },
  {
    title: "Data Retention",
    content:
      "We retain information only for as long as necessary to fulfill operational, legal, and business requirements. When data is no longer required, it is securely deleted or anonymized according to industry best practices.",
  },
  {
    title: "Your Privacy Rights",
    content:
      "You maintain control over your business data. Depending on your region and applicable laws, you may request access, correction, export, or deletion of your information. Our team is committed to handling such requests transparently and efficiently.",
  },
  {
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy periodically to reflect improvements, legal requirements, or platform changes. Significant updates will be communicated through the platform or official communication channels.",
  },
];

const PrivacyContent = () => {
  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-tr from-red-200 via-orange-100 to-orange-100">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/40 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-red-300/40 bg-white/40 backdrop-blur-md text-sm font-semibold tracking-wide text-red-600 shadow-sm">
            Security & Transparency
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
            Privacy <span className="text-red-500">Policy</span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Your trust matters to us. This Privacy Policy explains how we
            collect, use, protect, and manage your information while delivering
            a secure and reliable restaurant management experience.
          </p>
        </motion.div>

        {/* Policy Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/40 backdrop-blur-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-100/20 to-orange-100/20" />

              <div className="relative">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 to-orange-300 flex items-center justify-center shadow-md">
                  <span className="text-white font-black text-lg">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-5">
                  {section.title}
                </h3>

                <p className="text-gray-700 leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyContent;