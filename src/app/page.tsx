import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import EcosystemSection from "@/components/home/EcosystemSection";
import OrderManagementSection from "@/components/home/OrderManagementSection";
import SmartPosSection from "@/components/home/SmartPosSection";
import InventorySection from "@/components/home/InventorySection";
import KdsSection from "@/components/home/KdsSection";
import CrmSection from "@/components/home/CrmSection";
import DeliverySection from "@/components/home/DeliverySection";
import StaffSection from "@/components/home/StaffSection";
import MultiBranchSection from "@/components/home/MultiBranchSection";
import FranchiseSection from "@/components/home/FranchiseSection";
import AiPoweredSection from "@/components/home/AiPoweredSection";
import UniqueFeaturesSection from "@/components/home/UniqueFeaturesSection";
import RolesPermissionsSection from "@/components/home/RolesPermissionsSection";
import AnalyticsSection from "@/components/home/AnalyticsSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PricingSection from "@/components/home/PricingSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 20 Marketing Sections */}
      <HeroSection />
      <WhySection />
      <EcosystemSection />
      <OrderManagementSection />
      <SmartPosSection />
      <InventorySection />
      <KdsSection />
      <CrmSection />
      <DeliverySection />
      <StaffSection />
      <MultiBranchSection />
      <FranchiseSection />
      <AiPoweredSection />
      <UniqueFeaturesSection />
      <RolesPermissionsSection />
      <AnalyticsSection />
      <IntegrationsSection />
      <IndustriesSection />
      {/* <PricingSection /> */}
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
