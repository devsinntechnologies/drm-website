"use client";

import FeaturesHeroDetailed from "@/components/features/FeaturesHeroDetailed";
import FeaturesPowerful from "@/components/features/FeaturesPowerful";
import FeaturesRecipe from "@/components/features/FeaturesRecipe";
import FeaturesChef from "@/components/features/FeaturesChef";
import FeaturesCloud from "@/components/features/FeaturesCloud";
import FeaturesInventory from "@/components/features/FeaturesInventory";
import FeaturesModules from "@/components/features/FeaturesModules";
import FeaturesKDS from "@/components/features/FeaturesKDS";
import FeaturesSalient from "@/components/features/FeaturesSalient";
import InventorySeoSections from "@/components/features/InventorySeoSections";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import SiteCTA from "@/components/common/SiteCTA";

export default function FeaturesPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <FeaturesHeroDetailed />
      <section className="py-10 md:py-14 bg-surface border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="section-label">Quick answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">POS and inventory questions teams ask before buying</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software manage inventory?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Yes, DigiNizam connects supported sales and purchasing activity with inventory records so teams can monitor stock and movements more clearly across day-to-day operations.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software work without internet?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam supports offline-ready operations for supported workflows, with synchronization when connectivity returns. The exact offline scope should be confirmed for the selected setup.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software manage multiple stores?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam supports connected multi-store and branch workflows where enabled, with branch-level stock, sales and reporting configured around the business setup.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What is inventory management software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Inventory management software helps businesses track stock, purchases, movements and reporting so teams can reduce stock problems and stay closer to real operational activity.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What reports should a business track in POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Typical reports include sales totals, stock movement, product-level activity and branch performance so teams can review what is selling, what is moving slowly and where operations need attention.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">How does inventory software reduce stock problems?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Better visibility into receiving, sales and inventory movement helps teams catch low-stock risks, reduce over-ordering and keep stock records closer to actual store activity.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What is multi-store POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Multi-store POS software gives a business a connected view of branch performance, stock movement and daily sales so each outlet can operate while leadership keeps a single operational picture.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software manage purchases and suppliers?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam supports purchase tracking and supplier-linked inventory activity so teams can review what was bought, how stock changed, and how purchasing decisions affected the business workflow.
              </p>
            </article>
          </div>
        </div>
      </section>
      <InventorySeoSections />
      <FeaturesInventory />
      <FeaturesRecipe />
      <FeaturesKDS />
      <FeaturesPowerful />
      <FeaturesChef />
      <FeaturesCloud />
      <FeaturesModules />
      <FeaturesSalient />
      <SeoRelatedLinks
        intro="Continue with:"
        links={[
          { href: "/products/retail", label: "retail POS software" },
          { href: "/products/toys", label: "toy store POS software" },
          { href: "/products/furniture", label: "furniture store POS software" },
          { href: "/products/restaurant", label: "restaurant management software" },
          { href: "/pricing", label: "POS software pricing" },
          { href: "/demo", label: "book a demo" },
          { href: "/", label: "POS software Pakistan" },
        ]}
      />
      <SiteCTA
        title="Book a Demo"
        description="See restaurant inventory software connected to POS, kitchen tickets and reporting."
      />
    </main>
  );
}
