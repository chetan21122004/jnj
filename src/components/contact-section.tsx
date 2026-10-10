import { business } from "@/lib/content";
import { EnquiryForm } from "./enquiry-form";
import { Icon } from "./icon";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal-stagger="left">
          <p className="eyebrow">
            <span />
            SEE YOU SOON?
          </p>
          <h2>
            COME FOR THE FUN.
            <br />
            <span>STAY FOR THE JOY.</span>
          </h2>
          <p>
            Your next family day, birthday, or spontaneous adventure is just a
            hello away.
          </p>
          <div className="contact-details">
            <a
              href={business.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <Icon name="pin" size={23} />
              </span>
              <span>
                <strong>FIND YOUR WAY HERE</strong>
                {business.address}
                <em>
                  Get directions
                  <Icon name="arrow-up" size={15} />
                </em>
              </span>
            </a>
            <a href={`tel:+${business.phoneDigits}`}>
              <span className="contact-icon">
                <Icon name="phone" size={22} />
              </span>
              <span>
                <strong>GIVE US A CALL</strong>
                {business.phone}
              </span>
            </a>
            <div>
              <span className="contact-icon">
                <Icon name="clock" size={23} />
              </span>
              <span>
                <strong>MAKE TIME FOR PLAY</strong>
                {business.hours}
              </span>
            </div>
          </div>
        </div>
        <div data-reveal="right">
          <EnquiryForm />
        </div>
      </div>
      <div className="container contact-map" data-reveal="zoom">
        <iframe
          src={business.mapEmbed}
          title="Map showing Jump N Joy Trampoline Park in Moshi, Pune"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
