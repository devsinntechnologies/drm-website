"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import type { FaqItem } from "@/lib/seo";

export default function SeoFaq({
  items,
  title = "Pricing FAQ",
  label = "FAQ",
  description,
}: {
  items: FaqItem[];
  title?: string;
  label?: string;
  description?: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SectionShell tone="background">
      <SectionHeader align="center" label={label} title={title} description={description} />
      <div className="max-w-3xl mx-auto divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface">
        {items.map((item, idx) => {
          const open = openIdx === idx;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
              >
                <h3 className="text-sm font-semibold text-foreground">{item.q}</h3>
                {open ? (
                  <FiMinus className="shrink-0 text-primary" />
                ) : (
                  <FiPlus className="shrink-0 text-muted" />
                )}
              </button>
              <p
                className={`px-5 text-sm text-muted leading-relaxed ${
                  open ? "pb-4" : "sr-only"
                }`}
              >
                {item.a}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
