export type Sermon = {
  youtubeVideoId: string;
  title: string;
  speaker: string;
  youtubeVideoUrl: string;
  youtubeChannelUrl: string;
  sermonsPageUrl: string;
  thumbnailUrl: string;
};

const youtubeVideoId = "f6GpLn_qXog";

export const featuredSermon: Sermon = {
  youtubeVideoId,
  title: "God The Maker Of Man",
  speaker: "Ps Guelord Lukama",
  youtubeVideoUrl: "https://youtu.be/f6GpLn_qXog?si=e1f3yAFUKKs3VT5_",
  youtubeChannelUrl: "https://www.youtube.com/@THERAMAHCHURCH",
  sermonsPageUrl: "/sermons",
  thumbnailUrl: `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`,
};
