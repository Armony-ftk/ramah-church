export type Sermon = {
  youtubeVideoId: string;
  title: string;
  speaker: string;
  youtubeVideoUrl: string;
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
    youtubeVideoUrl:
      "https://youtu.be/dStRn1TVVBs?si=YvBUF49SdMvVrodZ",
  },
  {
    youtubeVideoId: "r-5_MkrPBcs",
    title: "Who Is Like You, Lord?",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl:
      "https://youtu.be/r-5_MkrPBcs?si=MTDf9JAQ-a874nYv",
  },
  {
    youtubeVideoId: "JevDE_8TNbg",
    title: "The Immutable God",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl:
      "https://youtu.be/JevDE_8TNbg?si=tozxzXjLwaYrhhbJ",
  },
  {
    youtubeVideoId: "G3KO9tC5YOs",
    title: "How Holy Is God?",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl:
      "https://youtu.be/G3KO9tC5YOs?si=Wrezg-k1oMX5wA1O",
  },
  {
    youtubeVideoId: "jHtcveEzqRM",
    title: "The Omnipotent God",
    speaker: "Ps. Guelord Lukama",
    youtubeVideoUrl:
      "https://youtu.be/jHtcveEzqRM?si=k1AK1IncvsGs8egx",
  },
];
