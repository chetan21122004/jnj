"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/lib/content";
import { Icon } from "./icon";
import { Lightbox } from "./lightbox";

const accents = ["lime", "orange", "blue"] as const;

export function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const step = () => {
    const element = track.current;
    const card = element?.firstElementChild as HTMLElement | null;
    if (!element || !card) return 0;
    return card.offsetWidth + parseFloat(getComputedStyle(element).columnGap);
  };
  const [pages, setPages] = useState<number>(gallery.length);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const measure = () => {
      const card = element.firstElementChild as HTMLElement | null;
      if (!card) return;
      const width =
        card.offsetWidth + parseFloat(getComputedStyle(element).columnGap);
      setPages(
        Math.round((element.scrollWidth - element.clientWidth) / width) + 1,
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const goTo = useCallback((index: number) => {
    const element = track.current;
    const card = element?.firstElementChild as HTMLElement | null;
    if (!element || !card) return;
    const width =
      card.offsetWidth + parseFloat(getComputedStyle(element).columnGap);
    const last = Math.round((element.scrollWidth - element.clientWidth) / width);
    const target = index > last ? 0 : index < 0 ? last : index;
    element.scrollTo({ left: target * width, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlaying(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!playing || interacting) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") goTo(slide + 1);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [playing, interacting, slide, goTo]);

  return (
    <>
      <div
        className="gallery-slider"
        data-reveal="up"
        aria-roledescription="carousel"
        aria-label="Jump N Joy photo gallery"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocusCapture={() => setInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setInteracting(false);
        }}
        onTouchStart={() => setInteracting(true)}
      >
        <div
          ref={track}
          className="gallery-track"
          onScroll={(event) => {
            const width = step();
            if (width)
              setSlide(Math.round(event.currentTarget.scrollLeft / width));
          }}
        >
          {gallery.map((item, index) => (
            <button
              type="button"
              key={item.image}
              className={`gallery-item gallery-${accents[index % accents.length]}`}
              aria-label={`Photo ${index + 1} of ${gallery.length}: ${item.alt}. Open full screen.`}
              onClick={() => {
                setActive(index);
                dialog.current?.showModal();
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 599px) 85vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover"
              />
              <span className="gallery-shade" aria-hidden="true" />
              <span className="gallery-number" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="gallery-caption">
                <span className="gallery-caption-bar" aria-hidden="true" />
                {item.caption}
              </span>
              <span className="gallery-expand" aria-hidden="true">
                <Icon name="expand" size={18} />
              </span>
            </button>
          ))}
        </div>
        <div className="gallery-controls">
          <span className="gallery-count">
            <strong>0{Math.min(slide + 1, pages)}</strong> / 0{pages}
          </span>
          <div className="gallery-dots">
            {Array.from({ length: pages }, (_, index) => (
              <button
                type="button"
                key={index}
                className={index === Math.min(slide, pages - 1) ? "active" : ""}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === Math.min(slide, pages - 1)}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <div className="gallery-buttons">
            <button
              type="button"
              className="carousel-play gallery-play"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause gallery autoplay" : "Play gallery autoplay"}
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-prev"
              aria-label="Previous photos"
              onClick={() => goTo(slide - 1)}
            >
              <Icon name="chevron" size={22} />
            </button>
            <button
              type="button"
              className="gallery-arrow"
              aria-label="Next photos"
              onClick={() => goTo(slide + 1)}
            >
              <Icon name="chevron" size={22} />
            </button>
          </div>
        </div>
      </div>
      <Lightbox
        dialog={dialog}
        photos={gallery}
        active={active}
        onChange={setActive}
      />
    </>
  );
}
