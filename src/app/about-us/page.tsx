import Image from "next/image";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { PageCta } from "@/components/page-cta";
import { aboutValues, founders, parkFormat } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Jump N Joy is Pune/PCMC’s destination for action-packed fun: a trampoline park and arcade games zone in Moshi, built on excellence, innovation, quality, safety, and community.",
  path: "/about-us",
  image: "/images/site/about/about-hero.webp",
});

const accents = ["lime", "orange", "blue", "orange", "lime"] as const;

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="HELLO, WE’RE JUMP N JOY"
        title="ABOUT"
        accent="US"
        description="The ultimate destination in Pune / PCMC for action-packed fun, where families and friends come together to bounce, play, and celebrate."
        image="/images/venue-6.webp"
        crumb="About Us"
      />
      <section className="section-pad about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-media" data-reveal="left">
            <span className="about-intro-blob" aria-hidden="true" />
            <Image
              src="/images/site/about/about-hero.webp"
              alt="A child balancing across the foam pit at Jump N Joy"
              fill
              sizes="(max-width: 767px) 90vw, 45vw"
              className="object-contain"
            />
            <div className="about-sticker">
              <Icon name="spark" size={25} />
              <span>
                FUN FOR
                <br />
                ALL AGES
              </span>
            </div>
          </div>
          <div className="about-intro-copy" data-reveal-stagger="right">
            <p className="eyebrow">
              <span />
              ABOUT JUMP N JOY
            </p>
            <h2>
              WHERE EVERY DAY IS <span className="text-brand">A JUMP DAY</span>
            </h2>
            <p>
              Welcome to Jump N Joy, the ultimate destination in Pune / PCMC for
              action-packed fun! Our trampoline park and arcade games zone offer
              a perfect blend of adventure and excitement for all ages. From
              bouncing through expansive trampolines to enjoying immersive
              arcade games, we’ve got it all.
            </p>
            <p>
              At Jump N Joy, your safety and enjoyment are our top priorities.
              With cutting-edge equipment and a dedicated team, we ensure every
              visit is filled with thrilling and safe experiences. Come join the
              fun and make unforgettable memories with us!
            </p>
            <div className="vision-grid">
              <div>
                <h3>Our vision</h3>
                <p>
                  With a variety of trampolines, foam-filled pits, and
                  interactive features, we want to offer an unforgettable
                  experience that combines fun, fitness, and adventure.
                </p>
              </div>
              <div>
                <h3>Our mission</h3>
                <p>
                  We aim to create an environment where individuals can engage
                  in exciting activities that are not only enjoyable but also
                  contribute to their physical and mental well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad values-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              OUR <span className="text-brand">VALUES</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">
              The things that make every visit a little more joyful.
            </p>
          </div>
          <div className="values-grid" data-reveal-stagger="up">
            {aboutValues.map((value, index) => (
              <article
                key={value.title}
                className={`value-card accent-${accents[index]}`}
              >
                <span className="value-icon">
                  <Icon name={value.icon} size={26} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad founders-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              OUR <span className="text-brand">FOUNDERS</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <div className="founder-grid" data-reveal-stagger="zoom">
            {founders.map((founder) => (
              <article key={founder.name} className="founder-card">
                <div className="founder-photo">
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, co-founder of Jump N Joy`}
                    fill
                    sizes="(max-width: 599px) 80vw, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <h3>{founder.name}</h3>
                <p>Co-founder, Jump N Joy</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad format-section">
        <div className="container format-grid">
          <div className="format-copy" data-reveal-stagger="left">
            <p className="eyebrow">
              <span />
              INDOOR AMUSEMENT PARKS
            </p>
            <h2>
              {parkFormat.name.toUpperCase()}
            </h2>
            <dl className="format-facts">
              <div>
                <dt>Age group</dt>
                <dd>{parkFormat.ageGroup}</dd>
              </div>
              <div>
                <dt>Area</dt>
                <dd>{parkFormat.area}</dd>
              </div>
            </dl>
            <ul className="format-activities">
              {parkFormat.activities.map((activity) => (
                <li key={activity}>
                  <Icon name="check" size={15} />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
          <div className="format-photos" data-reveal="right">
            <div>
              <Image
                src="/images/site/about/format-1.webp"
                alt="Guest enjoying the soft play area at a Jump N Joy park"
                fill
                sizes="(max-width: 767px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/site/about/format-2.webp"
                alt="Indoor play at a Jump N Joy park"
                fill
                sizes="(max-width: 767px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <PageCta
        title="COME JUMP"
        accent="WITH US"
        text="Bring your family and friends to Moshi for a day of bouncing, gaming, and celebrating."
        message="Hi Jump N Joy! I'd like to plan a visit to your park."
        secondary={{ label: "Explore attractions", href: "/attraction" }}
      />
    </>
  );
}
