import HeroSection from "@/components/sections/HeroSection";
import FeaturedSermonSection from "@/components/sections/FeaturedSermonSection";
import FindUsSection from "@/components/sections/FindUsSection";
import MinistriesGridSection from "@/components/sections/MinistriesGridSection";
import ServiceTimesSection from "@/components/sections/ServiceTimesSection";
import SupportMissionSection from "@/components/sections/SupportMissionSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceTimesSection />
      <FeaturedSermonSection />
      <UpcomingEventsSection />
      <MinistriesGridSection />
      <SupportMissionSection />
      <FindUsSection />
    </>
  );
}
