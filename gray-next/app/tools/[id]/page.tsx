"use client";

import { useState, useRef, JSX } from "react";
import { useParams } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  Code,
  Terminal,
  Cpu,
  Wrench,
  GitBranch,
  Database,
  Download,
  ExternalLink,
  BookOpen,
  Users,
} from "lucide-react";
import { tools } from "../data/tools";

type SectionKey = "overview" | "technical" | "development" | "documentation";

export default function ToolPage() {
  const { id } = useParams();
  const tool = tools.find((t) => t.id === id);
  const [activeSection, setActiveSection] = useState<SectionKey>("overview");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (!tool) return <div>Tool not found</div>;

  const sections: Record<
    SectionKey,
    {
      icon: JSX.Element;
      title: string;
      content: JSX.Element;
    }
  > = {
    overview: {
      icon: <Wrench className="w-5 h-5" />,
      title: "Overview",
      content: (
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              {tool.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Code className="w-5 h-5 text-cyan-400" />
                    </div>
                    <p className="text-gray-300 flex-1">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">Language</p>
                <p className="text-lg font-semibold">{tool.specs.language}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">License</p>
                <p className="text-lg font-semibold">{tool.specs.license}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">Support</p>
                <p className="text-lg font-semibold">{tool.specs.support}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {tool.specs.platforms.map((platform, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-gray-700 rounded-md"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    technical: {
      icon: <Cpu className="w-5 h-5" />,
      title: "Technical",
      content: (
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.technical.architecture.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Database className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Technical Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.technical.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    development: {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Development",
      content: (
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Development Process
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {tool.development.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Challenge {index + 1}
                      </h4>
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tool.development.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 p-4 rounded-xl text-center"
                >
                  <p className="text-gray-300">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    documentation: {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Docs",
      content: (
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Documentation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.documentation.guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {guide}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Guide</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.documentation.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 group-hover:text-purple-400 transition-colors">
                        {example}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                        <Terminal className="w-4 h-4" />
                        <span>View Example</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-900 to-blue-900"
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">{tool.title}</h1>
                  <p className="text-xl text-gray-300">{tool.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {tool.specs.platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800/80 rounded-full text-sm backdrop-blur-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as SectionKey)}
              className={`px-6 py-3 rounded-xl transition-all flex items-center gap-2 ${
                activeSection === key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections[activeSection].content}
          </motion.div>
        </AnimatePresence>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            Ready to Get Started?
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download SDK
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 rounded-xl font-bold hover:bg-gray-700 transition-all transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              View Documentation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
