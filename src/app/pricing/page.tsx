import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingBenefits from "@/components/pricing/PricingBenefits";
import PricingTestimonial from "@/components/pricing/PricingTestimonial";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PricingHero />
      <PricingPlans />
      <PricingBenefits />
      <PricingTestimonial />
    </main>
  );
}
