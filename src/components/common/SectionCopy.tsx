import type { ReactNode } from "react";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import MediaSlot from "@/components/common/MediaSlot";

export default function SectionCopy({
  label,
  title,
  children,
  image,
  imageAlt,
  imageBrief,
  reverse = false,
}: {
  label: string;
  title: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  imageBrief?: string;
  reverse?: boolean;
}) {
  return (
    <SectionShell tone={reverse ? "background" : "surface"}>
      <div
        className={`grid grid-cols-1 ${image ? "lg:grid-cols-12" : ""} gap-8 lg:gap-10 items-start`}
      >
        <div className={image ? "lg:col-span-6" : ""}>
          <SectionHeader label={label} title={title} className="mb-4 md:mb-5" />
          <div className="space-y-3 type-body text-muted leading-relaxed">{children}</div>
        </div>
        {image ? (
          <div className="lg:col-span-6">
            <MediaSlot
              kind="image"
              src={image}
              alt={imageAlt ?? title}
              brief={imageBrief ?? title}
            />
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
