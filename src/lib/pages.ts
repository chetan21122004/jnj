export type ParkAttraction = {
  slug: string;
  title: string;
  category: string;
  image: string;
  cutout: boolean;
  description: string;
};

export const parkAttractions: ParkAttraction[] = [
  {
    slug: "soft-play-arena",
    title: "Soft Play Arena",
    category: "Little explorers",
    image: "/images/site/attractions/soft-play-arena.webp",
    cutout: true,
    description:
      "The ultimate safe haven for young adventurers! Designed with soft, cushioned surfaces and interactive features, this vibrant space is perfect for toddlers and younger children to explore and play. With climbing structures, ball pits, and gentle slides, the Soft Play Arena encourages active play and imaginative exploration in a secure environment, so parents can relax while little ones develop their motor skills and social confidence.",
  },
  {
    slug: "plane-trampoline",
    title: "Plane Trampoline",
    category: "Trampoline",
    image: "/images/site/attractions/plane-trampoline.webp",
    cutout: true,
    description:
      "This exciting attraction combines the thrill of bouncing with the fun of flying. As you jump, you navigate a series of airborne challenges and obstacles, feeling the rush of flight with every bounce. Perfect for kids and adults alike, the Plane Trampoline blends high-flying fun with interactive play, making every jump an exhilarating journey through the skies.",
  },
  {
    slug: "slant-trampoline",
    title: "Slant Trampoline",
    category: "Trampoline",
    image: "/images/site/attractions/slant-trampoline.webp",
    cutout: true,
    description:
      "Uniquely designed trampolines angled to put an exciting twist on traditional bouncing. Whether you want to practise your tricks or enjoy a different kind of jump, the slant adds a thrilling dimension to your trampoline experience. Perfect for anyone looking to challenge their skills or simply bounce in a fresh new way.",
  },
  {
    slug: "free-jump-area",
    title: "Free Jump Area",
    category: "Trampoline",
    image: "/images/site/attractions/free-jump-area.webp",
    cutout: true,
    description:
      "Where the sky’s the limit! This expansive space is perfect for those who want to bounce freely and enjoy the pure thrill of trampoline jumping. With plenty of room to leap and soar, you can explore your jumping skills without constraints. Perfecting aerial tricks or simply enjoying the sensation of bouncing high, the Free Jump Area offers endless fun for all ages.",
  },
  {
    slug: "kids-play-zone",
    title: "Kids Play Zone",
    category: "Little explorers",
    image: "/images/kids-play.webp",
    cutout: false,
    description:
      "Where imagination meets endless fun! Designed especially for our youngest adventurers, this vibrant area is filled with soft play structures, mini trampolines, and interactive games that spark creativity and excitement. Kids can climb, bounce, and explore in a world of play that’s just their size, unleash their energy, make new friends, and create unforgettable memories.",
  },
  {
    slug: "foam-fit",
    title: "Foam Fit",
    category: "Trampoline",
    image: "/images/site/attractions/foam-fit.webp",
    cutout: true,
    description:
      "Experience the ultimate fitness challenge! Foam Fit blends the thrill of trampoline jumping with a full-body workout, all in the fun and safety of our foam pit. Bounce, twist, and balance through dynamic exercises that test your strength and agility. Whether you’re racing the clock or enjoying a fun session, Foam Fit makes getting fit more fun than ever.",
  },
  {
    slug: "adventure-zone",
    title: "Adventure Zone",
    category: "Adventure",
    image: "/images/site/attractions/adventure-zone.webp",
    cutout: true,
    description:
      "Where every leap leads to an exciting new challenge! Designed for thrill-seekers of all ages, the Adventure Zone mixes obstacles, climbing walls, and high-flying activities that push your limits. Scale heights, navigate rope courses, and bounce through challenges for heart-pounding excitement in a safe environment.",
  },
  {
    slug: "stairway-activity",
    title: "Stairway Activity",
    category: "Adventure",
    image: "/images/site/attractions/stairway-activity.webp",
    cutout: true,
    description:
      "Climb to new heights, where every step is an adventure! Ascend a series of steps that seem to float in mid-air, testing your balance, coordination, and courage. Designed for both kids and adults, it’s perfect for anyone who wants to push their limits and experience the thrill of reaching the top.",
  },
  {
    slug: "wall-climbing",
    title: "Wall Climbing",
    category: "Adventure",
    image: "/images/site/attractions/wall-climbing.webp",
    cutout: true,
    description:
      "Scale new heights as you navigate a variety of climbing routes, each designed to test your strength, strategy, and determination. Whether you’re a beginner finding your footing or an experienced climber aiming for the top, our wall offers something for everyone, in a safe and supportive environment where the only way is up!",
  },
  {
    slug: "music-dance",
    title: "Music & Dance",
    category: "Party vibes",
    image: "/images/site/attractions/music-dance.webp",
    cutout: true,
    description:
      "Get ready to groove and move! This lively experience combines the energy of bouncing with the rhythm of your favourite tunes, creating a dance party like no other. Jump, twirl, and show off your best moves solo or with friends. Our Music & Dance zone turns every jump into a celebration.",
  },
  {
    slug: "zipline",
    title: "Zipline",
    category: "Adventure",
    image: "/images/site/attractions/zipline.webp",
    cutout: true,
    description:
      "Soar through the air! Experience the thrill of flying as you glide above the park, suspended by a secure harness that lets you zip from one end to the other. Whether you’re a first-time flyer or a seasoned adventurer, our zipline combines the rush of speed with the freedom of flight, a must-try for kids and adults.",
  },
  {
    slug: "vr-games",
    title: "VR Games",
    category: "Games",
    image: "/images/site/attractions/vr-games.webp",
    cutout: true,
    description:
      "Step into cutting-edge virtual reality experiences that transport you to incredible new realms, where you can race, battle, and explore like never before. Pilot a spaceship, navigate a fantasy world, or compete in high-speed challenges. Put on the headset and dive into a whole new dimension of fun!",
  },
  {
    slug: "arcade-games",
    title: "Arcade Games",
    category: "Games",
    image: "/images/site/attractions/arcade-games.webp",
    cutout: true,
    description:
      "Whether you’re a fan of classic games or modern hits, our arcade zone has something for everyone. From fast-paced racing simulators to skill games, compete for high scores, challenge your friends, or simply enjoy the thrill of the game. Perfect for a break between bouncing sessions.",
  },
  {
    slug: "birthday-party-hall",
    title: "Birthday Party Hall",
    category: "Celebrations",
    image: "/images/site/attractions/birthday-party-hall.webp",
    cutout: true,
    description:
      "Celebrate in style! This dedicated space is designed to make your special day unforgettable, with a fun and vibrant setting for parties of all sizes. Customisable packages bring together catering options, activities, and games, with ample space for dining, dancing, and plenty of jumping. Let us help you make your birthday a day to remember!",
  },
  {
    slug: "cafeteria",
    title: "Cafeteria",
    category: "Food & drinks",
    image: "/images/site/attractions/cafeteria.webp",
    cutout: true,
    description:
      "The perfect spot to relax and enjoy a delicious bite during your visit. Our menu features quick snacks, refreshing drinks, and hearty meals for every appetite. Grab a snack between activities or enjoy a meal with family and friends, then refuel for more fun and excitement!",
  },
  {
    slug: "school-trips",
    title: "School Trips",
    category: "Groups",
    image: "/images/site/attractions/school-trips.webp",
    cutout: true,
    description:
      "Make your school trip an adventure to remember! Students stay active with trampolines and obstacle courses, and our team can organise special packages with guided activities and team-building exercises. With safety as our top priority, it’s the perfect destination that combines fun with learning and physical activity.",
  },
];

