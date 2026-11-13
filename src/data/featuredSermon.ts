import {
  getYouTubeThumbnailUrl,
  type Sermon,
} from "@/data/sermons";

type FeaturedSermon = Sermon & {
  youtubeChannelUrl: string;
  sermonsPageUrl: string;
  thumbnailUrl: string;
};

const youtubeVideoId = "qs27jNk2oz4";

export const featuredSermon: FeaturedSermon = {
  youtubeVideoId,
  title: "How To Preserve God In My Family",
  speaker: "Ps Guelord Lukama",
  youtubeVideoUrl: "https://youtu.be/qs27jNk2oz4?si=dq_ErZVIh4pH7LHk",
  youtubeChannelUrl: "https://www.youtube.com/@THERAMAHCHURCH",
  sermonsPageUrl: "/sermons",
  thumbnailUrl: getYouTubeThumbnailUrl(youtubeVideoId),
};
