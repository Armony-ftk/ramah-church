import Image from "next/image";

import type { ChurchLocation } from "@/data/location";

type LocationMapCardProps = {
  location: ChurchLocation;
};

export default function LocationMapCard({ location }: LocationMapCardProps) {
  return (
    <a
      href={location.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${location.churchName} location in Google Maps`}
      className="group relative block min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#16161D] shadow-[0_24px_80px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1 hover:border-[#8D63D2]/70 hover:shadow-[0_28px_90px_rgba(106,63,181,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D63D2] sm:min-h-[430px]"
    >
      <Image
        src="/images/location/ramah-map-compressed.webp"
        alt="Map preview showing The RAMAH Church location"
        fill
        sizes="(min-width: 1152px) 1024px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 3rem)"
        className="object-cover transition duration-300 group-hover:scale-[1.015]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/10 via-transparent to-[#0B0B0F]/45" />

      <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-[#0B0B0F]/82 p-4 backdrop-blur-md transition duration-300 group-hover:border-[#8D63D2]/45 sm:inset-x-6 sm:bottom-6 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C8B2F0]">
          Location
        </p>
        <p className="mt-2 text-base font-semibold text-white">
          {location.churchName}
        </p>
      </div>
    </a>
  );
}
