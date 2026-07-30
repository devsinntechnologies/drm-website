"use client";

import React from "react";

export const ReadyToGetStartedSection: React.FC = () => {
  return (
    <section className="py-8 bg-[#08162D] text-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          Ready to get started?
        </h2>
        <p className="text-sm md:text-base text-[#FFFFFF]/70 max-w-2xl mx-auto font-medium mb-8">
          Contact our team today to deploy the ultimate restaurant and POS management framework.
        </p>
        <button className="bg-[#0055FF] hover:bg-[#0040cc] text-[#FFFFFF] font-black text-xs uppercase tracking-widest px-10 py-4 rounded-xl shadow-xl transition-all">
          GET FREE DEMO TODAY
        </button>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;