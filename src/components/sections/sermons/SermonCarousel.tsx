"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "@/components/ui/Button";
import {
  getYouTubeThumbnailUrl,
  type Sermon,
} from "@/data/sermons";

type SermonCarouselProps = {
  sermons: Sermon[];
};

type SermonThumbnailProps = {
  sermon: Sermon;
};

function SermonThumbnail({ sermon }: SermonThumbnailProps) {
  const fallbackUrl = getYouTubeThumbnailUrl(
    sermon.youtubeVideoId,
    "hqdefault",
  );
  const [thumbnailUrl, setThumbnailUrl] = useState(() =>
    getYouTubeThumbnailUrl(sermon.youtubeVideoId),
  );

  return (
    <Image
      src={thumbnailUrl}
      alt={`Thumbnail for ${sermon.title}`}
      fill
      sizes="(min-width: 1152px) 673px, (min-width: 1024px) 60vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
      className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
      onError={() => {
        if (thumbnailUrl !== fallbackUrl) {
          setThumbnailUrl(fallbackUrl);
        }
      }}
    />
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
    >
      <path
        d={direction === "left" ? "m15 18-6-6 6-6" : "m9 6 6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function SermonCarousel({ sermons }: SermonCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sermonCount = sermons.length;

  function showPreviousSermon() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? sermonCount - 1 : currentIndex - 1,
    );
  }

  function showNextSermon() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % sermonCount);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent sermons"
    >
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#16161D] shadow-[0_28px_90px_rgba(0,0,0,0.36)]">
        <div
          id="recent-sermons-track"
          className="flex [transition-property:transform] duration-500 ease-in-out motion-reduce:transition-none"
          style={{
            transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
          }}
        >
          {sermons.map((sermon, index) => {
            const isActive = index === activeIndex;

            return (
              <article
                key={sermon.youtubeVideoId}
                role="group"
                aria-roledescription="slide"
                aria-label={`Sermon ${index + 1} of ${sermonCount}`}
                aria-hidden={!isActive}
                className="w-full shrink-0"
              >
                <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
                  <a
                    href={sermon.youtubeVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${sermon.title} by ${sermon.speaker} on YouTube`}
                    tabIndex={isActive ? 0 : -1}
                    className="group relative block aspect-video overflow-hidden bg-[#0B0B0F] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8D63D2]"
                  >
                    <SermonThumbnail sermon={sermon} />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#0B0B0F]/25 transition-colors duration-300 group-hover:bg-[#0B0B0F]/10 motion-reduce:transition-none"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8D63D2] bg-[#0B0B0F]/60 text-[#C8B2F0] shadow-[0_16px_45px_rgba(106,63,181,0.34)] backdrop-blur-sm transition-colors duration-300 group-hover:border-[#C8B2F0] group-hover:bg-[#6A3FB5] group-hover:text-white motion-reduce:transition-none sm:h-20 sm:w-20"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8"
                        focusable="false"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </a>

                  <div className="flex min-h-[17rem] min-w-0 flex-col justify-center px-6 py-8 sm:min-h-[18rem] sm:px-9 sm:py-10 lg:min-h-0 lg:px-10 xl:px-12">
                    <span
                      aria-hidden="true"
                      className="mb-5 block h-1 w-12 rounded-full bg-[#8D63D2]"
                    />
                    <h3 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                      {sermon.title}
                    </h3>
                    <p className="mt-4 text-base font-semibold text-[#C8B2F0]">
                      {sermon.speaker}
                    </p>
                    <div className="mt-7">
                      <Button
                        href={sermon.youtubeVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${sermon.title} on YouTube`}
                        tabIndex={isActive ? 0 : -1}
                        className="w-full sm:w-auto"
                      >
                        Watch Sermon
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Previous sermon"
          aria-controls="recent-sermons-track"
          onClick={showPreviousSermon}
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#16161D] text-white transition-colors hover:border-[#8D63D2] hover:text-[#C8B2F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D63D2]"
        >
          <ArrowIcon direction="left" />
        </button>

        <div
          role="group"
          className="flex items-center justify-center"
          aria-label="Choose sermon"
        >
          {sermons.map((sermon, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={sermon.youtubeVideoId}
                type="button"
                aria-label={`Show sermon ${index + 1}: ${sermon.title}`}
                aria-controls="recent-sermons-track"
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className="group inline-flex h-11 w-7 cursor-pointer items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#8D63D2] sm:w-8"
              >
                <span
                  aria-hidden="true"
                  className={[
                    "h-2 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none",
                    isActive
                      ? "w-6 bg-[#8D63D2]"
                      : "w-2 bg-white/30 group-hover:bg-white/60",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next sermon"
          aria-controls="recent-sermons-track"
          onClick={showNextSermon}
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#16161D] text-white transition-colors hover:border-[#8D63D2] hover:text-[#C8B2F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D63D2]"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
