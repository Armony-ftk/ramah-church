import type { Metadata } from "next";

import HowToGiveSection from "@/components/sections/give/HowToGiveSection";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Learn how to give to The RAMAH Church and support its mission through our available giving methods.",
};

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="GIVING"
        title="Support Our Mission"
        description="Partner with us as we reach more people and advance God’s work."
      />
      <HowToGiveSection />
    </>
  );
}