export type ArcadeGame = { title: string; image: string; description: string };

export const arcadeGames: ArcadeGame[] = [
  ["Car Racing", "car-racing", "We’re taking fun to the next level with our innovative racing games."],
  ["Bike Racing", "bike-racing", "Strap on your helmet and get ready for the ultimate bike racing game."],
  ["Horse Racing", "horse-racing", "Saddle up for an unforgettable ride with our thrilling horse racing game."],
  ["VR Games", "vr-games", "Perfect for thrill-seekers of all ages, these VR adventures are a unique and exhilarating way to play."],
  ["Water Shooting Game", "water-shooting-game", "Dive into the action with Splash & Shoot, our refreshing and fun water shooting game."],
  ["Fishing Game", "fishing-game", "An interactive fishing game that brings you the thrill of the catch."],
  ["Air Hockey", "air-hockey", "A high-energy air hockey face-off that’s perfect for friendly rivals."],
  ["Helicopter Game", "helicopter-game", "An exhilarating helicopter game full of airborne adventure."],
  ["Claw Game", "claw-game", "Refine your technique and enjoy the thrill of winning a prize with each successful grab."],
  ["Basketball Game", "basketball-game", "Elevate your game with Hoops & Hops, our exhilarating basketball experience."],
  ["Super Bike", "super-bike", "Rev up the excitement with games designed to give you the ultimate racing experience."],
  ["Gun Shooting", "gun-shooting", "Test your aim and reflexes with a variety of interactive shooting challenges."],
  ["VR World", "vr-world", "A wide range of virtual experiences that cater to every interest and age group."],
  ["Happy Soccer", "happy-soccer", "The excitement of soccer, combining athleticism with an extra bounce."],
  ["Cat Fishing", "cat-fishing", "Dive into the whimsical world of cat fishing, where fun meets feline-themed adventure."],
  ["Ball Monster", "ball-monster", "Face off against playful, monstrous opponents in a dynamic ball-throwing challenge."],
  ["Skee Ball", "skee-ball", "A blend of nostalgia and challenge, a hit with seasoned players and newcomers alike."],
  ["Ball Shooting", "ball-shooting", "A fast-paced test of accuracy and reflexes. Shoot balls at targets to score points."],
  ["Crazy Car Racing", "crazy-car-racing", "Step into the driver’s seat of a high-octane arcade experience in the fast lane."],
  ["Hammer", "hammer", "Grab the mallet and give it your all to send the puck soaring up the tower."],
  ["Police Bike", "police-bike", "For fans of high-speed pursuits, the Police Bike promises an unforgettable ride."],
  ["Water Shooting", "water-shooting", "Test your aim and precision as you shoot streams of water at targets to score."],
  ["Kiddy Ride", "kiddy-ride", "Delight the little ones with a charming ride designed just for kids."],
  ["Dashing Cars", "dashing-cars", "Crash, bump, and dash your way through non-stop fun and excitement!"],
].map(([title, file, description]) => ({
  title,
  image: `/images/site/arcade/${file}.webp`,
  description,
}));

