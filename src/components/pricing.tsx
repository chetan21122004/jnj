"use client";

import { useState } from "react";
import { pricing } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { Icon } from "./icon";
import { TabBar } from "./tab-bar";

export function Pricing({
  title = "OUR",
  accent = "PRICING",
}: {
  title?: string;
  accent?: string;
}) {
  const [active, setActive] = useState(0);
  return (
    <section id="prices" className="pricing-section section-pad">
      <div className="container">
        <div
          className="section-heading pricing-heading reference-heading"
          data-reveal="up"
        >
          <h2>
            {title} <span className="text-lime">{accent}</span>
          </h2>
          <span className="heading-rule" aria-hidden="true" />
          <p className="section-intro">
            Choose your jumping time. Make room for fun.
          </p>
          <TabBar
            id="pricing"
            labels={["Weekdays", "Weekends & special days"]}
            active={active}
            onChange={setActive}
            label="Choose pricing day"
          />
        </div>
        <div
          className="pricing-grid"
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${active}`}
          tabIndex={0}
          data-reveal-stagger="up"
        >
          {pricing.map((plan, index) => (
            <article
              className={`price-card ${index === 1 ? "featured" : ""}`}
              key={plan.minutes}
            >
              {index === 1 && (
                <span className="price-badge">
                  <Icon name="spark" size={14} />A LITTLE EXTRA JOY
                </span>
              )}
              <div className="price-card-top">
                <span className="plan-label">{plan.label}</span>
                <Icon name="ticket" size={24} />
              </div>
              <div className="duration">
                {plan.minutes}
                <span>MINUTES</span>
              </div>
              <p className="plan-detail">{plan.detail}</p>
              <div className="price-line">
                <span className="price tab-swap" key={active}>
                  ₹
                  {(active === 0 ? plan.weekday : plan.weekend).toLocaleString(
                    "en-IN",
                  )}
                </span>
                <span>
                  per person
                  <br />
                  taxes included
                </span>
              </div>
              <a
                className={`button ${index === 1 ? "button-white" : "button-outline"}`}
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappLink(
                  `Hi Jump N Joy! I'd like to enquire about the ${plan.minutes}-minute hourly plan for ${active === 0 ? "a weekday" : "a weekend or special day"}. Please confirm the current price and inclusions.`,
                )}
              >
                Enquire about this plan
                <Icon name="arrow-up" size={19} />
              </a>
            </article>
          ))}
        </div>
        <div className="pricing-notes" data-reveal="fade">
          <p>
            <Icon name="check" size={16} />
            Published hourly plans · Arcade games & zipline excluded
          </p>
          <p>
            <Icon name="check" size={16} />
            Grip socks required · ₹70 extra if needed
          </p>
        </div>
        <p className="pricing-disclaimer">
          Published website rates. Please confirm current prices and inclusions
          with our team. Weekend rates apply on Saturdays, Sundays, and public
          holidays.
        </p>
      </div>
    </section>
  );
}
