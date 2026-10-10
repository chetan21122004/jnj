"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { business, navigation, type NavLink } from "@/lib/content";
import { whatsappLink } from "@/lib/enquiry";
import { Icon, type IconName } from "./icon";

const navigationIcons: Record<string, IconName> = {
  "/": "home",
  "/about-us": "info",
  "/attraction": "spark",
  "/arcade-games": "gamepad",
  "/photos": "expand",
  "/prices": "ticket",
  "/contact-us": "phone",
};

const isActive = (link: NavLink, pathname: string) =>
  link.children
    ? link.children.some((child) => child.href === pathname)
    : link.href === pathname;

export function Header() {
  const menu = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const close = () => menu.current?.close();
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Jump N Joy home" className="brand">
          <Image
            src="/images/logo.webp"
            width={74}
            height={74}
            alt="Jump N Joy"
            preload
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className={`nav-dropdown ${isActive(link, pathname) ? "active" : ""}`}
              >
                <Link href={link.href}>
                  <Icon name={navigationIcons[link.href]} size={16} />
                  {link.label}
                  <Icon name="chevron" size={13} className="nav-caret" />
                </Link>
                <div className="nav-menu">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={pathname === child.href ? "page" : undefined}
                    >
                      <Icon
                        name={child.href === "/videos" ? "play" : "expand"}
                        size={15}
                      />
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link, pathname) ? "page" : undefined}
              >
                <Icon name={navigationIcons[link.href]} size={16} />
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header-actions">
          <a
            href={business.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="header-location"
            aria-label="Get directions to Jump N Joy in Moshi, Pune"
          >
            <Icon name="pin" size={18} />
            <span>Moshi, Pune</span>
            <Icon name="arrow-up" size={15} />
          </a>
          <button
            type="button"
            className="mobile-menu-button circle-button"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            onClick={() => menu.current?.showModal()}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
      <dialog
        ref={menu}
        className="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="mobile-menu-head">
          <Link href="/" onClick={close} aria-label="Jump N Joy home">
            <Image src="/images/logo.webp" width={52} height={52} alt="" />
          </Link>
          <h2 id="mobile-menu-title">LET’S EXPLORE</h2>
          <button
            type="button"
            className="circle-button"
            aria-label="Close navigation menu"
            onClick={close}
          >
            <Icon name="close" />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.flatMap((link) =>
            (link.children ?? [link]).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span className="mobile-nav-label">
                  <Icon
                    name={
                      item.href === "/videos"
                        ? "play"
                        : navigationIcons[item.href]
                    }
                    size={18}
                  />
                  {item.label}
                </span>
                <Icon name="arrow-up" size={18} />
              </Link>
            )),
          )}
        </nav>
        <div className="mobile-menu-quick">
          <a href={`tel:+${business.phoneDigits}`} onClick={close}>
            <Icon name="phone" size={20} />
            Call
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <Icon name="whatsapp" size={20} />
            WhatsApp
          </a>
          <a
            href={business.directions}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <Icon name="pin" size={20} />
            Directions
          </a>
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-blue"
          onClick={close}
        >
          Enquire on WhatsApp
          <Icon name="whatsapp" />
        </a>
        <div className="mobile-menu-foot">
          <span>
            <Icon name="clock" size={15} />
            {business.hours}
          </span>
          <div>
            {business.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`Jump N Joy on ${social.label}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name={
                    social.label === "Instagram"
                      ? "instagram"
                      : social.label === "Facebook"
                        ? "facebook"
                        : "youtube"
                  }
                  size={17}
                />
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </header>
  );
}
