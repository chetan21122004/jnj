import Image from "next/image";
import { Icon, type IconName } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { PageCta } from "@/components/page-cta";
import { arcadeGames, popularGames } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Arcade Games",
  description:
    "25+ arcade and VR games at Jump N Joy, Moshi, Pune: racing, claw machines, air hockey, basketball, shooting games, and more. Arcade games from ₹70, VR from ₹150.",
  path: "/arcade-games",
  image: "/images/arcade.webp",
});

const accents = ["lime", "orange", "blue"] as const;

const facts: { icon: IconName; label: string; value: string }[] = [
  { icon: "gamepad", label: "Games to play", value: "25+" },
  { icon: "ticket", label: "Arcade games", value: "₹70 – ₹100" },
  { icon: "spark", label: "VR games", value: "₹150 – ₹200" },
  { icon: "users", label: "Age group", value: "2 – 60 yrs" },
];

export default function ArcadeGamesPage() {
  return (
    <>
      <PageBanner
        eyebrow="CHASE YOUR HIGH SCORE"
        title="ARCADE"
        accent="GAMES"
        description="Race, aim, grab, and score. More than 25 arcade and VR games for kids and adults, right next to the trampolines."
        image="/images/arcade.webp"
        crumb="Arcade Games"
      />
      <section className="section-pad arcade-section">
        <div className="container">
          <div className="arcade-facts" data-reveal-stagger="up">
            {facts.map((fact) => (
              <div key={fact.label}>
                <Icon name={fact.icon} size={24} />
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              PRESS START ON <span className="text-brand">THE FUN</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">
              Every game has its own rate. Load up your RFID card and play as
              many as you like.
            </p>
          </div>
          <div className="game-grid" data-reveal-stagger="up">
            {arcadeGames.map((game, index) => (
              <article
                key={game.title}
                className={`game-card accent-${accents[index % accents.length]}`}
              >
                <div className="game-card-media">
                  <Image
                    src={game.image}
                    alt={`${game.title} arcade machine at Jump N Joy`}
                    fill
                    sizes="(max-width: 599px) 90vw, (max-width: 1023px) 45vw, 23vw"
                    className="object-contain"
                  />
                  <span className="game-card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="game-card-copy">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad popular-section">
        <div className="container">
          <div className="section-heading reference-heading" data-reveal="up">
            <h2>
              FAN <span className="text-brand">FAVOURITES</span>
            </h2>
            <span className="heading-rule" aria-hidden="true" />
            <p className="section-intro">
              The games everyone keeps coming back for.
            </p>
          </div>
          <div className="popular-grid" data-reveal-stagger="zoom">
            {popularGames.map((game) => (
              <article key={game.title} className="popular-card">
                <Image
                  src={game.image}
                  alt={`${game.title} at Jump N Joy`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="popular-shade" aria-hidden="true" />
                <div className="popular-copy">
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta
        title="GAME"
        accent="ON?"
        text="Combine the arcade with a jumping session for the ultimate day out. Ask us about card recharge offers."
        message="Hi Jump N Joy! I'd like to know more about your arcade games and card recharge offers."
        secondary={{ label: "Card recharge offers", href: "/prices#recharge" }}
      />
    </>
  );
}
