"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { consumeFormSuccess, trackGenerateLead } from "@/lib/form-success";

type ThankYouGateProps = {
  tokenKey: string;
  redirectTo: string;
  /** Contact only — Demo uses GA4 page-based lead, not site-code generate_lead. */
  leadSource: "contact";
  children: ReactNode;
};

/**
 * One-time success gate for Contact thank-you (client sessionStorage).
 * Demo /thank-you is gated in middleware before analytics loads.
 */
export default function ThankYouGate({
  tokenKey,
  redirectTo,
  leadSource,
  children,
}: ThankYouGateProps) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const ok = consumeFormSuccess(tokenKey);
    if (!ok) {
      router.replace(redirectTo);
      return;
    }
    trackGenerateLead(leadSource);
    setAllowed(true);
  }, [tokenKey, redirectTo, leadSource, router]);

  if (!allowed) {
    return (
      <main className="min-h-[50vh] bg-background flex items-center justify-center">
        <p className="text-sm text-muted">Redirecting…</p>
      </main>
    );
  }

  return <>{children}</>;
}
