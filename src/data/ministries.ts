export type MinistryHeroDetails = {
  eyebrow: string;
  description: string;
};

export type MinistryOverviewDetails = {
  title: string;
  description?: string;
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
    // Temporary placeholder detail-page copy pending official ministry wording from the church.
    details: {
      hero: {
        eyebrow: "OUR CHILDREN'S MINISTRY",
        description:
          "A joyful and nurturing space where children discover God, grow in faith, and build a strong spiritual foundation.",
      },
      overview: {
        title: "GROWING YOUNG FAITH",
        paragraphs: [
          "RAMAH Kidz is a safe, joyful, and engaging ministry created to help children know God and grow in their faith from an early age. Through age-appropriate biblical teaching, worship, prayer, creative activities, and meaningful interaction, children are encouraged to understand God's Word, develop godly values, and experience church as a place where they are loved, supported, and able to belong.",
        ],
        imageAlt:
          "Children participating in a RAMAH Kidz ministry gathering at The RAMAH Church",
      },
      meeting: {
        title: "MEETING TIMES",
        description: "Stay connected with our regular gatherings.",
        prefix: "RAMAH Kidz gathers",
        highlightedSchedule: "EVERY SUNDAY",
        suffix:
          "during our church services unless a specific change is announced.",
        linkPrefix: "You can also check the",
        linkLabel: "upcoming events on our homepage",
        linkHref: "/#upcoming-events-list",
        linkSuffix:
          "for the latest ministry activities and special events.",
      },
    },
  },
  {
    title: "RAMAH Next-Generation",
    slug: "ramah-next-generation",
    description:
      "A vibrant community where young people gather to fellowship and grow spiritually. ",
    image: "/images/ministries/ramah-next-generation.jpeg",
    href: "/ministries/ramah-next-generation",
    // Temporary placeholder detail-page copy pending official ministry wording from the church.
    details: {
      hero: {
        eyebrow: "OUR YOUTH MINISTRY",
        description:
          "A vibrant community where young people grow spiritually, build meaningful relationships, and discover their God-given purpose.",
      },
      overview: {
        title: "EQUIPPING THE NEXT GENERATION",
        paragraphs: [
          "RAMAH Next-Generation is a community where young people and young adults are encouraged to grow in their relationship with God, build genuine friendships, and develop confidence in who God has called them to become. Through biblical teaching, prayer, worship, fellowship, and relevant conversations, the ministry creates a space where the next generation can ask questions, strengthen their faith, discover their gifts, and live with purpose.",
        ],
        imageAlt:
          "Young people gathered during a RAMAH Next-Generation ministry event at The RAMAH Church",
      },
      meeting: {
        title: "MEETING TIMES",
        description: "Stay connected with our regular gatherings.",
        prefix: "RAMAH Next-Generation gathers every",
        highlightedSchedule: "FIRST SATURDAY",
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
    // Temporary placeholder detail-page copy pending official ministry wording from the church.
    details: {
      hero: {
        eyebrow: "OUR MEN'S MINISTRY",
        description:
          "A community equipping men to grow in faith, lead with integrity, and live with strength, responsibility, and purpose.",
      },
      overview: {
        title: "BUILDING MEN OF HONOUR",
        paragraphs: [
          "Men of Honour is a community created to help men grow spiritually, develop godly character, and lead with integrity in every area of life. Through biblical teaching, prayer, fellowship, mentorship, and honest conversations, men are encouraged to become responsible leaders, faithful husbands and fathers, dependable members of the church, and positive influences in their workplaces and communities.",
        ],
        imageAlt:
          "Men gathered during a Men of Honour ministry event at The RAMAH Church",
      },
      meeting: {
        title: "MEETING TIMES",
        description: "Stay connected with our regular gatherings.",
        prefix: "Men of Honour gathers every",
        highlightedSchedule: "THIRD SATURDAY",
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
];
