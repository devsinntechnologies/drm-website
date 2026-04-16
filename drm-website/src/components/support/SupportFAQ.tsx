"use client";
import React, { useState } from 'react';

const SupportFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Does DRM Provide 24/7 Support to Its Clients?" },
    { q: "Does DRM Offer Live Support Services?" },
    { q: "Does DRM Offer Ticketing System Services?" },
    { q: "How Can I Contact the DRM Support Team?" },
    { q: "Is There AI-Based Customer Assistance in DRM?" },
    { q: "How Do I Learn To Get My DRM Running?" },
    { q: "What Training Service Do You Get At DRM?" },
    { q: "Does DRM Offer Different Packages?" },
    { q: "What Do You Mean By DRM Training?" },
    { q: "What Are The DRM Related Common Issues?" }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface/20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#1a2b4b] dark:text-gray-100">Frequently Asked Questions</span> <span className="text-[#e26b48]">FAQ</span>
        </h2>
        <p className="text-muted mb-12">
          Our support team will get assistance from AI-powered suggestions, making it quicker than ever
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-surface glass-card border border-surface-border text-left hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(i)}
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <span className="text-muted text-xl font-light w-4 text-center">
                    {openIndex === i ? '-' : '+'}
                  </span>
                  <span className="font-semibold text-foreground/80">{faq.q}</span>
                </div>
              </div>
              {openIndex === i && (
                <div className="px-5 pb-5 pl-12 text-muted text-sm border-t border-surface-border/50 pt-4">
                  Yes! We provide robust solutions and support for this query. You can find out more by reaching out to our dedicated support channels or reading the extended documentation on our portal.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default SupportFAQ;
