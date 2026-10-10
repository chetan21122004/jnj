import Image from "next/image";
import Link from "next/link";
import { business, events } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { Icon } from "./icon";

const exploreLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Prices & plans", href: "/prices" },
  { label: "Photos", href: "/photos" },
  { label: "Videos", href: "/videos" },
  { label: "Contact us", href: "/contact-us" },
];

const attractionLinks = [
  { label: "All attractions", href: "/attraction" },
  { label: "Trampoline arena", href: "/attraction#free-jump-area" },
  { label: "Arcade & VR games", href: "/arcade-games" },
  { label: "Kids’ play zone", href: "/attraction#kids-play-zone" },
  { label: "Adventure zone", href: "/attraction#adventure-zone" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main" data-reveal-stagger="up">
        <div className="footer-brand">
          <Link href="/" aria-label="Jump N Joy home">
            <Image
              src="/images/logo.webp"
              width={100}
              height={100}
              alt="Jump N Joy"
            />
          </Link>
          <p>
            Your place for trampolines, arcade adventures, and celebrations in
            Moshi, Pune / PCMC.
          </p>
          <a className="footer-contact" href={`tel:+${business.phoneDigits}`}>
            <Icon name="phone" size={17} />
            {business.phone}
          </a>
          <a className="footer-contact" href={`mailto:${business.email}`}>
            <Icon name="mail" size={17} />
            {business.email}
          </a>
          <p className="footer-hours">
            <Icon name="clock" size={15} />
            Every day · 10 AM – 10 PM
          </p>
        </div>
        <nav className="footer-group" aria-label="Explore Jump N Joy">
          <h3>Explore Jump N Joy</h3>
          {exploreLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="footer-group" aria-label="Parties and celebrations">
          <h3>Parties & Celebrations</h3>
          {events.map((event) => (
            <a
              key={event.type}
              href={whatsappLink(
                `Hi Jump N Joy! I'd like to enquire about ${event.label.toLowerCase()}. Please share your available options.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.label}
            </a>
          ))}
        </nav>
        <nav className="footer-group" aria-label="Park attractions">
          <h3>Attractions</h3>
          {attractionLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-group">
          <h3>Legal & Social</h3>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/#faqs">Visitor FAQs</Link>
          <h4>Follow the fun</h4>
          <div className="footer-socials">
            {business.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`Jump N Joy on ${social.label}`}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name={
                    social.label === "Instagram"
                      ? "instagram"
                      : social.label === "Facebook"
                        ? "facebook"
                        : "youtube"
                  }
                  size={18}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Jump N Joy. All rights reserved.</p>
          <span>A little more play. A whole lot of joy.</span>
          <a
            href={business.directions}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="pin" size={14} />
            Moshi, Pune / PCMC
            <Icon name="arrow-up" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
