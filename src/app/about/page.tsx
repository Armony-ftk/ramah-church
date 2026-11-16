import type { Metadata } from "next";

import MeetOurLeadersSection from "@/components/sections/about/MeetOurLeadersSection";
import OurBeliefsSection from "@/components/sections/about/OurBeliefsSection";
import OurHistorySection from "@/components/sections/about/OurHistorySection";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore The RAMAH Church's history, leaders, beliefs, and vision for our community.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The RAMAH Church"
        title="Discover Who We Are"
        description="Learn about the story, the people, and the vision behind The RAMAH Church."
      />
      <OurHistorySection />
      <MeetOurLeadersSection />
      <OurBeliefsSection />
    </>
  );
}
