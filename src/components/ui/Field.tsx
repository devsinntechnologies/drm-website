import React from "react";

const labelClasses =
  "block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5";

const controlBase =
  "w-full bg-surface border border-surface-border text-foreground rounded-[var(--radius-input)] px-4 py-3 text-sm font-medium transition-all duration-200 placeholder:text-muted/70 focus:border-primary focus:shadow-[var(--focus-ring)] outline-none disabled:opacity-50";

const errorControl = "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.25)]";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", children, ...props }: LabelProps) {
  return (
    <label className={`${labelClasses} ${className}`} {...props}>
      {children}
    </label>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function Input({ className = "", error, ...props }: InputProps) {
  return (
    <input
      className={`${controlBase} ${error ? errorControl : ""} ${className}`}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export function Textarea({ className = "", error, ...props }: TextareaProps) {
  return (
    <textarea
      className={`${controlBase} resize-none ${error ? errorControl : ""} ${className}`}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
};

export function Select({ className = "", error, children, ...props }: SelectProps) {
  return (
    <select
      className={`${controlBase} ${error ? errorControl : ""} ${className}`}
      aria-invalid={error || undefined}
      {...props}
    >
      {children}
    </select>
  );
}

export function FieldError({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-500">{children}</p>;
}

export function FieldSuccess({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs font-medium text-emerald-600">{children}</p>;
}
