import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MinistryMeetingTimesSection from "@/components/sections/ministries/MinistryMeetingTimesSection";
import MinistryOverviewSection from "@/components/sections/ministries/MinistryOverviewSection";
import PageHero from "@/components/sections/PageHero";
import {
  ministries,
  type Ministry,
  type MinistryDetails,
} from "@/data/ministries";

type MinistryPageProps = {
  params: Promise<{ slug: string }>;
};

type MinistryWithDetails = Ministry & {
  details: MinistryDetails;
};

export const dynamicParams = false;

function hasDetails(ministry: Ministry): ministry is MinistryWithDetails {
  return ministry.details !== undefined;
}

function getDetailedMinistry(slug: string) {
  const ministry = ministries.find((ministry) => ministry.slug === slug);

  if (!ministry || !hasDetails(ministry)) {
    notFound();
  }

  return ministry;
}

export function generateStaticParams() {
  return ministries.filter(hasDetails).map((ministry) => ({
    slug: ministry.slug,
  }));
}

export async function generateMetadata({
  params,
}: MinistryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ministry = getDetailedMinistry(slug);

  return {
    title: `${ministry.title} | The RAMAH Church`,
    description: ministry.description,
  };
}

export default async function MinistryDetailPage({
  params,
}: MinistryPageProps) {
  const { slug } = await params;
  const ministry = getDetailedMinistry(slug);

  return (
    <>
      <PageHero
        eyebrow={ministry.details.hero.eyebrow}
        title={ministry.title.toUpperCase()}
        description={ministry.details.hero.description}
      />
      <MinistryOverviewSection
        headingId={`${ministry.slug}-overview-title`}
        title={ministry.details.overview.title}
        paragraphs={ministry.details.overview.paragraphs}
        image={{
          src: ministry.image,
          alt: ministry.details.overview.imageAlt,
        }}
      />
      <MinistryMeetingTimesSection content={ministry.details.meeting} />
    </>
  );
}
