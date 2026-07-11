import MeetOurLeadersSection from "@/components/sections/about/MeetOurLeadersSection";
import OurBeliefsSection from "@/components/sections/about/OurBeliefsSection";
import OurHistorySection from "@/components/sections/about/OurHistorySection";
import PageHero from "@/components/sections/PageHero";

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
