import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icon";

export function PageBanner({
  eyebrow,
  title,
  accent,
  description,
  image,
  crumb,
  parent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  crumb: string;
  parent?: { label: string; href: string };
}) {
  return (
    <section className="page-banner">
      <Image
        src={image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="page-banner-photo object-cover"
      />
      <div className="page-banner-shade" aria-hidden="true" />
      <span className="page-banner-blob blob-lime" aria-hidden="true" />
      <span className="page-banner-blob blob-orange" aria-hidden="true" />
      <div className="container page-banner-inner">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">
            <Icon name="home" size={14} />
            Home
          </Link>
          <Icon name="chevron" size={13} />
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <Icon name="chevron" size={13} />
            </>
          )}
          <span aria-current="page">{crumb}</span>
        </nav>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>
          {title} <span>{accent}</span>
        </h1>
        <p className="page-banner-text">{description}</p>
      </div>
    </section>
  );
}
