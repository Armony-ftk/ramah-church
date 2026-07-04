import Image from "next/image";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredSermon } from "@/data/featuredSermon";

export default function FeaturedSermonSection() {
  return (
    <section className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          title="Watch Our Latest Sermon"
          description="Be encouraged and transformed by the Word."
          centered
        />

        <div className="mx-auto mt-10 max-w-5xl">
          <a
            href={featuredSermon.youtubeVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${featuredSermon.title} by ${featuredSermon.speaker} on YouTube`}
            className="group relative block overflow-hidden rounded-lg border border-white/10 bg-[#16161D] shadow-[0_28px_90px_rgba(0,0,0,0.36)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D63D2]"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={featuredSermon.thumbnailUrl}
                alt={`Sermon thumbnail for ${featuredSermon.title}`}
                fill
                sizes="(min-width: 1280px) 1024px, (min-width: 768px) 84vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority={false}
              />
              <div className="absolute inset-0 bg-[#0B0B0F]/25 transition-colors duration-300 group-hover:bg-[#0B0B0F]/15" />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8D63D2] bg-transparent text-[#8D63D2] shadow-[0_16px_45px_rgba(106,63,181,0.28)] transition-colors duration-300 group-hover:border-[#C8B2F0] group-hover:bg-[#8D63D2]/10 group-hover:text-[#C8B2F0] sm:h-20 sm:w-20"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8"
                  focusable="false"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </a>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {featuredSermon.title}
            </h3>
            <p className="mt-3 text-base font-semibold text-[#C8B2F0]">
              {featuredSermon.speaker}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href={featuredSermon.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit The RAMAH Church YouTube channel"
                className="w-full sm:w-auto"
              >
                Watch on YouTube
              </Button>
              <Button
                href={featuredSermon.sermonsPageUrl}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                View More Sermons
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
