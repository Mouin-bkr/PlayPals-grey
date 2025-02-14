"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { games } from "./data/games";
import { ArrowRight, GamepadIcon, Star } from "lucide-react";

export default function GamesPage() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/videos/games-hero.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
            >
              <GamepadIcon className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Our Games
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Discover our collection of innovative and immersive gaming
              experiences
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                Explore Games
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-all transform hover:scale-105">
                About Studio
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
      </div>

      {/* Games Grid */}
      <div ref={containerRef} className="relative z-10 bg-black">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Link href={`/games/${game.id}`}>
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    onMouseEnter={() => setHoveredGame(game.id)}
                    onMouseLeave={() => setHoveredGame(null)}
                  >
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={game.media[0].url}
                        alt={game.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="flex items-center gap-2 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                      <h2 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {game.title}
                      </h2>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {game.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {hoveredGame === game.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center backdrop-blur-sm"
                      >
                        <div className="text-center p-8">
                          <h3 className="text-2xl font-bold mb-4">
                            {game.title}
                          </h3>
                          <p className="text-lg mb-6">{game.description}</p>
                          <span className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold">
                            Play Now
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
