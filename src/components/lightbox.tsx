"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { Icon } from "./icon";

export type LightboxPhoto = { image: string; alt: string; caption: string };

export function Lightbox({
  dialog,
  photos,
  active,
  onChange,
  title = "JUMP N JOY GALLERY",
}: {
  dialog: RefObject<HTMLDialogElement | null>;
  photos: readonly LightboxPhoto[];
  active: number;
  onChange: (index: number) => void;
  title?: string;
}) {
  const photo = photos[active];
  const change = (direction: number) =>
    onChange((active + direction + photos.length) % photos.length);
  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-labelledby="lightbox-caption"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          change(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          change(-1);
        }
      }}
    >
      <div className="lightbox-toolbar">
        <span>
          {title}
          <strong>
            {active + 1} / {photos.length}
          </strong>
        </span>
        <button
          type="button"
          className="circle-button"
          aria-label="Close photo viewer"
          onClick={() => dialog.current?.close()}
        >
          <Icon name="close" />
        </button>
      </div>
      <figure>
        <div className="lightbox-image">
          <Image
            key={photo.image}
            src={photo.image}
            alt={photo.alt}
            fill
            sizes="90vw"
            className="object-contain tab-swap"
          />
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-prev"
            aria-label="Previous photo"
            onClick={() => change(-1)}
          >
            <Icon name="chevron" size={24} />
          </button>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-next"
            aria-label="Next photo"
            onClick={() => change(1)}
          >
            <Icon name="chevron" size={24} />
          </button>
        </div>
        <figcaption id="lightbox-caption">{photo.caption}</figcaption>
      </figure>
      <div className="lightbox-thumbs" aria-label="Choose a photo">
        {photos.map((item, index) => (
          <button
            type="button"
            key={item.image}
            className={index === active ? "active" : ""}
            aria-label={`Show photo ${index + 1}: ${item.caption}`}
            aria-current={index === active}
            onClick={() => onChange(index)}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </dialog>
  );
}
