"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { Icon } from "./icon";

export function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [interacting, setInteracting] = useState(false);
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
      if (document.visibilityState === "visible") {
        setActive((index) => (index + 1) % heroSlides.length);
      }
    }, 6000);
    return () => window.clearInterval(timer);
  }, [playing, interacting]);
  const slide = heroSlides[active];
  const change = (direction: number) =>
    setActive(
      (index) => (index + direction + heroSlides.length) % heroSlides.length,
    );
  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Discover Jump N Joy"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setInteracting(false);
      }}
    >
      <div className="hero-photo" key={`photo-${active}`}>
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          sizes="100vw"
          preload={active === 0}
          loading={active === 0 ? undefined : "eager"}
          className="object-cover"
        />
      </div>
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div
          key={`content-${active}`}
          className="hero-content"
          aria-live={playing ? "off" : "polite"}
          aria-atomic="true"
        >
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            {slide.eyebrow}
          </p>
          <h1 className="hero-title">
            {slide.lead}
            <br />
            {slide.middle} <span>{slide.accent}</span>
          </h1>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-buttons">
            <a
              className="button button-blue"
              href={whatsappLink(slide.context)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {slide.cta}
              <Icon name="arrow-up" />
            </a>
            <a className="button button-glass" href="#attractions">
              Explore attractions
              <Icon name="arrow" />
            </a>
          </div>
          <div className="hero-location">
            <Icon name="pin" size={17} />
            <span>Moshi, Pune / PCMC</span>
            <span className="hero-location-divider" />
            <span>INDOOR FUN. ALL YEAR ROUND.</span>
          </div>
        </div>
        <div className="hero-photo-label">
          <span className="status-dot" />
          {slide.label}
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <Icon name="spark" size={29} />
          <span>
            JUMP. PLAY.
            <br />
            REPEAT.
          </span>
        </div>
        <div className="hero-controls">
          <button
            type="button"
            className="carousel-play"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause hero autoplay" : "Start hero autoplay"}
          >
            {playing ? "Pause" : "Play"}
          </button>
          <span className="slide-number">
            0{active + 1}
            <span> / 0{heroSlides.length}</span>
          </span>
          <div className="slide-dots">
            {heroSlides.map((item, index) => (
              <button
                type="button"
                key={item.accent}
                className={index === active ? "active" : ""}
                aria-label={`Go to slide ${index + 1}: ${item.lead} ${item.middle} ${item.accent}`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="circle-button hero-prev"
            aria-label="Previous hero slide"
            onClick={() => change(-1)}
          >
            <Icon name="arrow" />
          </button>
          <button
            type="button"
            className="circle-button"
            aria-label="Next hero slide"
            onClick={() => change(1)}
          >
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
