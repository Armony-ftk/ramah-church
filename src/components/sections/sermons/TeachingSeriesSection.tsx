import Container from "@/components/layout/Container";
import TeachingSeriesList from "@/components/sections/sermons/TeachingSeriesList";
import SectionTitle from "@/components/ui/SectionTitle";
import { teachingSeries } from "@/data/sermons";

export default function TeachingSeriesSection() {
  return (
    <section
      aria-labelledby="teaching-series-title"
      className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div id="teaching-series-title">
          <SectionTitle
            title="Teaching Series"
            description="Go deeper in the Word with complete teaching series, one message at a time."
            centered
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <TeachingSeriesList seriesList={teachingSeries} />
        </div>
      </Container>
    </section>
  );
}
