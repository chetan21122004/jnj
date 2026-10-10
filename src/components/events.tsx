"use client";

import Image from "next/image";
import { useState } from "react";
import { events } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { Icon } from "./icon";
import { TabBar } from "./tab-bar";

export function Events() {
  const [active, setActive] = useState(0);
  const event = events[active];
  return (
    <section id="parties" className="events-section section-pad">
      <div className="container">
        <div className="section-heading reference-heading" data-reveal="up">
          <h2>JUMP N JOY EVENTS</h2>
          <span className="heading-rule" aria-hidden="true" />
        </div>
        <div data-reveal="up">
          <TabBar
            id="events"
            labels={events.map((item) => item.label)}
            active={active}
            onChange={setActive}
            label="Choose event type"
            className="event-tabs"
          />
        </div>
        <div
          className="event-panel"
          id="events-panel"
          role="tabpanel"
          aria-labelledby={`events-tab-${active}`}
          tabIndex={0}
          data-reveal="zoom"
        >
          <div className="event-image tab-swap" key={`image-${active}`}>
            <Image
              src={event.image}
              alt={event.alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="event-image-tag">
              <Icon name="spark" size={18} />
              YOUR PEOPLE. YOUR PARTY.
            </span>
          </div>
          <div className="event-copy tab-swap" key={`copy-${active}`}>
            <span className="event-count">
              0{active + 1} / THE GOOD TIMES COLLECTION
            </span>
            <h3>
              {event.title.split("\n").map((line, index) => (
                <span key={line} className={index ? "text-brand" : ""}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <p>{event.description}</p>
            <ul>
              {event.highlights.map((highlight) => (
                <li key={highlight}>
                  <Icon name="check" size={17} />
                  {highlight}
                </li>
              ))}
            </ul>
            <a
              className="button button-blue"
              href={whatsappLink(
                `Hi Jump N Joy! I'd like to enquire about ${event.label.toLowerCase()}. Please share available options and current prices.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s plan your{" "}
              {event.type === "School"
                ? "trip"
                : event.type === "Corporate"
                  ? "outing"
                  : "party"}
              <Icon name="arrow-up" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
