import Image from "next/image";

import Container from "@/components/layout/Container";

export type MinistryOverviewSectionProps = {
  headingId: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  image: {
    src: string;
    alt: string;
  };
};

export default function MinistryOverviewSection({
  headingId,
  title,
  description,
  paragraphs,
  image,
}: MinistryOverviewSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="bg-[#0F0F15] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#16161D] p-3 shadow-[0_28px_90px_rgba(106,63,181,0.18)] sm:p-4">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1152px) 563px, (min-width: 1024px) calc(55vw - 80px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="max-w-xl lg:max-w-none">
            <span
              aria-hidden="true"
              className="mb-5 block h-1 w-12 rounded-full bg-[#8D63D2]"
            />
            <h2
              id={headingId}
              className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl"
            >
              {title}
            </h2>

            {description ? (
              <p className="mt-6 max-w-lg text-base leading-8 text-[#BDBDBD] sm:text-lg sm:leading-9">
                {description}
              </p>
            ) : null}

            {paragraphs?.length ? (
              <div
                className={[
                  description ? "mt-5" : "mt-6",
                  "max-w-lg space-y-5 text-base leading-8 text-[#D7D7DD] sm:text-lg sm:leading-9",
                ].join(" ")}
              >
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
