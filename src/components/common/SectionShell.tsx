import React from "react";

type SectionTone = "surface" | "background" | "navy";

const toneClasses: Record<SectionTone, string> = {
  surface: "bg-surface",
  background: "bg-background",
  navy: "bg-navy text-white",
};

export default function SectionShell({
  children,
  tone = "surface",
  className = "",
  glow = false,
  divider = true,
}: {
  children: React.ReactNode;
  tone?: SectionTone;
  className?: string;
  glow?: boolean;
  divider?: boolean;
}) {
  const edgeClass =
    divider && tone !== "navy"
      ? "section-soft-edge"
      : divider && tone === "navy"
        ? "section-soft-edge section-soft-edge--dark"
        : "";

  return (
    <section
      className={`py-12 md:py-16 relative overflow-hidden ${toneClasses[tone]} ${edgeClass} ${className}`}
    >
      {glow && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] bg-primary/8 blur-[140px] rounded-full" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">{children}</div>
    </section>
  );
}
