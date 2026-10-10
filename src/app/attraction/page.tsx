import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { PageCta } from "@/components/page-cta";
import { ReadMore } from "@/components/read-more";
import { whatsappLink } from "@/lib/enquiry";
import { parkAttractions, timeBasedPlan } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Attractions",
  description:
    "Explore 16 attractions at Jump N Joy, Moshi: trampolines, foam fit, kids play zone, adventure zone, wall climbing, zipline, VR and arcade games, party hall, and cafeteria.",
  path: "/attraction",
  image: "/images/trampoline.webp",
});

const accents = ["lime", "orange", "blue"] as const;

const pricedActivity: Record<string, string> = {
  "kids-play-zone": "Kids Play Zone",
  "plane-trampoline": "Plane Trampoline",
  "adventure-zone": "Adventure Zone",
  "stairway-activity": "Stairway Activity",
  "wall-climbing": "Wall Climber",
  zipline: "Zip Line",
};

function priceFor(slug: string) {
  const plan = timeBasedPlan.find((row) => row.activity === pricedActivity[slug]);
  return plan && `From ₹${plan.weekday} · ${plan.duration}`;
}

export default function AttractionPage() {
  return (
    <>
      <PageBanner
        eyebrow="16 WAYS TO PLAY"
        title="OUR"
        accent="ATTRACTIONS"
        description="Bounce, climb, zip, and play. From soft play for little ones to adventure zones for thrill-seekers, there’s something for every age at Jump N Joy."
        image="/images/trampoline.webp"
        crumb="Attractions"
      />
      <section className="section-pad attraction-index">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              PICK YOUR <span className="text-brand">ADVENTURE</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">
              Tap an attraction to jump straight to it.
            </p>
          </div>
          <nav
            className="chip-nav"
            aria-label="Jump to an attraction"
            data-reveal-stagger="pop"
          >
            {parkAttractions.map((item, index) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className={`chip accent-${accents[index % accents.length]}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="attraction-list" aria-label="All attractions">
        <div className="container">
          {parkAttractions.map((item, index) => {
            const accent = accents[index % accents.length];
            const price = priceFor(item.slug);
            const reverse = index % 2 === 1;
            return (
              <article
                key={item.slug}
                id={item.slug}
                className={`attraction-row accent-${accent} ${reverse ? "reverse" : ""}`}
              >
                <div
                  className={`attraction-row-media ${item.cutout ? "cutout" : "photo"}`}
                  data-reveal={reverse ? "right" : "left"}
                >
                  <span className="attraction-row-blob" aria-hidden="true" />
                  <Image
                    src={item.image}
                    alt={`${item.title} at Jump N Joy Trampoline Park, Moshi`}
                    fill
                    sizes="(max-width: 767px) 90vw, 45vw"
                    className={item.cutout ? "object-contain" : "object-cover"}
                  />
                  <span className="attraction-row-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="attraction-row-copy" data-reveal-stagger="up">
                  <span className="attraction-row-category">
                    <Icon name="spark" size={14} />
                    {item.category}
                  </span>
                  <h3>{item.title}</h3>
                  <ReadMore text={item.description} />
                  <div className="attraction-row-actions">
                    {price && (
                      <Link href="/prices" className="price-pill">
                        <Icon name="ticket" size={16} />
                        {price}
                      </Link>
                    )}
                    <a
                      className="text-link"
                      href={whatsappLink(
                        `Hi Jump N Joy! I'd like to know more about the ${item.title}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask about {item.title}
                      <Icon name="arrow-up" size={17} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <PageCta
        title="READY TO"
        accent="JUMP IN?"
        text="Pick your favourite attractions and plan your visit. Our team is happy to help with timings, prices, and group bookings."
        message="Hi Jump N Joy! I'd like to plan a visit to your park."
      />
    </>
  );
}
