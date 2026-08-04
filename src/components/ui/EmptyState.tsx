import React from "react";
import Button from "@/components/ui/Button";

interface EmptyStateProps {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  children?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  eyebrow = "Coming soon",
  icon,
  primaryAction,
  secondaryAction,
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6 py-12 bg-background">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-surface border border-surface-border rounded-2xl flex items-center justify-center shadow-[var(--shadow-card)] text-primary">
          {icon ?? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          )}
        </div>
      </div>

      <span className="section-label mb-3">{eyebrow}</span>

      <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3 max-w-lg">
        {title}
      </h1>

      <p className="text-muted mb-8 max-w-md text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {children}

      {(primaryAction || secondaryAction) && (
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {primaryAction && (
            <Button href={primaryAction.href} variant="primary" size="md">
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button href={secondaryAction.href} variant="secondary" size="md">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
