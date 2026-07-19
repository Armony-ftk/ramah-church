export type MinistryHeroDetails = {
  eyebrow: string;
  description: string;
};

export type MinistryOverviewDetails = {
  title: string;
  description: string;
  paragraphs: string[];
  imageAlt: string;
};

export type MinistryMeetingDetails = {
  title: string;
  description: string;
  prefix: string;
  highlightedSchedule: string;
  suffix: string;
  linkPrefix: string;
  linkLabel: string;
  linkHref: string;
  linkSuffix: string;
};

export type MinistryDetails = {
  hero: MinistryHeroDetails;
  overview: MinistryOverviewDetails;
  meeting: MinistryMeetingDetails;
};

export type Ministry = {
  title: string;
  slug: string;
  description: string;
  image: string;
  href: string;
  details?: MinistryDetails;
};

export type MinistriesPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  overview: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export const ministriesPageContent: MinistriesPageContent = {
  hero: {
    eyebrow: "Our Ministries",
    title: "Explore Our Ministries",
    description:
      "God designed us to grow in community. Discover ministries where you can grow.",
  },
  overview: {
    title: "Find Your Place",
    description:
      "Everyone belongs somewhere. Whether you're a child, student, young adult, parent, or professional, there's a place for you to grow in your faith, build meaningful relationships, and serve with purpose.",
    image: {
      src: "/images/ministries/ramah-ministries-overview.webp",
      alt: "RAMAH Church member raising hand",
    },
  },
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
    details: {
      hero: {
        eyebrow: "OUR WOMEN MINISTRY",
        description:
          "A community where women grow in faith, wisdom, purpose, and godly influence.",
      },
      overview: {
        title: "EMPOWERING WOMEN",
        description: "Discover the purpose of the Women of Worth ministry.",
        // Temporary placeholder copy pending official ministry wording from the church.
        paragraphs: [
          "Women of Worth is a community created to help women deepen their relationship with God, grow in wisdom, and walk confidently in their God-given purpose. Through biblical teaching, prayer, fellowship, and meaningful relationships, women from different generations and seasons of life are encouraged, strengthened, and equipped to make a godly impact in their homes, church, workplaces, and communities.",
        ],
        imageAlt:
          "Women gathered during a Women of Worth ministry event at The RAMAH Church",
      },
      meeting: {
        title: "MEETING TIMES",
        description: "Stay connected with our regular gatherings.",
        prefix: "Women of Worth gathers every",
        highlightedSchedule: "SECOND SATURDAY",
        suffix:
          "of the month unless a specific change is announced.",
        linkPrefix: "You can also check the",
        linkLabel: "upcoming events on our homepage",
        linkHref: "/#upcoming-events-list",
        linkSuffix:
          "for the latest ministry gatherings and special events.",
      },
    },
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