export const popularGames: ArcadeGame[] = [
  {
    title: "Racing games",
    image: "/images/site/arcade/racing-games.webp",
    description:
      "Compete against each other in fast-paced, adrenaline-pumping races. Whether it’s cars, motorcycles, or virtual reality racing, these games are sure to get the heart pumping.",
  },
  {
    title: "Claw machines",
    image: "/images/site/arcade/claw-machines.webp",
    description:
      "The excitement of manoeuvring the claw and the anticipation of securing a prize keep players coming back for more. Plush toys, gadgets, and prizes reward skill-based play.",
  },
  {
    title: "Trampoline Dodgeball",
    image: "/images/site/arcade/trampoline-dodgeball.webp",
    description:
      "A high-energy, fast-paced game that combines trampolining and dodgeball. Players jump on trampolines while trying to avoid dodgeballs thrown by the opposing team.",
  },
  {
    title: "Basketball hoops",
    image: "/images/site/arcade/basketball-hoops.webp",
    description:
      "A classic arcade game: make as many baskets as possible in a set time. Beat your own high score or challenge friends to see who scores the most.",
  },
  {
    title: "Dance Dance Revolution",
    image: "/images/site/arcade/dance-revolution.webp",
    description:
      "Follow on-screen instructions to hit the correct dance steps and keep up with the music. A fun way to get moving and show off your dance skills.",
  },
];

