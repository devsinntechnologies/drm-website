import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingBenefits from "@/components/pricing/PricingBenefits";
import SiteCTA from "@/components/common/SiteCTA";

export const metadata = {
  title: "Get a Free Demo | DigiNizam",
  description: "Book a free DigiNizam demo. See POS, inventory, and reporting tailored to your business.",
};

export default function DemoPage() {
  return (
    <main className="bg-background">
      <DemoHero />
      <DemoForm />
      <SectionShell tone="surface">
        <SectionHeader
          align="center"
          label="Pricing"
          title="Plans that scale with you"
          description="Transparent pricing for single outlets and growing chains. Upgrade anytime."
        />
        <PricingPlans />
      </SectionShell>
      <PricingBenefits
        title="Why teams choose"
        highlight="DigiNizam POS"
        subtitle="Save time, reduce errors, and make better decisions with real-time data."
      />
      <SiteCTA
        title="Questions before booking?"
        description="Talk to our team—we'll help you pick the right setup for your business."
      />
    </main>
  );
}
