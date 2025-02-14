export interface Game {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  media: {
    type: "image" | "video";
    url: string;
  }[];
  specs: {
    engine: string;
    platforms: string[];
    release: string;
    players: string;
  };
  gameplay: {
    mechanics: string[];
    features: string[];
  };
  development: {
    challenges: string[];
    insights: string[];
    techStack: string[];
  };
}

export const games: Game[] = [
  {
    id: "cosmic-crusade",
    title: "Cosmic Crusade",
    tagline: "Conquer the Stars",
    description:
      "An epic space adventure game with stunning visuals and immersive gameplay.",
    features: [
      "Vast procedurally generated universe",
      "Epic space battles",
      "Advanced trading system",
      "Multiplayer alliances",
    ],
    media: [
      { type: "image", url: "/images/cosmic-crusade-1.jpg" },
      { type: "video", url: "/videos/cosmic-crusade-trailer.mp4" },
      { type: "image", url: "/images/game-3d.png" },
    ],
    specs: {
      engine: "Unity",
      platforms: ["PC", "Mac", "Console"],
      release: "Coming Soon",
      players: "1-1000",
    },
    gameplay: {
      mechanics: [
        "Real-time space combat with physics-based movement",
        "Dynamic economy system with supply and demand",
        "Faction reputation system affecting trade and missions",
        "Procedural quest generation based on player actions",
      ],
      features: [
        "Customizable ships with modular components",
        "Real-time multiplayer battles",
        "Dynamic weather and environmental effects",
        "Advanced AI for NPCs and enemy ships",
      ],
    },
    development: {
      challenges: [
        "Implementing seamless multiplayer in a vast universe",
        "Optimizing procedural generation for performance",
        "Balancing the in-game economy",
        "Creating realistic space physics",
      ],
      insights: [
        "Custom shader development for space effects",
        "Advanced networking architecture",
        "Procedural content generation systems",
        "AI behavior trees for dynamic NPCs",
      ],
      techStack: [
        "Unity Engine",
        "C# for game logic",
        "HLSL for custom shaders",
        "Node.js for backend services",
        "MongoDB for data storage",
      ],
    },
  },
  {
    id: "cosmic-crusade V2",
    title: "Cosmic Crusade",
    tagline: "Conquer the Stars",
    description:
      "An epic space adventure game with stunning visuals and immersive gameplay.",
    features: [
      "Vast procedurally generated universe",
      "Epic space battles",
      "Advanced trading system",
      "Multiplayer alliances",
    ],
    media: [
      { type: "image", url: "/images/cosmic-crusade-1.jpg" },
      { type: "video", url: "/videos/hero-background.mp4" },
      { type: "image", url: "/images/game-3d.png" },
    ],
    specs: {
      engine: "Unity",
      platforms: ["PC", "Mac", "Console"],
      release: "Coming Soon",
      players: "1-1000",
    },
    gameplay: {
      mechanics: [
        "Real-time space combat with physics-based movement",
        "Dynamic economy system with supply and demand",
        "Faction reputation system affecting trade and missions",
        "Procedural quest generation based on player actions",
      ],
      features: [
        "Customizable ships with modular components",
        "Real-time multiplayer battles",
        "Dynamic weather and environmental effects",
        "Advanced AI for NPCs and enemy ships",
      ],
    },
    development: {
      challenges: [
        "Implementing seamless multiplayer in a vast universe",
        "Optimizing procedural generation for performance",
        "Balancing the in-game economy",
        "Creating realistic space physics",
      ],
      insights: [
        "Custom shader development for space effects",
        "Advanced networking architecture",
        "Procedural content generation systems",
        "AI behavior trees for dynamic NPCs",
      ],
      techStack: [
        "Unity Engine",
        "C# for game logic",
        "HLSL for custom shaders",
        "Node.js for backend services",
        "MongoDB for data storage",
      ],
    },
  },
  // Add more games here
];
