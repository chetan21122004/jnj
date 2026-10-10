import Link from "next/link";
import { whatsappLink } from "@/lib/enquiry";
import { Icon } from "./icon";

export function PageCta({
  eyebrow = "SEE YOU AT THE PARK",
  title,
  accent,
  text,
  message,
  secondary = { label: "View prices", href: "/prices" },
}: {
  eyebrow?: string;
  title: string;
  accent: string;
  text: string;
  message: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="page-cta">
      <div className="container">
        <div className="page-cta-inner" data-reveal="zoom">
          <span className="page-cta-ring" aria-hidden="true" />
          <div>
            <p className="eyebrow">
              <span />
              {eyebrow}
            </p>
            <h2>
              {title} <span>{accent}</span>
            </h2>
            <p>{text}</p>
          </div>
          <div className="page-cta-actions">
            <a
              className="button button-white"
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={19} />
              Enquire on WhatsApp
            </a>
            <Link className="button button-glass" href={secondary.href}>
              {secondary.label}
              <Icon name="arrow-up" size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
