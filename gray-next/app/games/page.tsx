"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { games } from "./data/games"

export default function GamesPage() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          Our Games
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/games/${game.id}`}>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  <Image
                    src={game.thumbnail || "/placeholder.svg"}
                    alt={game.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white text-center">{game.title}</h2>
                  </div>
                  {hoveredGame === game.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center p-4"
                    >
                      <p className="text-lg text-center mb-4">{game.description}</p>
                      <span className="bg-white text-black px-4 py-2 rounded-full font-semibold">Learn More</span>
                    </motion.div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

