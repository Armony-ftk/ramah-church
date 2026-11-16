import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import RecentSermonsSection from "@/components/sections/sermons/RecentSermonsSection";
import TeachingSeriesSection from "@/components/sections/sermons/TeachingSeriesSection";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Explore recent sermons and teaching series from The RAMAH Church to be encouraged and strengthened by God's Word.",
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="our sermons"
        title="Experience the Word"
        description="Be transformed, strengthened, and encouraged by the Word of God."
      />
      <RecentSermonsSection />
      <TeachingSeriesSection />
    </>
  );
}
