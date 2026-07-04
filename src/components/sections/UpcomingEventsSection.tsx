"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { events, type Event } from "@/data/events";

const INITIAL_EVENT_COUNT = 2;

function EventCard({ event }: { event: Event }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#16161D] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={`${event.title} event artwork`}
          fill
          sizes="(min-width: 1024px) 528px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {event.category ? (
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C8B2F0]">
            {event.category}
          </p>
        ) : null}

        <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-white">
          {event.title}
        </h3>
        <time
          dateTime={event.date}
          className="mt-4 text-base font-semibold text-[#F7F2FF]"
        >
          {event.time}
        </time>
        <p className="mt-4 flex-1 text-base leading-7 text-[#BDBDBD]">
          {event.description}
        </p>

        {event.location ? (
          <p className="mt-5 text-sm font-semibold text-[#C8B2F0]">
            {event.location}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function UpcomingEventsSection() {
  const [showAllEvents, setShowAllEvents] = useState(false);

  const sortedEvents = useMemo(
    () =>
      [...events].sort(
        (firstEvent, secondEvent) =>
          new Date(firstEvent.date).getTime() -
          new Date(secondEvent.date).getTime(),
      ),
    [],
  );

  const visibleEvents = showAllEvents
    ? sortedEvents
    : sortedEvents.slice(0, INITIAL_EVENT_COUNT);

  return (
    <section className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          title="Our Upcoming Events"
          description="See what's happening at The RAMAH Church."
          centered
        />

        <div
          id="upcoming-events-list"
          className="mt-10 grid gap-6 sm:grid-cols-2"
          aria-label="Upcoming church events"
        >
          {visibleEvents.map((event) => (
            <EventCard key={`${event.date}-${event.title}`} event={event} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button
            type="button"
            aria-controls="upcoming-events-list"
            aria-expanded={showAllEvents}
            onClick={() => setShowAllEvents((currentValue) => !currentValue)}
            className="w-full sm:w-auto"
          >
            {showAllEvents ? "See Less" : "View All Events"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
