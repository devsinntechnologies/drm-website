import Link from "next/link";

const linkClass = "text-primary font-semibold hover:underline";

/** Contextual Features/Pricing (and optional peer industry) links for industry pages. */
export default function IndustryContextLinks({
  featuresLabel = "POS and inventory features",
  peer,
}: {
  featuresLabel?: string;
  peer?: "retail" | "restaurant";
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
    </>
  );
}
