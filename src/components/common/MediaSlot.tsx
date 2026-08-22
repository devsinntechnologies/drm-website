import Image from "next/image";

/**
 * Renders nothing until a real `src` is supplied. `alt`/`brief` stay as props so the
 * asset brief lives next to the call site as documentation — but neither is ever
 * rendered to visitors, since only implementation-ready media should reach the DOM.
 */
export default function MediaSlot({
  kind,
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  kind: "image" | "video";
  src?: string;
  alt: string;
  brief?: string;
  aspect?: string;
  className?: string;
}) {
  if (!src) return null;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-surface-border ${aspect} ${className}`}
    >
      {kind === "video" ? (
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image src={src} alt={alt} fill loading="lazy" className="object-cover" />
      )}
    </div>
  );
}
