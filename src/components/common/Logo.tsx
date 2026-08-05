import React from "react";
import Image from "next/image";

/** Official brand mark — source: public/Group 15.svg */
export const BRAND_LOGO_SRC = "/Group%2015.svg";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-9 sm:h-10 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src={BRAND_LOGO_SRC}
      alt="DigiNizam by Devsinn"
      width={1337}
      height={307}
      priority={priority}
      className={`object-contain object-left ${className}`}
      style={{ width: "auto", maxWidth: "min(220px, 52vw)" }}
    />
  );
}
