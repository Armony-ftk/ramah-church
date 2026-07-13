import MinistriesOverviewSection from "@/components/sections/ministries/MinistriesOverviewSection";
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
    </>
  );
}
