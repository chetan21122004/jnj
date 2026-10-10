"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "./icon";
import { Lightbox, type LightboxPhoto } from "./lightbox";

export function PhotoGrid({ photos }: { photos: readonly LightboxPhoto[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="photo-grid" data-reveal-stagger="zoom">
        {photos.map((photo, index) => (
          <button
            type="button"
            key={photo.image}
            className="photo-tile"
            aria-label={`Photo ${index + 1} of ${photos.length}: ${photo.alt}. Open full screen.`}
            onClick={() => {
              setActive(index);
              dialog.current?.showModal();
            }}
          >
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              sizes="(max-width: 599px) 50vw, (max-width: 1023px) 33vw, 25vw"
              className="object-cover"
            />
            <span className="photo-tile-shade" aria-hidden="true" />
            <span className="photo-tile-expand" aria-hidden="true">
              <Icon name="expand" size={18} />
            </span>
          </button>
        ))}
      </div>
      <Lightbox
        dialog={dialog}
        photos={photos}
        active={active}
        onChange={setActive}
        title="JUMP N JOY PHOTOS"
      />
    </>
  );
}
