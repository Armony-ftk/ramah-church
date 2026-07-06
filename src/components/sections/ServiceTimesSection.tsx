import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { services, type Service } from "@/data/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C8B2F0]">
        {service.day}
      </p>

      <h3 className="mt-5 font-heading text-2xl font-bold text-white">
        {service.title}
      </h3>
      <p className="mt-4 text-lg font-semibold text-[#F7F2FF]">
        {service.time}
      </p>
      <p className="mt-4 flex-1 text-base leading-7 text-[#BDBDBD]">
        {service.description}
      </p>
    </article>
  );
}

export default function ServiceTimesSection() {
  return (
    <section className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Service Times"
          title="Join Us This Week"
          description="We would love to worship with you."
        />

        <div
          className="mt-3 grid gap-5 sm:grid-cols-2"
          aria-label="Weekly service schedule"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <Button href="/contact" className="mt-8 w-full sm:w-auto">
          Plan Your Visit
        </Button>
      </Container>
    </section>
  );
}

