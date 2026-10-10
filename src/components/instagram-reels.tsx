import { instagramReels } from "@/lib/content";
import { Icon } from "./icon";

export function InstagramReels() {
  return (
    <section
      className="reels-section section-pad"
      aria-labelledby="reels-title"
    >
      <div className="container">
        <div className="section-heading reference-heading" data-reveal="up">
          <h2 id="reels-title">JUMP N JOY IN ACTION</h2>
          <span className="heading-rule" aria-hidden="true" />
          <p className="section-intro">
            A little peek at the fun, straight from our Instagram.
          </p>
        </div>
        <div className="reels-grid" data-reveal-stagger="up">
          {instagramReels.map((reel) => (
            <article className="reel-card" key={reel.id}>
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                title={reel.title}
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a
                href={`https://www.instagram.com/reel/${reel.id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={18} />
                Watch on Instagram
                <Icon name="arrow-up" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
