export interface Tool {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  media: {
    type: "image";
    url: string;
  }[];
  specs: {
    language: string;
    platforms: string[];
    license: string;
    support: string;
  };
  technical: {
    architecture: string[];
    features: string[];
  };
  development: {
    challenges: string[];
    insights: string[];
    techStack: string[];
  };
  documentation: {
    guides: string[];
    examples: string[];
  };
}

export const tools: Tool[] = [
  {
    id: "game-engine",
    title: "Custom Game Engine",
    tagline: "Build Without Limits",
    description:
      "A powerful and flexible game engine designed for modern game development.",
    features: [
      "Real-time physics simulation",
      "Advanced rendering pipeline",
      "Cross-platform support",
      "Integrated asset management",
    ],
    media: [
      { type: "image", url: "/images/engine-1.jpg" },
      { type: "image", url: "/images/engine-2.jpg" },
    ],
    specs: {
      language: "C++, Rust",
      platforms: ["Windows", "macOS", "Linux"],
      license: "Commercial",
      support: "Enterprise Support Available",
    },
    technical: {
      architecture: [
        "Entity Component System",
        "Data-oriented design",
        "Multi-threaded rendering",
        "Modular plugin system",
      ],
      features: [
        "Custom shader pipeline",
        "Physics engine integration",
        "Asset streaming system",
        "Memory management tools",
      ],
    },
    development: {
      challenges: [
        "Optimizing performance across platforms",
        "Implementing a flexible plugin system",
        "Creating an intuitive API",
        "Managing memory efficiently",
      ],
      insights: [
        "Architecture decisions and trade-offs",
        "Performance optimization techniques",
        "Cross-platform development strategies",
        "API design principles",
      ],
      techStack: [
        "C++ for core engine",
        "Rust for tools",
        "Vulkan/DirectX 12",
        "Python for scripting",
        "CMake build system",
      ],
    },
    documentation: {
      guides: [
        "Getting Started",
        "Architecture Overview",
        "API Reference",
        "Performance Optimization",
      ],
      examples: [
        "Basic Game Setup",
        "Physics Integration",
        "Custom Shaders",
        "Asset Management",
      ],
    },
  },
  // Add more tools here
];
