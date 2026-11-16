export type Event = {
  title: string;
  date: string;
  endDate?: string;
  time: string;
  description: string;
  image: string;
  category?: string;
  location?: string;
};

export const events: Event[] = [
  {
    title: "Ebenezer Convocation",
    date: "2026-11-25",
    endDate: "2026-11-29",
    time: "25-29 November 2026 • 05:30 PM",
    description:
      'Join us for Ebenezer Convocation, a special gathering themed "The Mystery of Thanksgiving," featuring guest speaker Bishop Samuel Ade from Ivory Coast.',
    image: "/images/events/ramah-worship-night.jpg",
    category: "Special Service",
  },
  {
    title: "Servants Retreat",
    date: "2026-11-29",
    endDate: "2026-12-03",
    time: "29 Nov 2026 - 03 Dec 2026",
    description:
      "A dedicated time for the servants of The RAMAH Church to step away, seek God together, be renewed in His presence, and return strengthened, refreshed, and ready to serve with renewed passion.",
    image: "/images/events/servant-retreat.jpeg",
    category: "Retreat",
  },
];
