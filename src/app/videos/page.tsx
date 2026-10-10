import { Icon } from "@/components/icon";
import { InstagramReels } from "@/components/instagram-reels";
import { PageBanner } from "@/components/page-banner";
import { PageCta } from "@/components/page-cta";
import { VideoGrid } from "@/components/video-grid";
import { business } from "@/lib/content";
import { videos } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Videos",
  description:
    "Watch the fun at Jump N Joy Trampoline Park, Moshi, Pune: trampoline jumps, kids’ play, celebrations, and more from our YouTube channel.",
  path: "/videos",
  image: "/images/venue-2.webp",
});

export default function VideosPage() {
  const youtube = business.socials.find((social) => social.label === "YouTube");
  return (
    <>
      <PageBanner
        eyebrow="LIGHTS. CAMERA. JUMP!"
        title="OUR"
        accent="VIDEOS"
        description="Big bounces, bigger smiles. Press play and see what a day at Jump N Joy looks like."
        image="/images/venue-2.webp"
        crumb="Videos"
        parent={{ label: "Gallery", href: "/photos" }}
      />
      <section className="section-pad videos-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              THE FUN, <span className="text-brand">ON REPLAY</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            {youtube && (
              <a
                className="button button-blue gallery-instagram"
                href={youtube.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="youtube" size={19} />
                Subscribe on YouTube
                <Icon name="arrow-up" size={16} />
              </a>
            )}
          </div>
          <VideoGrid videos={videos} />
        </div>
      </section>
      <InstagramReels />
      <PageCta
        title="BE IN"
        accent="THE NEXT ONE"
        text="Come jump with us and make some memories of your own."
        message="Hi Jump N Joy! I'd like to plan a visit to your park."
        secondary={{ label: "See photos", href: "/photos" }}
      />
    </>
  );
}
