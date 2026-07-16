import MinistryCard from "@/components/cards/MinistryCard";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { ministries } from "@/data/ministries";

interface MinistriesGridSectionProps {
  title?: string;
  description?: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function MinistriesGridSection({
  title = "Explore Our Ministries",
  description = "Find your place to grow, serve, and belong.",
  showCta = true,
  ctaLabel = "View All Ministries",
  ctaHref = "/ministries",
}: MinistriesGridSectionProps) {
  return (
    <section className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle title={title} description={description} centered />

        <div
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          aria-label="RAMAH Church ministries"
        >
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.slug} ministry={ministry} />
          ))}
        </div>

        {showCta ? (
          <div className="mt-9 flex justify-center">
            <Button href={ctaHref} className="w-full sm:w-auto">
              {ctaLabel}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
