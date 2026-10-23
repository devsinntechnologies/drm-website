import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | DigiNizam",
  description: "This page could not be found. Explore DigiNizam or contact our team for help.",
  // Next.js injects noindex for a 404. Clear inherited index/follow and
  // homepage social metadata rather than adding a second robots directive.
  robots: null,
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-6 py-16 text-center">
      <p className="section-label">404</p>
      <h1 className="type-page-heading text-foreground">Page not found</h1>
      <p className="type-body text-muted">The page you are looking for could not be found.</p>
      <Link href="/" className="text-primary font-semibold hover:underline">Back to home</Link>
    </div>
  );
}
