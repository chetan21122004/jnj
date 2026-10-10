export const business = {
  name: "Jump N Joy",
  phone: "+91 91300 02641",
  phoneDigits: "919130002641",
  email: "jumpnjoy2024@gmail.com",
  address:
    "Gat No. 452/1/1, Tapkir Nagar, Moshi, Gandharva Nagari, Alandi, Pune – 412105",
  shortAddress: "Moshi, Pune / PCMC",
  hours: "Every day · 10 AM – 10 PM",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Jump+N+Joy+Tapkir+Nagar+Moshi+Pune",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.8313636011117!2d73.84987439999999!3d18.6527396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70010ab5791%3A0xaf8029cd3fb450d9!2sJump%20N%20Joy%20Trampoline%20Park!5e1!3m2!1sen!2sin!4v1791321679036!5m2!1sen!2sin",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/jumpnjoypcmc/" },
    { label: "Facebook", href: "https://www.facebook.com/jumpnjoypcmc/" },
    { label: "YouTube", href: "https://www.youtube.com/@jumpnjoypcmc" },
  ],
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};
export const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Attractions", href: "/attraction" },
  { label: "Arcade Games", href: "/arcade-games" },
  {
    label: "Gallery",
    href: "/photos",
    children: [
      { label: "Photos", href: "/photos" },
      { label: "Videos", href: "/videos" },
    ],
  },
  { label: "Prices", href: "/prices" },
  { label: "Contact", href: "/contact-us" },
];

export const instagramReels = [
  { id: "DdoNP4gB8tk", title: "Jump N Joy — jump into the fun" },
  { id: "DZAF0Fds-dl", title: "Jump N Joy — a day at the park" },
  { id: "DXjZQh4ioKd", title: "Jump N Joy — moments of joy" },
] as const;

export const heroSlides = [
  {
    lead: "BOUNCE",
    middle: "INTO",
    accent: "FUN.",
    eyebrow: "YOUR NEXT GREAT DAY STARTS HERE",
    description:
      "Big jumps. Arcade battles. Birthday memories. A whole world of indoor fun, right here in Moshi.",
    image: "/images/venue-2.webp",
    alt: "Foam pit and trampoline arena inside Jump N Joy in Moshi",
    label: "THE TRAMPOLINE ARENA",
    cta: "Let's jump",
    context:
      "Hi Jump N Joy! I'd like to enquire about visiting the trampoline park.",
  },
  {
    lead: "PLAY",
    middle: "ANOTHER",
    accent: "ROUND.",
    eyebrow: "LESS SCREEN TIME. MORE PLAY TIME.",
    description:
      "Find your next high score, explore the arcade, and turn an ordinary day into a little adventure.",
    image: "/images/venue-6.webp",
    alt: "Colorful arcade and indoor activity floor at Jump N Joy",
    label: "ARCADE & ADVENTURE",
    cta: "Let's play",
    context:
      "Hi Jump N Joy! I'd like to enquire about arcade games and activities.",
  },
  {
    lead: "MAKE IT",
    middle: "A",
    accent: "PARTY.",
    eyebrow: "A BIG DAY DESERVES BIG FUN",
    description:
      "Birthdays, school trips, or a team day out. Bring your people. We'll help you plan the fun.",
    image: "/images/venue-4.webp",
    alt: "Decorated birthday party room at Jump N Joy",
    label: "PARTIES & CELEBRATIONS",
    cta: "Plan a party",
    context: "Hi Jump N Joy! I'd like to plan a party at your park.",
  },
] as const;

export type Attraction = {
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  description: string;
  color: string;
  href: string;
};
export const attractions: Attraction[] = [
  {
    title: "Trampoline Arena",
    eyebrow: "DEFY A LITTLE GRAVITY",
    image: "/images/trampoline.webp",
    alt: "Green and yellow trampolines at Jump N Joy",
    description: "Free jumps, angled trampolines, and foam-pit fun.",
    color: "lime",
    href: "/attraction#free-jump-area",
  },
  {
    title: "Arcade & VR",
    eyebrow: "CHASE YOUR HIGH SCORE",
    image: "/images/arcade.webp",
    alt: "Racing and arcade game machines at Jump N Joy",
    description: "A little competition. A lot of entertainment.",
    color: "orange",
    href: "/arcade-games",
  },
  {
    title: "Kids’ Play Zone",
    eyebrow: "SMALL FEET. BIG ADVENTURES.",
    image: "/images/kids-play.webp",
    alt: "Colorful kids play zone at Jump N Joy",
    description: "A colorful world for our youngest explorers.",
    color: "blue",
    href: "/attraction#kids-play-zone",
  },
  {
    title: "Adventure Zone",
    eyebrow: "TRY SOMETHING NEW",
    image: "/images/venue-5.webp",
    alt: "Indoor adventure and balance activities at Jump N Joy",
    description: "Climb, balance, and take on a new challenge.",
    color: "orange",
    href: "/attraction#adventure-zone",
  },
];

