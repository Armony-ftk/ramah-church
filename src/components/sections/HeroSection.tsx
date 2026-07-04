import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-[#0B0B0F]">
      <video
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/ramah-hero-demo-compressed.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-[#0B0B0F]/70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_35%,rgba(141,99,210,0.34),transparent_36%),linear-gradient(90deg,rgba(11,11,15,0.92)_0%,rgba(11,11,15,0.64)_45%,rgba(11,11,15,0.28)_100%)]" />

      <Container className="flex items-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            THE RAMAH CHURCH
          </h1>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8B2F0] sm:text-sm">
            Reach. Teach. Empower.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#E4E1EA] sm:text-lg sm:leading-8">
            Welcome to a Christ-centered family where people encounter God, grow in faith,
            and are empowered to impact their world.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" className="w-full sm:w-auto">
              Join Us This Sunday
            </Button>
            <Button
              href="/sermons"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Watch Sermons
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
