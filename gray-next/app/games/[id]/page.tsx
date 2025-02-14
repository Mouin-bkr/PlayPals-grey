"use client";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { Star, Users, Trophy } from "lucide-react";
import { games } from "../data/games";

export default function GamePage() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const [activeSection, setActiveSection] = useState("overview");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);

  if (!game) return <div>Game not found</div>;

  const sections = {
    overview: {
      title: "Overview",
      icon: <Star className="w-5 h-5" />,
    },
    gameplay: {
      title: "Gameplay",
      icon: <Trophy className="w-5 h-5" />,
    },
    development: {
      title: "Development",
      icon: <Users className="w-5 h-5" />,
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        ref={containerRef}
        className="relative h-screen"
        style={{ opacity, scale: scaleSpring, y: ySpring }}
      >
        {/* Background Video/Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden  ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/videos/hero-background.mp4"
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {game.title}
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {game.tagline}
            </motion.p>
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                Play Now
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-all transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 bg-black">
        {/* Navigation */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex space-x-8">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                      activeSection === key
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                  </button>
                ))}
              </div>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeSection === "overview" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">About the Game</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {game.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {game.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all"
                        >
                          <p className="text-gray-300">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-[600px] rounded-2xl overflow-hidden">
                    <Image
                      src={game.media[0].url}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {activeSection === "gameplay" && (
                <div className="space-y-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">Game Mechanics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {game.gameplay.mechanics.map((mechanic, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
                        >
                          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-400 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <p className="text-gray-300">{mechanic}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "development" && (
                <div className="space-y-16">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">
                      Development Journey
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {game.development.insights.map((insight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all"
                        >
                          <p className="text-gray-300">{insight}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
