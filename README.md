# Jump N Joy frontend

A Next.js App Router homepage with TypeScript and Tailwind CSS. This project is self-contained in `jnj_next`; a future `jnj_admin` can sit beside it. No backend, database, account system, payments, or confirmed bookings are implemented.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

On this Windows environment, the globally resolved npm launcher points to an incomplete installation. Use the installed npm CLI directly if `npm` fails:

```powershell
& 'C:/Program Files/nodejs/node.exe' 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' run dev
```

The same prefix works with `install`, `run lint`, `run typecheck`, and `run build`.

## Checks and production preview

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

The first build downloads Oswald and Poppins through `next/font/google`; the resulting fonts are self-hosted. The project includes `package-lock.json` for reproducible installs. Production deployment is not configured.

## Content and future admin integration

- `src/lib/content.ts`: business details, navigation, slides, attractions, pricing, events, gallery, FAQs.
- `src/lib/enquiry.ts`: URL-encoded WhatsApp links, party messages, and India-local date validation.
- `src/app/page.tsx`: server-rendered sections and LocalBusiness structured data.
- `src/components`: interactive carousel, tabs, native-dialog gallery, mobile navigation, and enquiry form.
- `src/app/globals.css`: brand tokens, component styles, and responsive rules; Tailwind utilities are available throughout.

Replace the typed content source with admin-managed data later. Keep interactive components receiving serializable content and preserve a server/client boundary. No future admin app has been created.

## Enquiries

WhatsApp links target `919130002641`. The party composer opens WhatsApp with event type and optional date/group size. The visitor sends the message themselves. No form data is stored, and no message is sent automatically. Group size must be a positive integer; past dates are rejected using Asia/Kolkata time.

## Content sources

The layout follows the SkyJumper Pune reference: compact sticky navigation, full-width venue carousel, centered attraction and event headings, portrait photo cards, pricing, celebration tabs, visitor information, and grouped footer links. Jump N Joy supplies the content and brand palette. Navigation and footer use blue `#0476BA` with lime `#85BC21` details and white links, as selected by the user. Primary buttons use magenta `#D3006C`; feature sections retain orange `#E47B01`.

Source: https://jumpnjoy.co.in/ and https://jumpnjoy.co.in/prices/. Layout reference: https://skyjumpertrampolinepark.com/pune/.

Existing Jump N Joy images are served locally from `public/images`; `sources.json` maps filenames to original paths below `https://jumpnjoy.co.in/wp-content/uploads/`. No reference-brand imagery is used.

Pricing follows the source website's dedicated hourly-plan table. Arcade games and zipline are excluded, and grip socks have a published additional charge of ₹70 if needed. Rates and inclusions must be confirmed with the venue. Expired offers and conflicting source prices were omitted.

## Responsive and accessibility behavior

Layouts cover phone, tablet, and desktop. The hero carousel advances every six seconds with a pause control, stops during pointer/keyboard interaction and while the page is hidden, defaults to paused for reduced motion, tabs support arrow/Home/End keys, native dialogs support Escape and focus restoration, FAQs use native disclosure controls, and reduced-motion settings are respected. The contact dock reserves bottom space in the footer and scroll padding for focused content.

## Instagram reels

The three user-supplied reel URLs are stored in `src/lib/content.ts` and displayed using Instagram embeds in the gallery area. The iframe permission allows autoplay if Instagram enables it, but the embed does not expose a supported playback API, so autoplay is not guaranteed or falsely simulated. Original MP4 files are required for a native muted, looping autoplay player. Watch-on-Instagram links remain available if an embed cannot load.
