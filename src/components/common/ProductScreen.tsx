"use client";

import React from "react";
import Image from "next/image";

export type ProductScreenProps = {
  src: string;
  alt: string;
  /** Browser chrome label — only used when variant is "browser" */
  title?: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  /**
   * showcase — product / POS hardware, clean stage (hero)
   * browser — app window frame for dashboard screenshots
   */
  variant?: "showcase" | "browser";
};

export default function ProductScreen({
  src,
  alt,
  title = "DigiNizam POS",
  className = "",
  priority = false,
  fit = "contain",
  variant = "showcase",
}: ProductScreenProps) {
  const fitClass = fit === "cover" ? "object-cover object-top" : "object-contain object-center";

  if (variant === "browser") {
    return (
      <div className={`w-full ${className}`}>
        <div className="rounded-xl border border-white/10 bg-[#0c1a30] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.03]">
            <div className="flex gap-1.5 shrink-0" aria-hidden>
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            </div>
            <span className="text-[11px] font-medium text-white/45 truncate">{title}</span>
          </div>
          <div className="relative aspect-[16/10] bg-[#08162D]">
            <Image
              src={src}
              alt={alt}
              fill
              className={fitClass}
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[70%] rounded-full bg-primary/20 blur-[72px] pointer-events-none" />

      <div className="relative w-full min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className={`w-full h-auto ${fitClass} drop-shadow-[0_20px_48px_rgba(0,0,0,0.4)]`}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </div>
    </div>
  );
}
