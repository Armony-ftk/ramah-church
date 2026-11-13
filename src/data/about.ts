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

export type AboutLeaders = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  role: string;
  names: string[];
  nameSeparator: string;
  biography: string[];
};

export type Belief = {
  id: string;
  title: string;
  statement: string;
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

export const aboutLeaders: AboutLeaders = {
  title: "Meet Our Leaders",
  description:
    "Get to know our lead pastors and the heart behind their leadership at The RAMAH Church.",
  image: {
    src: "/images/about/ramah-leaders.webp",
    alt: "Pastor Guelord Lukama and Prophetess Esther-Anita Lukama",
  },
  role: "Lead Pastors",
  names: ["Pastor Guelord Lukama", "Prophetess Esther-Anita Lukama"],
  nameSeparator: "&",
  // Placeholder/template biography pending official church approval.
  biography: [
    "Pastor Guelord Lukama and Prophetess Esther-Anita Lukama serve as the lead pastors of The RAMAH Church. Together, they carry a heart to see people encounter Christ, grow through the Word of God, and walk in the purpose God has prepared for their lives.",
    "Their leadership reflects a commitment to prayer, biblical teaching, worship, family, and community. Through their service, The RAMAH Church continues to be a place where people are reached, taught, and empowered to live life as God destined for them.",
  ],
};

export const beliefs: Belief[] = [
  {
    id: "scriptures",
    title: "The Scriptures",
    statement:
      "We believe in the scripture of the Old and New Testaments in their original writings as fully inspired of God (2 Timothy 3:16-17) and accept them as the supreme and final authority (Isaiah 40:8; Hebrews 4:12-13 (V12); 1 Peter 1:23-25) for faith (Romans 10:17) and life (Joshua 1:8; Psalms 19:7-8; James 1:22-25).",
  },
  {
    id: "trinity",
    title: "The Trinity",
    statement:
      "We believe in one God, eternally existing in three Persons — Father, Son and Holy Spirit (Matthew 28:18-19).",
  },
  {
    id: "jesus-christ",
    title: "Jesus Christ",
    statement:
      "We believe that Jesus Christ was begotten of the Father (John 6:28-33), conceived by the Holy Spirit (Luke 1:29-35), born of the Virgin Mary (Luke 2:1-7) and is true God and true man (Micah 5:1).",
  },
  {
    id: "humanity-and-sin",
    title: "Humanity and Sin",
    statement:
      "We believe that God created man in His own image (Genesis 3), that all human beings inherit a sinful nature which issues, in the case of those who reach moral responsibility, in actual transgression involving personal guilt.",
  },
  {
    id: "christs-sacrifice",
    title: "Christ’s Sacrifice",
    statement:
      "We believe that the Lord Jesus Christ died for our sins (1 John 2:2) as a substitute sacrifice (Isaiah 53:4-6, 12, last part) according to the Scriptures and that all who believe in Him are justified on the grounds of His shed blood (Ephesians 1:7).",
  },
  {
    id: "resurrection-and-ascension",
    title: "Resurrection and Ascension",
    statement:
      "We believe in the bodily resurrection of the Lord Jesus (Luke 24:1-12, 13-49), His ascension into heaven (Luke 24:50-53; Acts 1:6-11), and His present life as our High Priest and Advocate (Hebrews 4:14-16).",
  },
  {
    id: "christs-return",
    title: "Christ’s Return",
    statement:
      "We believe in the personal return of the Lord Jesus Christ for eternal reward to the just and eternal domination for the unjust (Matthew 25:31-46).",
  },
  {
    id: "new-birth",
    title: "The New Birth",
    statement:
      "We believe that all who repent of their sin and receive the Lord Jesus Christ by faith are born again of the Holy Spirit (John 7:38-39) and thereby become children of God (John 1:12; Romans 8:14-15).",
  },
  {
    id: "water-baptism",
    title: "Water Baptism",
    statement:
      "We believe in the baptism of water by immersion (deep water) (Matthew 28:18-19).",
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    statement:
      "We believe in the baptism of the Holy Spirit (Matthew 28:18-19), who empowers and equips believers for service, with the natural or spiritual gifts.",
  },
  {
    id: "breaking-of-bread",
    title: "The Breaking of Bread",
    statement:
      "We also believe in the Breaking of Bread as a reminder of the Lord's death and return (Luke 22:19; 1 Corinthians 11:23-26).",
  },
  {
    id: "marriage",
    title: "Marriage",
    statement:
      "We believe the term “marriage” has only one meaning and that is marriage as instituted by God which joins one man and one woman in a single, exclusive union (Genesis 2:18, 24; Mark 10:6-9).",
  },
  {
    id: "sexual-conduct",
    title: "Sexual Conduct",
    statement:
      "We believe that any sexual immorality, such as adultery, fornication, homosexuality, bisexual conduct, bestiality, incest, pornography, or any attempt to change one’s gender, or disagreement with one’s biological gender, is sinful and offensive to God (1 Corinthians 6:9-20; 1 Thessalonians 4:3-5).",
  },
  {
    id: "service-and-conduct",
    title: "Service and Conduct",
    statement:
      "We believe that in order to maintain and preserve the function and integrity of the church as the local Body of Christ, and to provide a biblical role model to church members and the community, it is imperative that all persons employed by the church in any capacity, or who serve as volunteers, should abide by and agree to this Statement on Marriage and Sexuality and conduct themselves accordingly (Titus 1:4-9; 1 Timothy 4:12).",
  },
  {
    id: "redemption-and-restoration",
    title: "Redemption and Restoration",
    statement:
      "We believe that God offers redemption and restoration to all who confess and forsake their sin, seeking His mercy and forgiveness through Jesus Christ (1 John 1:9; 2 Chronicles 7:14).",
  },
  {
    id: "compassion-and-dignity",
    title: "Compassion and Dignity",
    statement:
      "We believe that every person must be afforded compassion, love, kindness, respect, and dignity. Hateful and harassing behaviour or attitudes toward any individual are to be repudiated and are not in accord with Scripture nor with our church teachings (Galatians 3:27-29; Galatians 5:14; Matthew 7:12).",
  },
];
