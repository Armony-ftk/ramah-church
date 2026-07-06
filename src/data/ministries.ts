export type Ministry = {
  title: string;
  slug: string;
  description: string;
  image: string;
  href: string;
};

export const ministries: Ministry[] = [
  {
    title: "RAMAH Kidz",
    slug: "ramah-kidz",
    description:
      "A safe, joyful and fun space where children are taught God's Word and grow in faith.",
    image: "/images/ministries/ramah-kidz-v2.jpeg",
    href: "/ministries/ramah-kidz",
  },
  {
    title: "RAMAH Next-Generation",
    slug: "ramah-next-generation",
    description:
      "A vibrant community where young people gather to fellowship and grow spiritually. ",
    image: "/images/ministries/ramah-next-generation.jpeg",
    href: "/ministries/ramah-next-generation",
  },
  {
    title: "Women of Worth",
    slug: "women-of-worth",
    description:
      "A ministry empowering women to grow in faith, wisdom, purpose, and godly influence.",
    image: "/images/ministries/women-of-worth.jpeg",
    href: "/ministries/women-of-worth",
  },
  {
    title: "Men of Honour",
    slug: "men-of-honour",
    description:
      "A community equipping men to lead with integrity, strength, responsibility, and faith.",
    image: "/images/ministries/men-of-honour.jpeg",
    href: "/ministries/men-of-honour",
  },
];
