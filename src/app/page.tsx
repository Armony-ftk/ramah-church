import HeroSection from "@/components/sections/HeroSection";
import FeaturedSermonSection from "@/components/sections/FeaturedSermonSection";
import MinistriesPreviewSection from "@/components/sections/MinistriesPreviewSection";
import ServiceTimesSection from "@/components/sections/ServiceTimesSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceTimesSection />
      <FeaturedSermonSection />
      <UpcomingEventsSection />
      <MinistriesPreviewSection />
    </>
  );
}
