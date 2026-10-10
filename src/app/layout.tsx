import type { Metadata, Viewport } from "next";
import { Oswald, Poppins } from "next/font/google";
import { ContactDock } from "@/components/contact-dock";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageMotion } from "@/components/page-motion";
import { ScrollEffects } from "@/components/scroll-effects";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const title = "Jump N Joy | Trampoline, Arcade & Parties in Moshi, Pune";
const description =
  "Bounce into fun at Jump N Joy, Moshi, Pune / PCMC. Explore trampolines, arcade games, kids’ play, and parties. View published prices and enquire on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jumpnjoy.co.in"),
  title: { default: title, template: "%s | Jump N Joy Moshi, Pune" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Jump N Joy",
    url: "/",
    images: [
      {
        url: "/images/venue-6.webp",
        width: 800,
        height: 534,
        alt: "Jump N Joy indoor activity park in Moshi, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/venue-6.webp"],
  },
  icons: { icon: "/icon.svg", apple: "/images/logo.webp" },
};
export const viewport: Viewport = { themeColor: "#E47B01" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${poppins.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <PageMotion>{children}</PageMotion>
        </main>
        <Footer />
        <ContactDock />
        <ScrollEffects />
      </body>
    </html>
  );
}
