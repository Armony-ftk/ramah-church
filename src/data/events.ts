export type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category?: string;
  location?: string;
};

export const events: Event[] = [
  {
    title: "MASTERCLASS: The Believer in the Marketplace",
    date: "2026-07-11",
    time: "11 July 2026 • 09:00 AM",
    description:
      "A practical teaching session designed to equip believers to represent Christ with excellence, wisdom, and influence in the workplace, business, school, and every sphere of society.",
    image: "/images/events/ramah-masterclass.jpg",
    category: "Masterclass",
  },
  {
    title: "RAMAH Worship Live Recording",
    date: "2026-09-05",
    time: "5 September 2026 • 06:00 PM",
    description:
      "Join RAMAH Worship for a powerful live recording experience filled with praise, worship, and moments of deep encounter in God's presence.",
    image: "/images/events/ramah-worship-night.jpg",
    category: "Worship",
  },
];
