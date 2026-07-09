export type AboutHistoryTimelineItem = {
  label: string;
  description: string;
};

export type AboutHistory = {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  paragraphs: string[];
  timeline: AboutHistoryTimelineItem[];
};

export const aboutHistory: AboutHistory = {
  eyebrow: "Our History",
  title: "Where It All Started",
  description:
    "Discover the story behind The RAMAH Church and the mission that continues to shape our journey.",
  image: {
    src: "/images/about/ramah-history.webp",
    alt: "Historic RAMAH Church moment",
  },
  // Placeholder blueprint content pending official review and approval from The RAMAH Church.
  paragraphs: [
    "In 2007, The RAMAH Church began as a small gathering of believers with a shared desire to see lives transformed by the Word of God. What started with faith, prayer, and a simple commitment to serve people became the foundation of a spiritual family built around worship, teaching, and community.",
    "Over the years, RAMAH continued to grow as people encountered God, found belonging, and discovered purpose. Through Sunday services, prayer, discipleship, youth ministry, worship, and outreach, the church became a place where families could be strengthened, individuals could be equipped, and faith could be lived out practically.",
    "Today, The RAMAH Church continues to carry the same heart: to reach, teach, and empower people to live life as God destined for them. Our story is still being written, and every service, every testimony, and every life changed is part of what God is building through this house.",
  ],
  timeline: [
    { label: "2007", description: "Founded in faith" },
    { label: "Growing", description: "Built through worship and community" },
    { label: "Today", description: "Reach. Teach. Empower." },
  ],
};
