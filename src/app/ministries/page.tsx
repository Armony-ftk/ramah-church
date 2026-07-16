import MinistriesOverviewSection from "@/components/sections/ministries/MinistriesOverviewSection";
import MinistriesGridSection from "@/components/sections/MinistriesGridSection";
import PageHero from "@/components/sections/PageHero";
import { ministriesPageContent } from "@/data/ministries";

export default function MinistriesPage() {
  const { hero } = ministriesPageContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />
      <MinistriesOverviewSection />
      <MinistriesGridSection
        title="Ministries Highlights"
        description="Learn more about each ministry and discover where you can thrive."
        showCta={false}
      />
    </>
  );
}
