import React from "react";

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`max-w-2xl mb-10 md:mb-12 flex flex-col ${alignClass} ${className}`}>
      <span className="section-label">{label}</span>
      <h2 className="type-section-heading text-foreground tracking-tight">{title}</h2>
      {description ? (
        <p className="type-body text-muted mt-3 leading-relaxed max-w-xl">{description}</p>
      ) : null}
    </div>
  );
}
