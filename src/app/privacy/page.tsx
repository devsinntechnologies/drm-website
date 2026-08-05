import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata = {
  title: "Privacy Policy | DigiNizam",
  description: "Learn how DigiNizam collects, uses, and protects your business data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <PrivacyContent />
    </main>
  );
}
