import SupportService from "@/components/support/SupportService";
import SupportWhy from "@/components/support/SupportWhy";
import PricingBenefits from "@/components/pricing/PricingBenefits";
import SupportFAQ from "@/components/support/SupportFAQ";
import SupportContact from "@/components/support/SupportContact";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <SupportService />
      <SupportWhy />
      <PricingBenefits 
        title="Power Up Your" 
        highlight="Restaurant Operations" 
        subtitle="Effortlessly manage every aspect of your business with a connected platform, 24/7 support, reliable offline capabilities, and seamless integrations." 
      />
      <SupportFAQ />
      <SupportContact />
    </main>
  );
}
