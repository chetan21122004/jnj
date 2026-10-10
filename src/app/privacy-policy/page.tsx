import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageBanner } from "@/components/page-banner";
import { business } from "@/lib/content";
import { privacyPolicy } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Jump N Joy collects, uses, and protects your personal information when you use our website or mobile application.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="YOUR PRIVACY MATTERS"
        title="PRIVACY"
        accent="POLICY"
        description="How we collect, use, and protect your information."
        image="/images/venue-3.webp"
        crumb="Privacy Policy"
      />
      <section className="section-pad policy-section">
        <div className="container policy-grid">
          <aside className="policy-toc" data-reveal="left">
            <h2>On this page</h2>
            <nav aria-label="Privacy policy sections">
              {privacyPolicy.sections.map((section, index) => (
                <a key={section.title} href={`#policy-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <article className="policy-body">
            <p className="policy-intro" data-reveal="up">
              {privacyPolicy.intro}
            </p>
            {privacyPolicy.sections.map((section, index) => (
              <section
                key={section.title}
                id={`policy-${index + 1}`}
                data-reveal="up"
              >
                <h2>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                {section.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </section>
            ))}
            <div className="policy-contact" data-reveal="zoom">
              <h2>Questions about this policy?</h2>
              <p>
                If you have any questions or concerns about our privacy policy,
                please contact us.
              </p>
              <div>
                <a href={`mailto:${business.email}`} className="button button-white">
                  <Icon name="mail" size={18} />
                  {business.email}
                </a>
                <Link href="/contact-us" className="text-link">
                  Contact page
                  <Icon name="arrow-up" size={16} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
