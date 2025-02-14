"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { tools } from "./data/tools";
import { Code, ArrowRight } from "lucide-react";

export default function ToolsPage() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
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
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 to-purple-900"
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
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
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
            >
              <Code className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Developer Tools
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Powerful tools and frameworks to accelerate your game development
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                Explore Tools
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold text-lg backdrop-blur-sm transition-all transform hover:scale-105">
                Documentation
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Code Lines Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute inset-0 flex items-center justify-around"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }}
                className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
              />
            ))}
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

      {/* Tools Grid */}
      <div ref={containerRef} className="relative z-10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Link href={`/tools/${tool.id}`}>
                  <div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800"
                    onMouseEnter={() => setHoveredTool(tool.id)}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                            {tool.title}
                          </h2>
                          <p className="text-sm text-gray-400">
                            {tool.specs.language}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {tool.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.specs.platforms.map((platform, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                        <span>View Details</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {hoveredTool === tool.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-blue-600/90 flex items-center justify-center backdrop-blur-sm"
                      >
                        <div className="text-center p-8">
                          <h3 className="text-2xl font-bold mb-4">
                            {tool.title}
                          </h3>
                          <p className="text-lg mb-6">{tool.tagline}</p>
                          <span className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold">
                            Explore Tool
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
