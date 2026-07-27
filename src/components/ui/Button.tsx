import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className = "", ...props }: ButtonProps) {
  const baseClasses = "bg-royal hover:bg-royal/90 text-white font-black text-sm px-8 py-4 rounded-xl transition-all shadow-lg shadow-royal/30 uppercase tracking-wider flex items-center justify-center gap-2";
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
