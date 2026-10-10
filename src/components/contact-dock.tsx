"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { Icon, type IconName } from "./icon";

const tabs: { label: string; href: string; icon: IconName }[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Attractions", href: "/attraction", icon: "spark" },
];
const trailingTabs: { label: string; href: string; icon: IconName }[] = [
  { label: "Prices", href: "/prices", icon: "ticket" },
];

export function ContactDock() {
  const pathname = usePathname();
  const tab = (item: (typeof tabs)[number]) => (
    <Link
      key={item.href}
      href={item.href}
      className="dock-tab"
      aria-current={pathname === item.href ? "page" : undefined}
    >
      <Icon name={item.icon} size={21} />
      <span>{item.label}</span>
    </Link>
  );
  return (
    <nav className="contact-dock" aria-label="Quick contact">
      {tabs.map(tab)}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-primary"
      >
        <Icon name="whatsapp" size={19} />
        <span>WhatsApp us</span>
        <Icon name="arrow-up" size={16} />
      </a>
      {trailingTabs.map(tab)}
      <a href={`tel:+${business.phoneDigits}`} className="dock-call">
        <Icon name="phone" size={18} />
        <span>Call us</span>
      </a>
      <Link href="/contact-us#contact" className="dock-party">
        <Icon name="spark" size={18} />
        <span>Plan a party</span>
      </Link>
    </nav>
  );
}
