import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { PageCta } from "@/components/page-cta";
import { Pricing } from "@/components/pricing";
import {
  cardNotes,
  cardRecharge,
  offerPlan,
  parkRules,
  regularPlan,
  schoolTripPlan,
  timeBasedPlan,
  type ExchangePlan,
} from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Prices & Offers",
  description:
    "Jump N Joy prices: card recharge offers, hourly trampoline plans from ₹700, activity rates, school trip offers, and arcade game rates. All prices include taxes.",
  path: "/prices",
  image: "/images/venue-2.webp",
});

const rupees = (value: number) => `₹${value.toLocaleString("en-IN")}`;

function ExchangeTable({
  title,
  plans,
  tone,
}: {
  title: string;
  plans: ExchangePlan[];
  tone: "blue" | "orange";
}) {
  return (
    <article className={`rate-card rate-${tone}`}>
      <header>
        <Icon name="ticket" size={22} />
        <h3>{title}</h3>
      </header>
      <table>
        <thead>
          <tr>
            <th scope="col">You pay</th>
            <th scope="col">You get</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.pay}>
              <td>{rupees(plan.pay)}</td>
              <td>
                <strong>{rupees(plan.get)}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default function PricesPage() {
  return (
    <>
      <PageBanner
        eyebrow="MORE PLAY FOR YOUR MONEY"
        title="OFFERS &"
        accent="PRICES"
        description="Recharge your card, pick a plan, and play your way. All prices are inclusive of taxes."
        image="/images/venue-2.webp"
        crumb="Prices"
      />
      <section id="recharge" className="section-pad recharge-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              CARD RECHARGE <span className="text-brand">PLANS</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">
              Offer plan subject to ongoing promotions and validity; terms and
              conditions apply.
            </p>
          </div>
          <div className="recharge-grid" data-reveal-stagger="up">
            {cardRecharge.map((plan, index) => (
              <article
                key={plan.pay}
                className={`recharge-card ${plan.perk ? "has-perk" : ""} ${index === cardRecharge.length - 1 ? "best" : ""}`}
              >
                {index === cardRecharge.length - 1 && (
                  <span className="recharge-badge">
                    <Icon name="star" size={13} />
                    BEST VALUE
                  </span>
                )}
                <span className="recharge-label">You pay</span>
                <span className="recharge-pay">{rupees(plan.pay)}</span>
                <span className="recharge-arrow" aria-hidden="true">
                  <Icon name="arrow" size={18} />
                </span>
                <span className="recharge-label">You get</span>
                <strong className="recharge-get">{rupees(plan.get)}</strong>
                <span className="recharge-bonus">
                  +{rupees(plan.get - plan.pay)} bonus
                </span>
                {plan.perk && (
                  <span className="recharge-perk">
                    <Icon name="spark" size={14} />
                    {plan.perk}
                  </span>
                )}
              </article>
            ))}
          </div>
          <div className="recharge-extras" data-reveal="up">
            <span>
              <Icon name="ticket" size={18} />
              New card recharge <strong>₹35</strong>
            </span>
            <span>
              <Icon name="check" size={18} />
              Grip socks <strong>₹70</strong>
            </span>
          </div>
        </div>
      </section>
      <section className="section-pad plans-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              REGULAR & OFFER <span className="text-brand">PLANS</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="plans-grid" data-reveal-stagger="up">
            <ExchangeTable title="Regular Plan" plans={regularPlan} tone="blue" />
            <ExchangeTable title="Offer Plan" plans={offerPlan} tone="orange" />
          </div>
          <ul className="note-list" data-reveal="fade">
            {cardNotes.map((note) => (
              <li key={note}>
                <Icon name="check" size={16} />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Pricing title="HOURLY" accent="PLAN" />
      <section className="section-pad activity-rates">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              TIME BASE <span className="text-brand">PLAN</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">Age group: 2–60 years</p>
          </div>
          <div className="rate-table-wrap" data-reveal="up">
            <table className="rate-table">
              <thead>
                <tr>
                  <th scope="col">Activity</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Weekdays</th>
                  <th scope="col">Weekends / special days</th>
                </tr>
              </thead>
              <tbody>
                {timeBasedPlan.map((row) => (
                  <tr key={row.activity}>
                    <th scope="row">{row.activity}</th>
                    <td data-label="Duration">{row.duration}</td>
                    <td data-label="Weekdays">{rupees(row.weekday)}</td>
                    <td data-label="Weekends">
                      <strong>{rupees(row.weekend)}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="special-grid" data-reveal-stagger="up">
            <article className="special-card">
              <span className="special-icon">
                <Icon name="users" size={24} />
              </span>
              <h3>Special offers for school trips</h3>
              <p>Age group: 3–15 years · Grip socks included</p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Hours</th>
                    <th scope="col">Weekdays</th>
                    <th scope="col">Weekends & holidays</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolTripPlan.map((row) => (
                    <tr key={row.duration}>
                      <th scope="row">{row.duration}</th>
                      <td>{rupees(row.weekday)}</td>
                      <td>{rupees(row.weekend)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
            <article className="special-card special-arcade">
              <span className="special-icon">
                <Icon name="gamepad" size={24} />
              </span>
              <h3>Arcade games</h3>
              <p>Age group: 2–60 years</p>
              <ul>
                <li>
                  <strong>25+</strong> arcade games for kids and adults
                </li>
                <li>
                  Arcade games from <strong>₹70 to ₹100</strong>
                </li>
                <li>
                  VR games from <strong>₹150 to ₹200</strong>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <section className="section-pad rules-section">
        <div className="container rules-inner" data-reveal="up">
          <div>
            <p className="eyebrow">
              <span />
              ATTENTION
            </p>
            <h2>
              BEFORE YOU <span>BOUNCE</span>
            </h2>
          </div>
          <ol className="rules-list" data-reveal-stagger="up">
            {parkRules.map((rule, index) => (
              <li key={rule}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <PageCta
        title="FOUND YOUR"
        accent="PLAN?"
        text="Prices are as published on our website. Message us to confirm current rates, offers, and inclusions before your visit."
        message="Hi Jump N Joy! I'd like to confirm current prices and offers."
        secondary={{ label: "See attractions", href: "/attraction" }}
      />
    </>
  );
}
