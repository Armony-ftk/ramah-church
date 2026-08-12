import HowToGiveSection from "@/components/sections/give/HowToGiveSection";
import PageHero from "@/components/sections/PageHero";

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
