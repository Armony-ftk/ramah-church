import {
  getYouTubeThumbnailUrl,
  type Sermon,
} from "@/data/sermons";

type FeaturedSermon = Sermon & {
  youtubeChannelUrl: string;
  sermonsPageUrl: string;
  thumbnailUrl: string;
};

const youtubeVideoId = "f6GpLn_qXog";

export const featuredSermon: FeaturedSermon = {
  youtubeVideoId,
  title: "God The Maker Of Man",
  speaker: "Ps Guelord Lukama",
  youtubeVideoUrl: "https://youtu.be/f6GpLn_qXog?si=e1f3yAFUKKs3VT5_",
  youtubeChannelUrl: "https://www.youtube.com/@THERAMAHCHURCH",
  sermonsPageUrl: "/sermons",
  thumbnailUrl: getYouTubeThumbnailUrl(youtubeVideoId),
};
