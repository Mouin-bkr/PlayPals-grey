export const games = [
  {
    id: "1",
    title: "Super Platformer",
    type: "game",
    thumbnail: "/images/game1.jpg",
    media: [
      {
        type: "image",
        url: "/images/game-3d.png",
      },
      {
        type: "image",
        url: "/images/super-platformer-2.jpg",
      },
      {
        type: "video",
        url: "/videos/super-platformer-gameplay.mp4",
      },
    ],
    description: "An exciting platformer game with challenging levels and vibrant graphics.",
    technicalDetails: {
      stack: ["Unity", "C#", "Blender", "Photoshop"],
      features: ["Procedurally generated levels", "Dynamic difficulty adjustment", "Online leaderboards"],
    },
    gameplay: {
      mechanics: ["Double jump", "Wall sliding", "Power-ups"],
      controls: ["Arrow keys for movement", "Spacebar to jump", "E to interact"],
    },
    developmentInsights: [
      "Implemented a custom physics engine for precise character control",
      "Designed levels using a combination of hand-crafted and procedurally generated elements",
      "Optimized performance to maintain 60 FPS on low-end devices",
    ],
  },
  {
    id: "2",
    title: "Space Explorer",
    type: "game",
    thumbnail: "/images/space-explorer-thumb.jpg",
    media: [
      {
        type: "image",
        url: "/images/space-explorer-1.jpg",
      },
      {
        type: "image",
        url: "/images/space-explorer-2.jpg",
      },
      {
        type: "video",
        url: "/videos/space-explorer-gameplay.mp4",
      },
    ],
    description: "Embark on an interstellar journey in this open-world space exploration game.",
    technicalDetails: {
      stack: ["Unreal Engine", "C++", "Maya", "Substance Painter"],
      features: ["Procedurally generated galaxies", "Real-time space physics", "Multiplayer space battles"],
    },
    gameplay: {
      mechanics: ["Spaceship customization", "Resource gathering", "Alien diplomacy"],
      controls: ["WASD for movement", "Mouse for aiming", "Q and E for rolling"],
    },
    developmentInsights: [
      "Created a custom shader for realistic planet rendering",
      "Implemented an AI system for dynamic NPC behavior",
      "Optimized network code for seamless multiplayer experience",
    ],
  },
  {
    id: "3",
    title: "Mystic Quest",
    type: "game",
    thumbnail: "/images/mystic-quest-thumb.jpg",
    media: [
      {
        type: "image",
        url: "/images/mystic-quest-1.jpg",
      },
      {
        type: "image",
        url: "/images/mystic-quest-2.jpg",
      },
      {
        type: "video",
        url: "/videos/mystic-quest-trailer.mp4",
      },
    ],
    description: "A captivating RPG set in a magical world full of mysteries and ancient artifacts.",
    technicalDetails: {
      stack: ["Unity", "C#", "Blender", "Spine"],
      features: ["Turn-based combat system", "Dynamic day-night cycle", "Branching storylines"],
    },
    gameplay: {
      mechanics: ["Character progression", "Spell crafting", "Party management"],
      controls: ["Mouse for movement and interaction", "Number keys for abilities", "Tab for inventory"],
    },
    developmentInsights: [
      "Developed a flexible dialogue system for complex character interactions",
      "Created a modular ability system for easy expansion of player skills",
      "Implemented a save system with cloud synchronization",
    ],
  },
]

