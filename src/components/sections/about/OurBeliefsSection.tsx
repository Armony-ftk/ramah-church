import Container from "@/components/layout/Container";
import BeliefsAccordionGrid from "@/components/ui/BeliefsAccordionGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { beliefs } from "@/data/about";

export default function OurBeliefsSection() {
  return (
    <section
      aria-labelledby="our-beliefs-title"
      className="border-t border-white/10 bg-[#0F0F15] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div id="our-beliefs-title">
          <SectionTitle
            title="Our Beliefs"
            description="Explore the biblical truths that shape our faith and the way we serve."
            centered
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <BeliefsAccordionGrid beliefs={beliefs} />
        </div>
      </Container>
    </section>
  );
}
