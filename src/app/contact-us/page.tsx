import { ContactSection } from "@/components/contact-section";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { business } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { offices } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Jump N Joy Trampoline Park, Moshi, Pune. Call +91 91300 02641, WhatsApp us, or visit us. Open every day, 10 AM – 10 PM.",
  path: "/contact-us",
  image: "/images/venue-3.webp",
});

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="WE’D LOVE TO HEAR FROM YOU"
        title="CONTACT"
        accent="US"
        description="Questions, party plans, or school trips? Call, WhatsApp, or drop by. Our team is happy to help."
        image="/images/venue-3.webp"
        crumb="Contact Us"
      />
      <section className="section-pad offices-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              GET IN TOUCH <span className="text-brand">WITH US</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">
              Open every day, Monday to Sunday, 10 AM – 10 PM.
            </p>
          </div>
          <div className="office-grid" data-reveal-stagger="up">
            {offices.map((office, index) => (
              <article
                key={office.name}
                className={`office-card ${index === 0 ? "primary" : ""}`}
              >
                <span className="office-label">
                  <Icon name={index === 0 ? "spark" : "info"} size={14} />
                  {office.label}
                </span>
                <h3>{office.name}</h3>
                <p className="office-line">
                  <Icon name="pin" size={19} />
                  {office.address}
                </p>
                <a className="office-line" href={`tel:+${office.phoneDigits}`}>
                  <Icon name="phone" size={19} />
                  {office.phone}
                </a>
                <a className="office-line" href={`mailto:${office.email}`}>
                  <Icon name="mail" size={19} />
                  {office.email}
                </a>
              </article>
            ))}
            <article className="office-card office-actions">
              <span className="office-label">
                <Icon name="clock" size={14} />
                Park hours
              </span>
              <h3>Mon – Sun</h3>
              <p className="office-hours">10:00 AM – 10:00 PM</p>
              <a
                className="button button-white"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={19} />
                WhatsApp now
              </a>
              <a
                className="button button-glass"
                href={`tel:+${business.phoneDigits}`}
              >
                <Icon name="phone" size={18} />
                Call now
              </a>
            </article>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
