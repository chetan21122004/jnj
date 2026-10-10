import type { CSSProperties } from "react";

export type IconName =
  | "arrow"
  | "arrow-up"
  | "phone"
  | "whatsapp"
  | "pin"
  | "clock"
  | "plus"
  | "check"
  | "spark"
  | "ticket"
  | "close"
  | "menu"
  | "chevron"
  | "mail"
  | "expand"
  | "info"
  | "calendar"
  | "instagram"
  | "facebook"
  | "youtube"
  | "home"
  | "gamepad"
  | "play"
  | "star"
  | "shield"
  | "users";
export function Icon({
  name,
  size = 20,
  className = "",
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10M10 20v-6h4v6" />
      </>
    ),
    gamepad: (
      <>
        <path d="M7 7h10a5 5 0 0 1 4.8 6.4l-1 3.4a2.5 2.5 0 0 1-4.3.9L14.5 16h-5l-2 1.7a2.5 2.5 0 0 1-4.3-.9l-1-3.4A5 5 0 0 1 7 7Z" />
        <path d="M8 10v3M6.5 11.5h3M15.5 11h.01M17.5 13h.01" />
      </>
    ),
    play: <path d="M7 4.5v15l12-7.5Z" />,
    star: (
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
    ),
    shield: (
      <>
        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6M12 7h.01" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 11h18M8 15h2M14 15h2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17 7h.01" />
      </>
    ),
    facebook: (
      <path d="M14 21v-8h3l1-4h-4V7c0-1 .5-2 2-2h2V2h-3c-3 0-5 2-5 5v2H7v4h3v8" />
    ),
    youtube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 6 3-6 3Z" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h16M13 5l7 7-7 7" />
      </>
    ),
    "arrow-up": (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    phone: (
      <path d="m7 3 3 5-2.5 2a16 16 0 0 0 6.5 6.5l2-2.5 5 3c0 2-1.5 4-4 4C9 20 4 15 3 7c0-2.5 2-4 4-4Z" />
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" />
        <path d="m8 7 1.5 3-1 1c1 2 2 3 4 4l1-1 3 1.5c-1 3-4 2-7-1s-4-6-1.5-7.5Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12 4 4 10-10" />,
    spark: (
      <>
        <path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8Z" />
      </>
    ),
    ticket: (
      <>
        <path d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4Z" />
        <path d="M15 7v3m0 3v2m0 2v2" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    expand: (
      <>
        <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
