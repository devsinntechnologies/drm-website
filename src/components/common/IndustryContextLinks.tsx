import React from "react";
import Link from "next/link";

const linkClass = "text-primary font-semibold hover:underline";

/** Supporting blog guides that industry pages can point to (topic-cluster links). */
const GUIDES = {
  "restaurant-pos": { href: "/blog/what-is-a-restaurant-pos-system", label: "what a restaurant POS system does" },
  "restaurant-inventory": {
    href: "/blog/restaurant-inventory-management-reduce-food-waste",
    label: "managing restaurant inventory and reducing food waste",
  },
  "retail-pos": { href: "/blog/what-is-retail-pos-software", label: "what retail POS software does" },
  "retail-inventory": {
    href: "/blog/retail-inventory-management-software",
    label: "how retail inventory management reduces stock problems",
  },
  "retail-choose": { href: "/blog/how-to-choose-retail-pos-software", label: "how to choose retail POS software" },
  "manual-vs-pos": {
    href: "/blog/manual-billing-vs-retail-pos-software",
    label: "manual billing versus retail POS software",
  },
} as const;

export type IndustryGuide = keyof typeof GUIDES;

/** Contextual Features/Pricing (and optional peer industry / guide) links for industry pages. */
export default function IndustryContextLinks({
  featuresLabel = "POS and inventory features",
  peer,
  guides = [],
}: {
  featuresLabel?: string;
  peer?: "retail" | "restaurant";
  guides?: IndustryGuide[];
}) {
  return (
    <>
      {peer === "retail" ? (
        <p>
          For the broader store workflow, review{" "}
          <Link href="/products/retail" className={linkClass}>
            retail billing and stock workflows
          </Link>
          .
        </p>
      ) : null}
      {peer === "restaurant" ? (
        <p>
          If your setup also handles prepared food orders, review the{" "}
          <Link href="/products/restaurant" className={linkClass}>
            restaurant order and kitchen workflow
          </Link>
          .
        </p>
      ) : null}
      <p>
        Review the{" "}
        <Link href="/features" className={linkClass}>
          {featuresLabel}
        </Link>{" "}
        and confirm the functions available for your selected setup.
      </p>
      <p>
        See{" "}
        <Link href="/pricing" className={linkClass}>
          how DigiNizam pricing is agreed
        </Link>{" "}
        after the demo and requirements discussion.
      </p>
      {guides.length > 0 ? (
        <p>
          Related {guides.length > 1 ? "guides" : "guide"}:{" "}
          {guides.map((key, idx) => (
            <React.Fragment key={key}>
              {idx > 0 ? (idx === guides.length - 1 ? " and " : ", ") : null}
              <Link href={GUIDES[key].href} className={linkClass}>
                {GUIDES[key].label}
              </Link>
            </React.Fragment>
          ))}
          .
        </p>
      ) : null}
    </>
  );
}
