"use client";

import { useState } from "react";

import YouTubeThumbnail from "@/components/sections/sermons/YouTubeThumbnail";
import Button from "@/components/ui/Button";
import type { TeachingSeries } from "@/data/sermons";

type TeachingSeriesListProps = {
  seriesList: TeachingSeries[];
};

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 fill-none stroke-current transition-transform duration-300 motion-reduce:transition-none ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="m6 9 6 6 6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="ml-0.5 h-4 w-4 fill-current"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function TeachingSeriesList({
  seriesList,
}: TeachingSeriesListProps) {
  const [openSeriesId, setOpenSeriesId] = useState<string | null>(null);

  return (
    <div className="space-y-8 sm:space-y-10">
      {seriesList.map((series, seriesIndex) => {
        const isOpen = openSeriesId === series.id;
        const isImageFirst = seriesIndex % 2 === 0;
        const featuredSermon = series.sermons[0];
        const triggerId = `teaching-series-${series.id}-trigger`;
        const panelId = `teaching-series-${series.id}-playlist`;
        const messageLabel = `${series.sermons.length} ${
          series.sermons.length === 1 ? "message" : "messages"
        }`;
        const thumbnailAlt = series.title.startsWith("The ")
          ? `Featured thumbnail for ${series.title} teaching series`
          : `Featured thumbnail for the ${series.title} teaching series`;

        return (
          <article
            key={series.id}
            className={`overflow-hidden rounded-lg border bg-[#16161D] shadow-[0_28px_90px_rgba(0,0,0,0.3)] transition-colors duration-300 motion-reduce:transition-none ${
              isOpen
                ? "border-[#8D63D2]/60"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="grid lg:grid-cols-2">
              <div
                className={`group relative aspect-video overflow-hidden bg-[#0B0B0F] ${
                  isImageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <YouTubeThumbnail
                  videoId={featuredSermon.youtubeVideoId}
                  alt={thumbnailAlt}
                  sizes="(min-width: 1152px) 544px, (min-width: 1024px) calc(50vw - 48px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/45 via-transparent to-transparent"
                />
              </div>

              <div
                className={`flex min-w-0 flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:min-h-full lg:px-10 xl:px-12 ${
                  isImageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8D63D2]">
                  Teaching series
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {series.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[#C8B2F0]">
                  {messageLabel}
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#BDBDBD]">
                  {series.description}
                </p>
                <div className="mt-7">
                  <Button
                    id={triggerId}
                    type="button"
                    variant="secondary"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenSeriesId((currentId) =>
                        currentId === series.id ? null : series.id,
                      )
                    }
                    className="w-full gap-2.5 sm:w-auto"
                  >
                    {isOpen ? "Close Series" : "Explore Series"}
                    <ChevronIcon isOpen={isOpen} />
                  </Button>
                </div>
              </div>
            </div>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={`grid [transition-property:grid-template-rows,opacity,transform,visibility] duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                isOpen
                  ? "visible grid-rows-[1fr] translate-y-0 opacity-100"
                  : "invisible grid-rows-[0fr] -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
                  <div className="mb-4 flex items-end justify-between gap-4">
                    <h4 className="font-heading text-lg font-semibold text-white sm:text-xl">
                      Messages in this series
                    </h4>
                    <span className="shrink-0 text-sm text-[#BDBDBD]">
                      {messageLabel}
                    </span>
                  </div>

                  <ol className="overflow-hidden rounded-lg border border-white/10 bg-[#0B0B0F]">
                    {series.sermons.map((sermon, sermonIndex) => (
                      <li
                        key={sermon.youtubeVideoId}
                        className="border-b border-white/10 last:border-b-0"
                      >
                        <a
                          href={sermon.youtubeVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isOpen ? undefined : -1}
                          aria-label={`Watch ${sermon.title} by ${sermon.speaker} on YouTube`}
                          className="group grid min-h-20 grid-cols-[2.25rem_minmax(0,1fr)_2.75rem] items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8D63D2] motion-reduce:transition-none sm:grid-cols-[3rem_minmax(0,1fr)_3rem] sm:gap-4 sm:px-6"
                        >
                          <span className="font-heading text-sm font-semibold tabular-nums text-[#8D63D2] sm:text-base">
                            {String(sermonIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0">
                            <span className="block font-heading text-base font-semibold leading-6 text-white transition-colors duration-200 group-hover:text-[#C8B2F0] motion-reduce:transition-none sm:text-lg">
                              {sermon.title}
                            </span>
                            <span className="mt-1 block text-sm text-[#BDBDBD]">
                              {sermon.speaker}
                            </span>
                          </span>
                          <span
                            aria-hidden="true"
                            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#C8B2F0] transition-colors duration-200 group-hover:border-[#8D63D2] group-hover:bg-[#6A3FB5] group-hover:text-white motion-reduce:transition-none"
                          >
                            <PlayIcon />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
