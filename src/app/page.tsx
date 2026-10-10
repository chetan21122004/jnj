import Image from "next/image";
import Link from "next/link";
import { InstagramReels } from "@/components/instagram-reels";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Events } from "@/components/events";
import { Gallery } from "@/components/gallery";
import { ContactSection } from "@/components/contact-section";
import { Icon } from "@/components/icon";
import { attractions, business, faqs } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jump N Joy Trampoline Park",
  url: "https://jumpnjoy.co.in/",
  image:
    "https://jumpnjoy.co.in/wp-content/uploads/2024/08/New-Project-70.webp",
  telephone: `+${business.phoneDigits}`,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gat No. 452/1/1, Tapkir Nagar, Moshi, Gandharva Nagari, Alandi",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "412105",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  sameAs: business.socials.map((social) => social.href),
};

export default function Home() {
  return (
    <>
        <Hero />
        <section id="attractions" className="section-pad attractions-section">
          <div className="container">
            <div className="section-heading reference-heading" data-reveal="up">
              <h2>
                INDOOR ADVENTURES IN
                <br />
                <span className="text-brand">MOSHI, PUNE / PCMC</span>
              </h2>
              <span className="heading-rule" aria-hidden="true" />
              <p className="section-intro">
                Jump, play, and celebrate. Find your kind of fun at Jump N Joy.
              </p>
            </div>
            <div className="attraction-grid" data-reveal-stagger="up">
              {attractions.map((item, index) => (
                <Link
                  href={item.href}
                  className={`attraction-card accent-${item.color}`}
                  key={item.title}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="attraction-shade" />
                  <span className="attraction-number">0{index + 1}</span>
                  <div className="attraction-copy">
                    <span className="attraction-eyebrow">{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="attraction-arrow">
                    <Icon name="arrow-up" size={22} />
                  </span>
                </Link>
              ))}
            </div>
            <div className="extra-attractions" data-reveal-stagger="pop">
              <span>AND THERE’S MORE</span>
              {[
                ["Wall climbing", "wall-climbing"],
                ["Zipline", "zipline"],
                ["Party hall", "birthday-party-hall"],
                ["Cafeteria", "cafeteria"],
              ].map(([item, slug]) => (
                <Link href={`/attraction#${slug}`} key={item}>
                  <Icon name="plus" size={15} />
                  {item}
                </Link>
              ))}
              <Link href="/attraction">
                <Icon name="arrow-up" size={15} />
                See all attractions
              </Link>
            </div>
          </div>
        </section>
        <Pricing />
        <Events />
        <section id="about" className="about-section section-pad">
          <div className="container about-grid">
            <div className="about-images" data-reveal="left">
              <div className="about-main-photo">
                <Image
                  src="/images/venue-6.webp"
                  alt="The colorful indoor activity floor at Jump N Joy"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="about-small-photo">
                <Image
                  src="/images/venue-2.webp"
                  alt="Foam pit and jumping area at Jump N Joy"
                  fill
                  sizes="(max-width: 767px) 40vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="about-sticker">
                <Icon name="spark" size={25} />
                <span>
                  LESS ORDINARY.
                  <br />
                  MORE JOY.
                </span>
              </div>
            </div>
            <div className="about-copy" data-reveal-stagger="right">
              <p className="eyebrow">
                <span />
                HELLO, WE’RE JUMP N JOY
              </p>
              <h2>
                YOUR HAPPY PLACE.
                <br />
                <span className="text-brand">RIGHT HERE IN PUNE.</span>
              </h2>
              <p>
                Some days call for a little more adventure. A higher jump. One
                more game. A celebration with all your favorite people.
              </p>
              <p>
                That’s what Jump N Joy is here for. Our trampoline park, arcade,
                and activity zones in Moshi bring families and friends together
                for a day of indoor fun.
              </p>
              <div className="about-facts">
                <div>
                  <Icon name="pin" size={22} />
                  <span>
                    <strong>Moshi, Pune / PCMC</strong>Close to your next great
                    day
                  </span>
                </div>
                <div>
                  <Icon name="clock" size={22} />
                  <span>
                    <strong>10 AM – 10 PM</strong>Open every day of the week
                  </span>
                </div>
              </div>
              <a
                href={business.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Come find your joy
                <Icon name="arrow-up" size={20} />
              </a>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-section section-pad">
          <div className="container">
            <div className="section-heading reference-heading" data-reveal="up">
              <div>
                <p className="eyebrow">
                  <span />A LITTLE PEEK INSIDE
                </p>
                <h2>
                  THIS IS WHAT
                  <br />
                  <span className="text-brand">JOY LOOKS LIKE.</span>
                </h2>
              </div>
              <span className="heading-rule" aria-hidden="true" />
              <a
                className="button button-blue gallery-instagram"
                href={business.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={19} />
                Follow the fun on Instagram
                <Icon name="arrow-up" size={16} />
              </a>
            </div>
            <Gallery />
            <div className="gallery-more" data-reveal="up">
              <Link href="/photos" className="text-link">
                See all photos
                <Icon name="arrow-up" size={18} />
              </Link>
              <Link href="/videos" className="text-link">
                Watch our videos
                <Icon name="arrow-up" size={18} />
              </Link>
            </div>
          </div>
        </section>
        <InstagramReels />
        <section id="faqs" className="faq-section section-pad">
          <div className="container faq-grid">
            <div data-reveal="up">
              <p className="eyebrow">
                <span />
                BEFORE YOU BOUNCE
              </p>
              <h2>
                A FEW THINGS
                <br />
                <span className="text-brand">TO KNOW.</span>
              </h2>
              <p className="section-intro">
                A little planning goes a long way.
                <br />
                We’re here if you need a hand.
              </p>
              <a
                href={whatsappLink(
                  "Hi Jump N Joy! I have a question about visiting your park.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Ask us on WhatsApp
                <Icon name="arrow-up" size={18} />
              </a>
            </div>
            <div className="faq-list" data-reveal-stagger="up">
              {faqs.map((faq, index) => (
                <details name="visitor-faq" key={faq.question}>
                  <summary>
                    <span className="faq-number">0{index + 1}</span>
                    <span>{faq.question}</span>
                    <Icon name="plus" size={19} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
