import type { Metadata } from "next";
import NotFoundGlass from "@/components/not-found/NotFoundGlass";

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
  return <NotFoundGlass />;
}
