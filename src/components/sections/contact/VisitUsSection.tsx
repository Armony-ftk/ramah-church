import LocationMapCard from "@/components/cards/LocationMapCard";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { churchLocation } from "@/data/location";

export default function VisitUsSection() {
  return (
    <section
      aria-labelledby="visit-us-title"
      className="border-t border-white/10 bg-[#0B0B0F] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div id="visit-us-title">
          <SectionTitle
            title="Visit Us"
            description="We would love to welcome you to The RAMAH Church."
          />
        </div>

        <div className="mt-10 grid items-stretch gap-8 sm:mt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <LocationMapCard location={churchLocation} />

          <div className="flex flex-col justify-center rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
            <span
              aria-hidden="true"
              className="mb-6 block h-1 w-12 rounded-full bg-[#8D63D2]"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8B2F0]">
              Church Location
            </p>
            <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
              {churchLocation.churchName.toUpperCase()}
            </h3>
            <address className="mt-5 text-base leading-8 text-[#D7D7DD] not-italic sm:text-lg sm:leading-9">
              {churchLocation.address}
            </address>

            <Button
              href={churchLocation.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to The RAMAH Church in Google Maps"
              className="mt-8 w-full sm:w-auto sm:self-start"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
