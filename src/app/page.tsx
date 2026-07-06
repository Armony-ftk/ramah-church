import HeroSection from "@/components/sections/HeroSection";
import FeaturedSermonSection from "@/components/sections/FeaturedSermonSection";
import FindUsSection from "@/components/sections/FindUsSection";
import MinistriesPreviewSection from "@/components/sections/MinistriesPreviewSection";
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
      <MinistriesPreviewSection />
      <SupportMissionSection />
      <FindUsSection />
    </>
  );
}
