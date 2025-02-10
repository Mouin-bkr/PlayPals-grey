"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { games } from "@/app/games/data/games"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function GamePage() {
  const { id } = useParams()
  const game = games.find((g) => g.id === id)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

  if (!game) {
    return <div>Game not found</div>
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === game.media.length - 1 ? 0 : prevIndex + 1))
    setIsVideoPlaying(false)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? game.media.length - 1 : prevIndex - 1))
    setIsVideoPlaying(false)
  }

  useEffect(() => {
    const interval = setInterval(nextMedia, 5000)
    return () => clearInterval(interval)
  }, [nextMedia, game.media]) // Added nextMedia and game.media as dependencies

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-8"
        >
          {game.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[50vh] lg:h-[70vh] rounded-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMediaIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {game.media[currentMediaIndex].type === "image" ? (
                  <Image
                    src={game.media[currentMediaIndex].url || "/placeholder.svg"}
                    alt={`${game.title} - Media ${currentMediaIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={game.media[currentMediaIndex].url}
                      className="w-full h-full object-cover"
                      autoPlay={isVideoPlaying}
                      loop
                      muted
                    />
                    {!isVideoPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="w-16 h-16 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-all flex items-center justify-center"
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <Play className="h-8 w-8 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2"
              onClick={prevMedia}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2"
              onClick={nextMedia}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">About the Game</h2>
              <p className="text-gray-300">{game.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Game Details</h2>
              <div className="flex space-x-4">
                {["overview", "technical", "gameplay"].map((section) => (
                  <button
                    key={section}
                    className={`px-4 py-2 rounded-full ${
                      activeSection === section ? "bg-white text-gray-900" : "bg-gray-700 text-white"
                    }`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  {activeSection === "overview" && (
                    <div className="space-y-4">
                      <p>{game.description}</p>
                      <ul className="list-disc list-inside">
                        {game.developmentInsights.map((insight, index) => (
                          <li key={index}>{insight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeSection === "technical" && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                        <ul className="list-disc list-inside">
                          {game.technicalDetails.stack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Features</h3>
                        <ul className="list-disc list-inside">
                          {game.technicalDetails.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeSection === "gameplay" && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Mechanics</h3>
                        <ul className="list-disc list-inside">
                          {game.gameplay.mechanics.map((mechanic, index) => (
                            <li key={index}>{mechanic}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Controls</h3>
                        <ul className="list-disc list-inside">
                          {game.gameplay.controls.map((control, index) => (
                            <li key={index}>{control}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

