import type { Metadata } from "next";

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/venue-6.webp",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | Jump N Joy Moshi, Pune`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "en_IN",
      siteName: "Jump N Joy",
      url: path,
      images: [{ url: image, alt: `${title} at Jump N Joy` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
