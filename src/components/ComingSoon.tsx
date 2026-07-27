import React from "react";
import Button from "./ui/Button";

interface ComingSoonProps {
  pageName: string;
}

export default function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full text-center space-y-8 bg-navy/5 p-12 rounded-xl border border-navy/10">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-4 py-2 rounded-xl">
          Under Construction
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-navy">
          {pageName}
        </h1>
        <p className="text-navy/60 font-medium">
          We are currently working hard to bring you this page. Please check back later or explore our other solutions in the meantime.
        </p>
        <div className="flex justify-center pt-4">
          <Button href="/">Return to Home</Button>
        </div>
      </div>
    </div>
  );
}
