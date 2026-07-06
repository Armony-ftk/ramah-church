import MinistryCard from "@/components/cards/MinistryCard";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { ministries } from "@/data/ministries";

export default function MinistriesPreviewSection() {
  return (
    <section className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          title="Explore Our Ministries"
          description="Find your place to grow, serve, and belong."
          centered
        />

        <div
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          aria-label="RAMAH Church ministries"
        >
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.slug} ministry={ministry} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button href="/ministries" className="w-full sm:w-auto">
            View All Ministries
          </Button>
        </div>
      </Container>
    </section>
  );
}
