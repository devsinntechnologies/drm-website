import React from "react";
import EmptyState from "@/components/ui/EmptyState";

export default function ComingSoon({ pageName = "Page" }: { pageName?: string }) {
  return (
    <EmptyState
      title={pageName}
      eyebrow="In development"
      description={`${pageName} is being prepared. Contact our team for early access, or return home to explore DigiNizam solutions.`}
      primaryAction={{ label: "Contact us", href: "/contact" }}
      secondaryAction={{ label: "Back home", href: "/" }}
    />
  );
}
