import Container from "@/components/layout/Container";
import SermonCarousel from "@/components/sections/sermons/SermonCarousel";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { recentSermons } from "@/data/sermons";

const youtubeChannelUrl = "https://www.youtube.com/@THERAMAHCHURCH";

export default function RecentSermonsSection() {
  return (
    <section
      aria-labelledby="recent-sermons-title"
      className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div id="recent-sermons-title">
          <SectionTitle
            title="Recent Sermons"
            description="Watch the latest teachings shared at The RAMAH Church."
            centered
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <SermonCarousel sermons={recentSermons} />
        </div>

        <div className="mt-9 flex justify-center sm:mt-10">
          <Button
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit The RAMAH Church YouTube channel"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Watch on YouTube
          </Button>
        </div>
      </Container>
    </section>
  );
}
