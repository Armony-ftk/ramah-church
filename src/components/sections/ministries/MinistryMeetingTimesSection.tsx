import Link from "next/link";

import Container from "@/components/layout/Container";
import type { MinistryMeetingDetails } from "@/data/ministries";

type MinistryMeetingTimesSectionProps = {
  content: MinistryMeetingDetails;
};

export default function MinistryMeetingTimesSection({
  content,
}: MinistryMeetingTimesSectionProps) {
  return (
    <section
      aria-labelledby="ministry-meeting-times-title"
      className="bg-[#0B0B0F] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <h2
            id="ministry-meeting-times-title"
            className="font-heading text-3xl font-bold text-white sm:text-5xl"
          >
            {content.title}
          </h2>
          <p className="mt-2 text-base leading-7 text-[#BDBDBD]">
            {content.description}
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#D7D7DD] sm:text-xl sm:leading-9">
            {content.prefix}{" "}
            <strong className="font-bold text-[#8D63D2]">
              {content.highlightedSchedule}
            </strong>{" "}
            {content.suffix} {content.linkPrefix}{" "}
            <Link
              href={content.linkHref}
              className="font-semibold text-[#C8B2F0] underline decoration-[#8D63D2] underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8D63D2]"
            >
              {content.linkLabel}
            </Link>{" "}
            {content.linkSuffix}
          </p>
        </div>
      </Container>
    </section>
  );
}
