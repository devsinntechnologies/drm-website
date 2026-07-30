import React from 'react';
import Link from 'next/link';

export default function ComingSoon({ pageName = "Page" }: { pageName?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-6 bg-[#08162D]/5 py-8">
      <div className="w-20 h-20 bg-[#0055FF]/10 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-[#0055FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-[#08162D] mb-4">
        {pageName} is Coming Soon
      </h1>
      <p className="text-gray-500 mb-8 max-w-md font-medium text-sm md:text-base">
        We are currently refining this experience. Our team is working hard to bring you something amazing very soon.
      </p>
      <Link 
        href="/" 
        className="bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-lg shadow-[#0055FF]/25 transition-all text-center"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
