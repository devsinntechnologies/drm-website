import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";

export default function SeoRelatedLinks({
  intro,
  links,
}: {
  intro: string;
  links: { href: string; label: string }[];
}) {
  return (
    <SectionShell tone="surface" divider={false} className="!py-8">
      <p className="text-sm text-muted leading-relaxed max-w-3xl mx-auto text-center">
        {intro}{" "}
        {links.map((link, idx) => (
          <span key={link.href}>
            <Link href={link.href} className="text-primary font-semibold hover:underline">
              {link.label}
            </Link>
            {idx < links.length - 2 ? ", " : idx === links.length - 2 ? ", and " : "."}
          </span>
        ))}
      </p>
    </SectionShell>
  );
}
