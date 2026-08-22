import Image from "next/image";
import { FiImage, FiVideo } from "react-icons/fi";

export default function MediaSlot({
  kind,
  src,
  alt,
  brief,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  kind: "image" | "video";
  src?: string;
  alt: string;
  brief: string;
  aspect?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden border border-surface-border ${aspect} ${className}`}
      >
        {kind === "video" ? (
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image src={src} alt={alt} fill className="object-cover" />
        )}
      </div>
    );
  }

  const Icon = kind === "video" ? FiVideo : FiImage;

  return (
    <div
      className={`relative rounded-2xl border border-dashed border-surface-border bg-surface/50 flex flex-col items-center justify-center text-center p-6 gap-3 ${aspect} ${className}`}
    >
      <Icon className="text-muted" size={28} />
      <p className="text-xs font-semibold text-muted uppercase tracking-wide">
        {kind === "video" ? "Video required" : "Image required"}
      </p>
      <p className="text-sm text-muted leading-relaxed max-w-sm">{brief}</p>
      <p className="text-[11px] text-muted/70 leading-relaxed max-w-sm">Alt/caption: {alt}</p>
    </div>
  );
}
