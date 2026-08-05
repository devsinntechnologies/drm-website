import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog | DigiNizam",
  description: "Retail insights, operational guides, and product updates from DigiNizam.",
};

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
