import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { PageCta } from "@/components/page-cta";
import { PhotoGrid } from "@/components/photo-grid";
import { business } from "@/lib/content";
import { photos } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photos",
  description:
    "Take a peek inside Jump N Joy Trampoline Park in Moshi, Pune: trampolines, foam pits, arcade games, the party hall, and more.",
  path: "/photos",
  image: "/images/site/photos/photo-01.webp",
});

export default function PhotosPage() {
  return (
    <>
      <PageBanner
        eyebrow="A LITTLE PEEK INSIDE"
        title="OUR"
        accent="PHOTOS"
        description="Bright colours, big jumps, and happy faces. Here’s what joy looks like at our park in Moshi."
        image="/images/venue-6.webp"
        crumb="Photos"
        parent={{ label: "Gallery", href: "/photos" }}
      />
      <section className="section-pad photos-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              THIS IS WHAT <span className="text-brand">JOY LOOKS LIKE</span>
            </h2>
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
          <PhotoGrid photos={photos} />
        </div>
      </section>
      <PageCta
        title="COME SEE IT"
        accent="FOR YOURSELF"
        text="Photos are great. Jumping is better. Plan your visit to Jump N Joy today."
        message="Hi Jump N Joy! I'd like to plan a visit to your park."
        secondary={{ label: "Watch videos", href: "/videos" }}
      />
    </>
  );
}
