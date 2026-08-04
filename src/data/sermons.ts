export type Sermon = {
  youtubeVideoId: string;
  title: string;
  speaker: string;
  youtubeVideoUrl: string;
};

export type TeachingSeries = {
  id: string;
  title: string;
  description: string;
  sermons: Sermon[];
};

export function getYouTubeThumbnailUrl(
  videoId: string,
  quality: "maxresdefault" | "hqdefault" = "maxresdefault",
) {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export const recentSermons: Sermon[] = [
  {
    youtubeVideoId: "dStRn1TVVBs",
    title: "Should I Still Pray If God Only Does His Own Will?",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl: "https://youtu.be/dStRn1TVVBs?si=YvBUF49SdMvVrodZ",
  },
  {
    youtubeVideoId: "vuMu4SoeQY0",
    title: "My Help Comes From The Lord",
    speaker: "Min. Isaac Ayind",
    youtubeVideoUrl: "https://youtu.be/vuMu4SoeQY0?si=5UK-DYvEpq-9efCu",
  },
  {
    youtubeVideoId: "r-5_MkrPBcs",
    title: "Who Is Like You, Lord?",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl: "https://youtu.be/r-5_MkrPBcs?si=MTDf9JAQ-a874nYv",
  },
  {
    youtubeVideoId: "G3KO9tC5YOs",
    title: "How Holy Is God?",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl: "https://youtu.be/G3KO9tC5YOs?si=Wrezg-k1oMX5wA1O",
  },
  {
    youtubeVideoId: "jHtcveEzqRM",
    title: "The Omnipotent God",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl: "https://youtu.be/jHtcveEzqRM?si=k1AK1IncvsGs8egx",
  },
];

export const teachingSeries: TeachingSeries[] = [
  {
    id: "the-attributes-of-god",
    title: "The Attributes of God",
    description:
      "Knowing who God truly is changes how you see yourself and live out your purpose. In this series, explore the attributes that reveal what makes God uniquely God.",
    sermons: [
      {
        youtubeVideoId: "JevDE_8TNbg",
        title: "The Immutable God",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/JevDE_8TNbg?si=lW_QRbFyyrsjpoRA",
      },
      {
        youtubeVideoId: "tjBsO7pt9aA",
        title: "The Sovereign God",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/tjBsO7pt9aA?si=Asp2XC3ZHOmXF9M0",
      },
      {
        youtubeVideoId: "G3KO9tC5YOs",
        title: "The Holy God",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/G3KO9tC5YOs?si=S08cs6Z7jMmBKdDd",
      },
      {
        youtubeVideoId: "jHtcveEzqRM",
        title: "The Omnipotent God",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/jHtcveEzqRM?si=a0HGQlsyfl4sgAlG",
      },
    ],
  },
  {
    id: "heart-surgery",
    title: "Heart Surgery",
    description:
      "God is deeply concerned with the condition of your heart. In this series, discover how He examines, transforms, and restores it.",
    sermons: [
      {
        youtubeVideoId: "bHSHDJF_xEo",
        title: "Part 1",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/bHSHDJF_xEo?si=0sHWfitAiFRfsXS2",
      },
      {
        youtubeVideoId: "MbZKMsCBfWQ",
        title: "Part 2",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/MbZKMsCBfWQ?si=IrsZct1jkgj97RyQ",
      },
      {
        youtubeVideoId: "QkterdgepyM",
        title: "Part 3",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/QkterdgepyM?si=FVAUo4QT_nmYNsbW",
      },
      {
        youtubeVideoId: "WhWZbRu5_5Q",
        title: "Part 4",
        speaker: "Ps. Guelord Lukama",
        youtubeVideoUrl: "https://youtu.be/WhWZbRu5_5Q?si=3Jzae2ys3U-FoziT",
      },
    ],
  },
];
