import type { Metadata } from "next";

import GetInTouchSection from "@/components/sections/contact/GetInTouchSection";
import VisitUsSection from "@/components/sections/contact/VisitUsSection";
import PageHero from "@/components/sections/PageHero";
import { contactPageContent } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | The RAMAH Church",
  description:
    "Contact The RAMAH Church, connect with our team, follow us online, or find directions to our church in Ruimsig, Roodepoort.",
};

export default function ContactPage() {
  const { hero } = contactPageContent;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />
      <GetInTouchSection />
      <VisitUsSection />
    </>
  );
}
