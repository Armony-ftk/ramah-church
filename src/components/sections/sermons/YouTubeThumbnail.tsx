"use client";

import Image from "next/image";
import { useState } from "react";

import { getYouTubeThumbnailUrl } from "@/data/sermons";

type YouTubeThumbnailProps = {
  videoId: string;
  alt: string;
  sizes: string;
  className?: string;
};

export default function YouTubeThumbnail({
  videoId,
  alt,
  sizes,
  className,
}: YouTubeThumbnailProps) {
  const fallbackUrl = getYouTubeThumbnailUrl(videoId, "hqdefault");
  const [thumbnailUrl, setThumbnailUrl] = useState(() =>
    getYouTubeThumbnailUrl(videoId),
  );

  return (
    <Image
      src={thumbnailUrl}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (thumbnailUrl !== fallbackUrl) {
          setThumbnailUrl(fallbackUrl);
        }
      }}
    />
  );
}
