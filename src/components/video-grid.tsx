"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./icon";

export function VideoGrid({
  videos,
}: {
  videos: readonly { id: string; title: string }[];
}) {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <div className="video-grid" data-reveal-stagger="up">
      {videos.map((video, index) => (
        <article className="video-card" key={video.id}>
          <div className="video-frame">
            {playing === video.id ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="video-poster"
                onClick={() => setPlaying(video.id)}
                aria-label={`Play video: ${video.title}`}
              >
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/oar2.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className="object-cover"
                />
                <span className="video-shade" aria-hidden="true" />
                <span className="video-play" aria-hidden="true">
                  <Icon name="play" size={26} />
                </span>
                <span className="video-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            )}
          </div>
          <div className="video-copy">
            <h3>{video.title}</h3>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="youtube" size={17} />
              Watch on YouTube
              <Icon name="arrow-up" size={14} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
