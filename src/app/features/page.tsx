import FeaturesHeroDetailed from "@/components/features/FeaturesHeroDetailed";
import FeaturesPowerful from "@/components/features/FeaturesPowerful";
import FeaturesRecipe from "@/components/features/FeaturesRecipe";
import FeaturesChef from "@/components/features/FeaturesChef";
import FeaturesCloud from "@/components/features/FeaturesCloud";
import FeaturesInventory from "@/components/features/FeaturesInventory";
import FeaturesModules from "@/components/features/FeaturesModules";
import FeaturesKDS from "@/components/features/FeaturesKDS";
import FeaturesSalient from "@/components/features/FeaturesSalient";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <FeaturesHeroDetailed />
      <FeaturesPowerful />
      <FeaturesRecipe />
      <FeaturesChef />
      <FeaturesCloud />
      <FeaturesInventory />
      <FeaturesKDS />
      <FeaturesModules />
      <FeaturesSalient />
    </main>
  );
}
