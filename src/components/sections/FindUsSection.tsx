import LocationMapCard from "@/components/cards/LocationMapCard";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import CopyAddressButton from "@/components/ui/CopyAddressButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { churchLocation } from "@/data/location";

export default function FindUsSection() {
  return (
    <section className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          title="Find Us Here"
          description="Get directions to The RAMAH Church."
          centered
        />

        <div className="mx-auto mt-10 max-w-5xl">
          <LocationMapCard location={churchLocation} />
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <address className="text-base leading-7 text-[#D7D7DD] not-italic sm:text-lg">
            {churchLocation.address}
          </address>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              href={churchLocation.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              Get Directions
            </Button>
            <CopyAddressButton address={churchLocation.address} />
          </div>
        </div>
      </Container>
    </section>
  );
}
