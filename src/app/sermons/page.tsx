import PageHero from "@/components/sections/PageHero";
import RecentSermonsSection from "@/components/sections/sermons/RecentSermonsSection";

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="our sermons"
        title="Experience the Word"
        description="Be transformed, strengthened, and encouraged by the Word of God."
      />
      <RecentSermonsSection />
    </>
  );
}
