export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type SocialLink = {
  platform: "Facebook" | "YouTube";
  displayName: string;
  ctaLabel: string;
  href: string;
};

export type ContactPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  getInTouch: {
    title: string;
    description: string;
    office: {
      title: string;
      methods: readonly ContactMethod[];
    };
    pastoral: {
      title: string;
      methods: readonly ContactMethod[];
    };
    social: {
      title: string;
      description: string;
      links: readonly SocialLink[];
    };
  };
};

export const contactPageContent = {
  hero: {
    eyebrow: "CONTACT US",
    title: "Reach Out To Us",
    description:
      "Whether you’re planning a visit, have a question, or simply want to connect, our team would love to hear from you.",
  },
  getInTouch: {
    title: "Get in touch",
    description:
      "Have a question or need more information? Our team is here to help.",
    office: {
      title: "Office / Administration",
      methods: [
        {
          label: "Tel",
          value: "+27 11 795 3578",
          href: "tel:+27117953578",
        },
        {
          label: "Cell",
          value: "+27 72 841 8148",
          href: "tel:+27728418148",
        },
        {
          label: "Email",
          value: "admin@ramah.co.za",
          href: "mailto:admin@ramah.co.za",
        },
      ],
    },
    pastoral: {
      title: "Pastoral Contact",
      methods: [
        {
          label: "Email",
          value: "pastor@ramah.co.za",
          href: "mailto:pastor@ramah.co.za",
        },
      ],
    },
    social: {
      title: "Follow us",
      description:
        "Find on our social platforms resources designed to strengthen your faith and help you grow in your relationship with God.",
      links: [
        {
          platform: "Facebook",
          displayName: "THE RAMAH CHURCH",
          ctaLabel: "Visit our Facebook page",
          href: "https://www.facebook.com/share/1Dixw8bUz2/?mibextid=wwXIfr",
        },
        {
          platform: "YouTube",
          displayName: "THE RAMAH CHURCH",
          ctaLabel: "Visit our YouTube channel",
          href: "https://www.youtube.com/@THERAMAHCHURCH",
        },
      ],
    },
  },
} satisfies ContactPageContent;
