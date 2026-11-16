import type { Metadata } from "next";

import MinistryOverviewSection from "@/components/sections/ministries/MinistryOverviewSection";
import MinistriesGridSection from "@/components/sections/MinistriesGridSection";
import PageHero from "@/components/sections/PageHero";
import { ministriesPageContent } from "@/data/ministries";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Discover ministries at The RAMAH Church where children, young people, women, and men can grow in faith and community.",
};

export default function MinistriesPage() {
  const { hero, overview } = ministriesPageContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />
      <MinistryOverviewSection
        headingId="ministries-overview-title"
        title={overview.title}
        paragraphs={[overview.description]}
        image={overview.image}
      />
      <MinistriesGridSection
        title="Ministries Highlights"
        description="Learn more about each ministry and discover where you can thrive."
        showCta={false}
      />
    </>
  );
}
