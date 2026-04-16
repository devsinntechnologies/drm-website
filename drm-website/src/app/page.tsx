import HeroSection from "@/components/home/HeroSection";
import SmartFeatures from "@/components/home/SmartFeatures";
import LoyaltyAndInsights from "@/components/home/LoyaltyAndInsights";
import IntegrationsAndExpansion from "@/components/home/IntegrationsAndExpansion";
import EcosystemSection from "@/components/home/EcosystemSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import LatestPosts from "@/components/home/LatestPosts";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SmartFeatures />
      <LoyaltyAndInsights />
      <IntegrationsAndExpansion />
      <EcosystemSection />
      <HowItWorks />
      <Testimonials />
      <LatestPosts />
    </main>
  );
}
