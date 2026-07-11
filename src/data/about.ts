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

// TEMPORARY PLACEHOLDER CONTENT: This statement of faith is not yet the final approved RAMAH Church doctrine. Replace it with the official church statement of faith before production deployment.
export const beliefs: Belief[] = [
  {
    id: "scriptures",
    title: "The Scriptures",
    statement:
      "We believe in the Scriptures of the Old and New Testaments, in their original writing, as fully inspired by God, and we accept them as the supreme and final authority for faith and life.",
  },
  {
    id: "trinity",
    title: "The Trinity",
    statement:
      "We believe in one God, eternally existing in three Persons: Father, Son, and Holy Spirit.",
  },
  {
    id: "jesus-christ",
    title: "Jesus Christ",
    statement:
      "We believe that Jesus Christ was begotten of the Father, conceived by the Holy Spirit, born of the Virgin Mary, and is true God and true man.",
  },
  {
    id: "humanity-and-sin",
    title: "Humanity and Sin",
    statement:
      "We believe that God created humanity in His own image; that humanity sinned and thereby incurred the penalty of sin, which is death both physically and spiritually; and that all human beings inherit a sinful nature that results in personal transgression and guilt.",
  },
  {
    id: "salvation",
    title: "Salvation",
    statement:
      "We believe that the Lord Jesus Christ died for our sins as a substitutionary sacrifice according to the Scriptures, and that all who believe in Him are justified on the grounds of His shed blood.",
  },
  {
    id: "resurrection-and-ascension",
    title: "Resurrection and Ascension",
    statement:
      "We believe in the bodily resurrection of the Lord Jesus Christ, His ascension into Heaven, and His present ministry as our High Priest and Advocate.",
  },
  {
    id: "christs-return",
    title: "Christ’s Return",
    statement: "We believe in the personal return of the Lord Jesus Christ.",
  },
  {
    id: "new-birth",
    title: "The New Birth",
    statement:
      "We believe that all who repent of their sins and receive the Lord Jesus Christ by faith are born again by the Holy Spirit and thereby become children of God.",
  },
  {
    id: "great-commission",
    title: "The Great Commission",
    statement:
      "We believe that the church is responsible for making disciples of all nations and helping those disciples become established and active within the local church.",
  },
  {
    id: "eternity",
    title: "Eternity",
    statement:
      "We believe in the resurrection of both the just and the unjust, the eternal blessedness of the redeemed, and the eternal separation of those who reject the offer of salvation.",
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    statement:
      "We believe in the baptism in the Holy Spirit, empowering and equipping believers for service, together with the supernatural gifts of the Holy Spirit and an active fellowship with Him.",
  },
  {
    id: "fivefold-ministry",
    title: "Fivefold Ministry",
    statement:
      "We believe in the divinely ordained ministries of Apostle, Prophet, Evangelist, Pastor, and Teacher.",
  },
  {
    id: "spiritual-authority",
    title: "Spiritual Authority",
    statement:
      "We believe in the biblical principle of submission to spiritual authority and that church members should respect leadership in matters of church governance, doctrine, and conduct.",
  },
  {
    id: "church",
    title: "The Church",
    statement:
      "We believe that the one true Church is the whole company of those who have been redeemed by Jesus Christ and regenerated by the Holy Spirit, and that the local church should reflect this spiritual reality. The new birth and personal confession of Christ are essential to church membership.",
  },
  {
    id: "baptism-and-communion",
    title: "Baptism and Communion",
    statement:
      "We believe that the Lord Jesus Christ appointed two ordinances: baptism in water and the Lord’s Supper. Baptism is the immersion of the believer in water as a confession of identification with Christ in His death, burial, and resurrection. The Lord’s Supper is the partaking of the emblems representing Christ’s broken body and shed blood, in remembrance of His sacrificial death until He comes.",
  },
  {
    id: "divine-healing",
    title: "Divine Healing",
    statement:
      "We believe that divine healing is taught throughout the Old and New Testaments and is an integral part of the Gospel.",
  },
  {
    id: "sanctification",
    title: "Sanctification",
    statement:
      "We believe that the Bible teaches that without holiness no one can see the Lord. We believe in sanctification as a definite yet progressive work of grace, beginning at the new birth and continuing until the completion of salvation.",
  },
  {
    id: "marriage-and-sexual-conduct",
    title: "Marriage and Sexual Conduct",
    statement:
      "We believe that sexual relationships are to be expressed within lawful marriage between a natural man and a natural woman, in accordance with biblical teaching.",
  },
  {
    id: "church-discipline",
    title: "Church Discipline",
    statement:
      "We believe that the leadership of the local church has biblical authority to withdraw membership in cases of serious and unrepentant misconduct or similar cause.",
  },
  {
    id: "continuing-in-truth",
    title: "Continuing in Truth",
    statement:
      "We believe that the Church must remain open to any further truth that the Holy Spirit may illuminate from the Scriptures.",
  },
];
