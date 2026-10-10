"use client";

import { useState, type FormEvent } from "react";
import { events } from "@/lib/content";
import { partyMessage, todayInIndia, whatsappLink } from "@/lib/enquiry";
import { Icon } from "./icon";

export function EnquiryForm() {
  const [type, setType] = useState("Birthday");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (date && date < todayInIndia()) {
      setError("Please choose today or a future date.");
      return;
    }
    if (guests && (!Number.isInteger(Number(guests)) || Number(guests) < 1)) {
      setError("Please enter a positive whole number for your group size.");
      return;
    }
    setError("");
    window.open(
      whatsappLink(partyMessage(type, date, guests)),
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <form className="enquiry-form" onSubmit={submit}>
      <span className="eyebrow">LET’S MAKE A PLAN</span>
      <h3>
        A GOOD TIME
        <br />
        STARTS WITH A HELLO.
      </h3>
      <p>Tell us a little about your day. We’ll take it from there.</p>
      <label htmlFor="event-type">What are we celebrating?</label>
      <select
        id="event-type"
        name="eventType"
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        {events.map((item) => (
          <option key={item.type} value={item.type}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="form-row">
        <div>
          <label htmlFor="party-date">
            Preferred date <span>(optional)</span>
          </label>
          <input
            id="party-date"
            name="date"
            type="date"
            value={date}
            onFocus={(event) => {
              event.currentTarget.min = todayInIndia();
            }}
            onChange={(event) => {
              setDate(event.target.value);
              setError("");
            }}
          />
        </div>
        <div>
          <label htmlFor="group-size">
            Group size <span>(optional)</span>
          </label>
          <input
            id="group-size"
            name="guests"
            type="number"
            min="1"
            step="1"
            placeholder="How many people?"
            value={guests}
            onChange={(event) => {
              setGuests(event.target.value);
              setError("");
            }}
          />
        </div>
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="button button-blue" type="submit">
        Continue on WhatsApp
        <Icon name="whatsapp" size={21} />
      </button>
      <p className="form-note">
        Opens WhatsApp for you to send your enquiry. No payment or confirmed
        booking at this step.
      </p>
    </form>
  );
}