export const videos = [
  { id: "BMdgSe9n4Io", title: "Jump, Play & Cheer! Indoor Fun Park for Kids" },
  { id: "T3E6RSeZaG4", title: "Weekend Vibes Sorted! Indoor Fun for Kids & Family" },
  { id: "xQCsmgV2sMM", title: "Shiv Jayanti Special at Jump N Joy, Moshi" },
  { id: "kF-6bagOdwE", title: "We don’t count calories here… we confuse them" },
  { id: "lR7P6UYlxSs", title: "The Fun Never Touches the Floor" },
  { id: "-wVKMKJ-TaA", title: "A safer space for little leaps and big laughs" },
  { id: "-17RSi2I6Ag", title: "Non-Stop Fun at Jump N Joy Trampoline Area" },
  { id: "bdmG6KZsHPM", title: "Unlimited Fun at Jump N Joy" },
  { id: "UKx2BhgdxsA", title: "Endless Jumps" },
  { id: "kYCP-eO5ro4", title: "Jump, Bounce & Laugh at Jump N Joy" },
  { id: "G886-8t7LvE", title: "Jump Into the New Year with Joy at Jump N Joy!" },
  { id: "k18T6587XDE", title: "From wall jumps to free flips, it never gets boring!" },
] as const;

export const photos = Array.from({ length: 30 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    image: `/images/site/photos/photo-${number}.webp`,
    alt:
      index === 0
        ? "Jump N Joy Trampoline Park entrance in Moshi, Pune"
        : `Inside Jump N Joy Trampoline Park, Moshi: photo ${index + 1}`,
    caption: index === 0 ? "Welcome to Jump N Joy" : `Jump N Joy moments · ${number}`,
  };
});

export const aboutValues = [
  {
    title: "Excellence",
    icon: "star",
    text: "We strive for excellence in all our attractions and customer interactions.",
  },
  {
    title: "Innovation",
    icon: "spark",
    text: "We’re always on the lookout for the latest arcade and VR games, and constantly explore new ideas.",
  },
  {
    title: "Quality",
    icon: "check",
    text: "We are dedicated to maintaining the highest standards in our trampoline park and arcade games zone.",
  },
  {
    title: "Safety",
    icon: "shield",
    text: "We ensure that all our facilities are equipped with the highest safety standards.",
  },
  {
    title: "Community",
    icon: "users",
    text: "We are building a vibrant community where friends and families come together to share joy.",
  },
] as const;

export const founders = [
  { name: "Rohit Shirke", image: "/images/site/about/founder-rohit.webp" },
  { name: "Shubham Shinde", image: "/images/site/about/founder-shubham.webp" },
] as const;

export const parkFormat = {
  name: "JumpnJoy Trampoline Park",
  ageGroup: "3–50 years",
  area: "10K – 30K sq. ft.",
  activities: [
    "Trampoline Park",
    "Laser Tag",
    "Inflatable Park",
    "Soft Play",
    "Carnival Rides",
    "Teen Disco",
  ],
};

export type ExchangePlan = { pay: number; get: number; perk?: string };

export const cardRecharge: ExchangePlan[] = [
  { pay: 500, get: 600 },
  { pay: 1000, get: 1200 },
  { pay: 2000, get: 2400, perk: "360 Selfie free" },
  { pay: 3000, get: 4000, perk: "1 Zip Line free" },
  { pay: 5000, get: 6500, perk: "1 Bumper Car & Massage Chair free" },
  { pay: 10000, get: 15000, perk: "1 Bumper Car & Massage Chair free" },
  {
    pay: 25000,
    get: 50000,
    perk: "1 Bumper Car, Massage Chair & Adventure Zone free",
  },
];

export const regularPlan: ExchangePlan[] = [
  { pay: 500, get: 600 },
  { pay: 1000, get: 1200 },
  { pay: 2000, get: 2400 },
  { pay: 3000, get: 4000 },
  { pay: 5000, get: 6500 },
];

export const offerPlan: ExchangePlan[] = [
  { pay: 500, get: 750 },
  { pay: 1000, get: 1500 },
  { pay: 2000, get: 3000 },
  { pay: 3000, get: 4500 },
  { pay: 5000, get: 7500 },
];