export const pricing = [
  {
    minutes: 60,
    weekday: 700,
    weekend: 800,
    label: "A little escape",
    detail: "A quick dose of jumping joy.",
  },
  {
    minutes: 90,
    weekday: 900,
    weekend: 1000,
    label: "More time. More fun.",
    detail: "Stay a little longer. Jump a little higher.",
  },
  {
    minutes: 120,
    weekday: 1100,
    weekend: 1200,
    label: "Make a day of it",
    detail: "For the ones who aren't done having fun.",
  },
] as const;

export type EventType = "Birthday" | "School" | "Corporate" | "Kitty";
export type ParkEvent = {
  type: EventType;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
};
export const events: ParkEvent[] = [
  {
    type: "Birthday",
    label: "Birthday parties",
    title: "MORE CANDLES.\nMORE CORE MEMORIES.",
    description:
      "Trade the usual birthday for jumps, games, and a room full of happy faces. Celebrate together in our dedicated party space.",
    image: "/images/venue-4.webp",
    alt: "Jump N Joy birthday room with decorations and seating",
    highlights: [
      "Dedicated party room",
      "Activities for your group",
      "Ask about food options",
    ],
  },
  {
    type: "School",
    label: "School trips",
    title: "THE FIELD TRIP\nTHEY’LL TALK ABOUT.",
    description:
      "Take learning beyond the classroom with an active day of play, shared challenges, and time together. Ask us about school-group packages.",
    image: "/images/venue-2.webp",
    alt: "Trampoline and foam pit area for group activities",
    highlights: [
      "Active indoor play",
      "School-group packages",
      "A day of shared adventures",
    ],
  },
  {
    type: "Corporate",
    label: "Corporate outings",
    title: "OUT OF OFFICE.\nINTO THE FUN.",
    description:
      "Give your team a change of scene. Swap desks for arcade challenges and jumping adventures, and make room for a different kind of teamwork.",
    image: "/images/venue-6.webp",
    alt: "Jump N Joy arcade and indoor activity floor",
    highlights: [
      "Group activities",
      "Friendly competition",
      "Custom outing enquiries",
    ],
  },
  {
    type: "Kitty",
    label: "Kitty parties",
    title: "GOOD COMPANY.\nGREAT TIMES.",
    description:
      "Bring your favorite people together for games, laughs, and a catch-up with a little extra energy. Enquire about planning your group celebration.",
    image: "/images/cafe.webp",
    alt: "Cafe seating area inside Jump N Joy",
    highlights: [
      "Games and activities",
      "Space to catch up",
      "Ask about refreshments",
    ],
  },
];

export const gallery = [
  {
    image: "/images/venue-2.webp",
    alt: "Jump N Joy foam pit and trampoline arena",
    caption: "Jump into your happy place",
  },
  {
    image: "/images/venue-6.webp",
    alt: "Arcade and activity floor at Jump N Joy",
    caption: "Play a little longer",
  },
  {
    image: "/images/venue-4.webp",
    alt: "Decorated birthday room at Jump N Joy",
    caption: "Make it a celebration",
  },
  {
    image: "/images/venue-5.webp",
    alt: "Adventure activities at Jump N Joy",
    caption: "Find your adventure",
  },
  {
    image: "/images/venue-1.webp",
    alt: "Bull ride in Jump N Joy's colorful indoor park",
    caption: "Try a new challenge",
  },
  {
    image: "/images/venue-3.webp",
    alt: "Jump N Joy reception and entrance",
    caption: "See you at Jump N Joy",
  },
] as const;

export const faqs = [
  {
    question: "Where is Jump N Joy located?",
    answer:
      "Find us at Gat No. 452/1/1, Tapkir Nagar, Moshi, Gandharva Nagari, Alandi, Pune – 412105. Use the directions link below to plan your visit.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Our published opening hours are 10 AM to 10 PM, Monday through Sunday. Call or WhatsApp us to confirm hours for your visit.",
  },
  {
    question: "Do I need grip socks?",
    answer:
      "Yes. Grip socks are mandatory in the jumping area; regular socks are not allowed. The published additional charge is ₹70 if you don't bring grip socks. Confirm the current charge with our team.",
  },
  {
    question: "Can younger children visit?",
    answer:
      "Our published guidance lists the Kids’ Play Zone for ages 2–10. Children under 5 must be accompanied by an adult at all times. Other activities have their own age guidance; ask our team which activities suit your group.",
  },
  {
    question: "What is included in the hourly plan?",
    answer:
      "The published hourly plan excludes arcade games and zipline. Grip socks are an additional charge if needed. Prices include taxes; Saturday, Sunday, and public holidays use weekend/special-day rates. Confirm current inclusions and rates before visiting.",
  },
  {
    question: "How do I enquire about a party or group visit?",
    answer:
      "Choose your event type in the enquiry section and open WhatsApp to share your preferred date and group size. Our team can help you with options. An enquiry does not confirm a booking.",
  },
] as const;
