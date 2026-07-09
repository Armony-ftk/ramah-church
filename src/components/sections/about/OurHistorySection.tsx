import Image from "next/image";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutHistory } from "@/data/about";

export default function OurHistorySection() {
  return (
    <section className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow={aboutHistory.eyebrow}
          title={aboutHistory.title}
          description={aboutHistory.description}
        />

        <article className="mt-10 overflow-hidden rounded-lg border border-white/10 bg-[#16161D] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="border-b border-white/10 pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8D63D2]">
              The RAMAH Church
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
              A Story Still Being Written
            </h3>
          </div>

          <div className="mt-7 text-base leading-8 text-[#D7D7DD] sm:text-lg sm:leading-9">
            <div className="mb-6 overflow-hidden rounded-lg border border-white/10 bg-[#0B0B0F] md:float-left md:mb-4 md:mr-8 md:w-[38%] lg:w-[34%]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={aboutHistory.image.src}
                  alt={aboutHistory.image.alt}
                  fill
                  sizes="(min-width: 1024px) 330px, (min-width: 768px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {aboutHistory.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-5 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {aboutHistory.timeline.map((item) => (
              <div key={item.label} className="rounded-lg bg-[#0F0F15] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C8B2F0]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#BDBDBD]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
