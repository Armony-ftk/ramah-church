import Image from "next/image";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutLeaders } from "@/data/about";

export default function MeetOurLeadersSection() {
  return (
    <section className="border-t border-white/10 bg-[#0B0B0F] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          title={aboutLeaders.title}
          description={aboutLeaders.description}
          centered
        />

        <div className="mx-auto mt-10 w-full max-w-sm sm:mt-12 sm:max-w-md">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#16161D] p-3 shadow-[0_28px_90px_rgba(106,63,181,0.18)] sm:p-4">
            <Image
              src={aboutLeaders.image.src}
              alt={aboutLeaders.image.alt}
              width={1366}
              height={1821}
              sizes="(min-width: 640px) 448px, calc(100vw - 48px)"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center sm:mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D63D2]">
            {aboutLeaders.role}
          </p>

          <h3 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            {aboutLeaders.names.map((name, index) => (
              <span key={name} className="block">
                {index > 0 ? (
                  <span className="mx-auto my-2 block text-2xl text-[#C8B2F0] sm:text-3xl">
                    {aboutLeaders.nameSeparator}
                  </span>
                ) : null}
                {name}
              </span>
            ))}
          </h3>

          <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-8 text-[#D7D7DD] sm:text-lg sm:leading-9">
            {aboutLeaders.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
