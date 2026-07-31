import React from 'react';
import Link from 'next/link';

export default function ComingSoon({ pageName = "Page" }: { pageName?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6 bg-[#08162D]/5 py-6">
      
      {/* Special Animated Icon Badge */}
      <div className="relative mb-4">
        <div className="absolute inset-0 rounded-2xl bg-[#0055FF]/20 animate-ping"></div>
        <div className="relative w-16 h-16 bg-white border border-[#0055FF]/30 rounded-2xl flex items-center justify-center shadow-md shadow-[#0055FF]/10 text-[#0055FF]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
      </div>

      {/* Subtitle Tag */}
      <span className="text-[#0055FF] font-bold text-[11px] tracking-widest uppercase mb-1">
        In Development Phase
      </span>

      {/* Heading */}
      <h1 className="text-[#08162D] text-2xl md:text-3xl font-black mb-2 tracking-tight">
        {pageName}
      </h1>

      {/* Description */}
      <p className="text-gray-500 mb-6 max-w-sm font-medium text-xs md:text-sm">
        We are engineering a masterpiece for this space. Check back shortly for the grand reveal.
      </p>

      {/* Special Minimalist Progress Indicator */}
      <div className="flex items-center gap-3 mb-6 bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0055FF]"></span>
          <span className="text-xs font-bold text-[#08162D]">Concept</span>
        </div>
        <span className="w-4 h-[1px] bg-gray-300"></span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0055FF] animate-pulse"></span>
          <span className="text-xs font-bold text-[#0055FF]">Building</span>
        </div>
        <span className="w-4 h-[1px] bg-gray-300"></span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="text-xs font-medium text-gray-400">Launch</span>
        </div>
      </div>

      {/* Return Button */}
      <Link 
        href="/" 
        className="bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg shadow-[#0055FF]/25 transition-all text-center"
      >
        Return to Homepage
      </Link>
    </div>
  );
}