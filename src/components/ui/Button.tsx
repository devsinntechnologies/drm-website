import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg" | "sm";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-sm",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[var(--shadow-btn)] border border-transparent",
  secondary:
    "bg-surface text-foreground border border-surface-border hover:border-primary/40 hover:bg-primary/5 shadow-sm",
};

function isExternalHref(href: string) {
  return /^(https?:|tel:|mailto:|#)/i.test(href);
}

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-semibold tracking-wide",
    "transition-all duration-200 ease-out active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]",
    "disabled:opacity-50 disabled:pointer-events-none",
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes} aria-disabled={disabled || undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-disabled={disabled || undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
