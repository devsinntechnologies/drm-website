import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
