"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { consumeFormSuccess, trackGenerateLead } from "@/lib/form-success";

type ThankYouGateProps = {
  tokenKey: string;
  redirectTo: string;
  leadSource: "demo" | "contact";
  children: ReactNode;
};

/**
 * One-time success gate: valid only immediately after a successful form submit.
 * Refresh / direct revisit clears access and redirects so generate_lead cannot re-fire.
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