export const timeBasedPlan = [
  { activity: "Kids Play Zone", duration: "45 min", weekday: 200, weekend: 250 },
  { activity: "Wall Climber", duration: "20 min", weekday: 125, weekend: 150 },
  { activity: "Stairway Activity", duration: "20 min", weekday: 125, weekend: 150 },
  { activity: "Plane Trampoline", duration: "45 min", weekday: 200, weekend: 250 },
  { activity: "Bull Ride", duration: "10 min", weekday: 125, weekend: 150 },
  { activity: "Zip Line", duration: "1 round", weekday: 150, weekend: 175 },
  { activity: "Adventure Zone", duration: "45 min", weekday: 350, weekend: 400 },
] as const;

export const schoolTripPlan = [
  { duration: "1 hour", weekday: 375, weekend: 400 },
  { duration: "1.5 hours", weekday: 425, weekend: 450 },
  { duration: "2 hours", weekday: 475, weekend: 500 },
] as const;

export const cardNotes = [
  "₹35 additional for a new card.",
  "Regular socks are not allowed. Grip socks are mandatory.",
  "₹70 additional for grip socks if you don’t carry your own.",
  "Please read all the instructions provided on the RFID card.",
  "Prices are inclusive of all taxes.",
];

export const parkRules = [
  "All mentioned prices are inclusive of all taxes.",
  "Separate plans apply for weekends and special days: Saturday, Sunday, and public holidays.",
  "₹70 additional for grip socks if you don’t carry your own.",
  "Children under the age of 5 must be accompanied by an adult at all times.",
  "No flips or somersaults unless you are trained and under supervision.",
  "Eating or drinking is not allowed on the trampoline or in the jumping area.",
  "Read the do’s and don’ts before going on the trampoline.",
];

export const offices = [
  {
    label: "Trampoline park",
    name: "Jump N Joy, Moshi",
    address: "Moshi, Gandharv Nagari, Near Gayatri School, Pune – 412105",
    phone: "+91 91300 02641",
    phoneDigits: "919130002641",
    email: "jumpnjoy2024@gmail.com",
  },
  {
    label: "Office",
    name: "Jump N Joy, Baner",
    address:
      "Office No. 101, Snehraj Apartment, Baner Rd, near Orchid Hotel, Baner, Pune – 411045",
    phone: "+91 88308 44747",
    phoneDigits: "918830844747",
    email: "jumnjoy12@gmail.com",
  },
] as const;

export const privacyPolicy = {
  intro:
    "At Jump N Joy, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, and protect your information when you interact with us through our website or mobile application.",
  sections: [
    {
      title: "Information we collect",
      items: [
        "Personal information: When you register an account with Jump N Joy, we may collect information such as your name, email address, phone number, and payment details. We collect this information to provide you with personalised services and to process your orders.",
        "Device information: We may collect information about the device you are using to access our website or mobile application, such as your device type, operating system, and IP address. We collect this information to improve our services and ensure the compatibility of our platform with different devices.",
      ],
    },
    {
      title: "Use of information",
      items: [
        "We use your personal information to create and manage your account, process your orders, and communicate with you about your account or orders.",
        "We may use your information to personalise your experience on our platform and recommend products or services that may be of interest to you.",
      ],
    },
    {
      title: "Disclosure of information",
      items: [
        "We may share your personal information with our trusted third-party service providers who assist us in providing our services, such as payment processors and delivery partners. We ensure that these service providers are bound by strict confidentiality obligations and that they comply with applicable data protection laws.",
        "We may disclose your information if required by law, to enforce our terms of service, or to protect our rights, property, or safety, as well as the rights, property, or safety of others.",
      ],
    },
    {
      title: "Security",
      items: [
        "We have implemented appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
        "We regularly review our security procedures to ensure the ongoing confidentiality, integrity, and availability of your information.",
      ],
    },
    {
      title: "Children’s privacy",
      items: [
        "Our platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected personal information from an individual under the age of 18, we will take steps to delete that information.",
      ],
    },
    {
      title: "Changes to this privacy policy",
      items: [
        "We may update this privacy policy from time to time. Any changes we make will be effective immediately upon posting the revised policy on our platform. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.",
      ],
    },
  ],
};
