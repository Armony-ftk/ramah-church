import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function SupportMissionSection() {
  return (
    <section className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Why Give?"
          title="Support Our Mission"
          description="Help us grow and reach more people."
        />

        <div className="mt-3 max-w-3xl rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-8">
          <p className="text-base leading-8 text-[#D7D7DD] sm:text-lg">
            At The RAMAH Church, our mission is to reach, teach, and empower
            people to live the life God destined for them. Through your
            generosity, you help us serve our community, support the work of
            ministry, and create spaces where lives can be transformed by the
            Word and presence of God.
          </p>
        </div>

        <Button href="/give" className="mt-8 w-full sm:w-auto">
          Give Now
        </Button>
      </Container>
    </section>
  );
}
