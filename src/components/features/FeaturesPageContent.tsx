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
    <div className="min-h-screen bg-background">
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
                Yes. DigiNizam connects supported sales and purchasing activity with inventory records so teams can review stock and movements. The exact item controls, stock locations and inventory workflows should be confirmed for the selected configuration.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software work without internet?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam supports offline-ready workflows in supported setups. Confirm which actions work without internet on your chosen devices, what is stored locally and how synchronization works when connectivity returns. Do not assume every module or cloud function is available offline.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software manage multiple stores?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam supports multi-store workflows where enabled in the selected setup. Review branch-level stock, sales, reporting and staff access during the demo, and confirm the number of outlets, terminals and synchronization requirements before rollout.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What is inventory management software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Inventory management software organizes stock records and helps teams track quantities and movements. In a connected setup, it links supported purchases, sales and returns with stock information so staff can review what is available and how inventory has changed.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What reports should a business track in POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Useful POS reports include sales summaries, stock movement, product activity and outlet performance. The right reports depend on your business. During a DigiNizam demo, ask to see the specific reports and filters you need rather than assuming every report is included.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">How does inventory software reduce stock problems?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Inventory software helps teams spot problems by making stock quantities and movements easier to review. Connecting supported sales, purchases and returns with inventory reduces separate record keeping. Accurate receiving, stock counts and staff processes are still important; software does not eliminate stock errors by itself.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What is multi-store POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Multi-store POS software connects operational information across more than one location. DigiNizam supports configured branch workflows for stock, sales and reporting where enabled. Confirm outlet access, synchronization and the modules included in your selected setup.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Can POS software manage purchases and suppliers?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam supports purchase-management workflows and supplier records in supported configurations. Review how purchases, receiving and inventory are connected in your selected setup. Confirm the available supplier functions; do not assume an automated supplier portal, ordering integration or auto-reorder feature is included.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-background p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What is offline POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">Offline POS software supports selected sales or operational tasks without an active internet connection. DigiNizam offers offline-ready workflows in supported setups. Confirm the actions and devices supported, and how synchronization is handled when internet access returns.</p>
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
          { href: "/", label: "DigiNizam POS software" },
        ]}
      />
      <SiteCTA
        title="Book a Demo"
        description="Review the features your team needs and confirm the modules, devices and setup required."
      />
    </div>
  );
}
