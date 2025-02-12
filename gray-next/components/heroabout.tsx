"use client";

import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Stats from "./stats";

export default function About() {
  const [activeSection, setActiveSection] = useState("mission");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>About PlayPals Studio - Our Story, Team, and Vision</title>
        <meta
          name="description"
          content="Learn about PlayPals Studio, our passionate team, our journey in game development and web solutions, and our vision for the future."
        />
      </Head>

      <main className="pt-32 pb-12 md:pt-40 md:pb-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center mb-12">
            <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">
              Welcome to{" "}
              <em className="italic relative inline-flex justify-center items-center text-zinc-900">
                PlayPals Studio
                <svg
                  className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="223"
                  height="62"
                  viewBox="0 0 223 62"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path d="M45.654 53.62c17.666 3.154 35.622 4.512 53.558 4.837 17.94.288 35.91-.468 53.702-2.54 8.89-1.062 17.742-2.442 26.455-4.352 8.684-1.945 17.338-4.3 25.303-7.905 3.94-1.81 7.79-3.962 10.634-6.777 1.38-1.41 2.424-2.994 2.758-4.561.358-1.563-.078-3.143-1.046-4.677-.986-1.524-2.43-2.96-4.114-4.175a37.926 37.926 0 0 0-5.422-3.32c-3.84-1.977-7.958-3.563-12.156-4.933-8.42-2.707-17.148-4.653-25.95-6.145-8.802-1.52-17.702-2.56-26.622-3.333-17.852-1.49-35.826-1.776-53.739-.978-8.953.433-17.898 1.125-26.79 2.22-8.887 1.095-17.738 2.541-26.428 4.616-4.342 1.037-8.648 2.226-12.853 3.676-4.197 1.455-8.314 3.16-12.104 5.363-1.862 1.13-3.706 2.333-5.218 3.829-1.52 1.47-2.79 3.193-3.285 5.113-.528 1.912-.127 3.965.951 5.743 1.07 1.785 2.632 3.335 4.348 4.68 2.135 1.652 3.2 2.672 2.986 3.083-.18.362-1.674.114-4.08-1.638-1.863-1.387-3.63-3.014-4.95-5.09C.94 35.316.424 34.148.171 32.89c-.275-1.253-.198-2.579.069-3.822.588-2.515 2.098-4.582 3.76-6.276 1.673-1.724 3.612-3.053 5.57-4.303 3.96-2.426 8.177-4.278 12.457-5.868 4.287-1.584 8.654-2.89 13.054-4.036 8.801-2.292 17.74-3.925 26.716-5.19C70.777 2.131 79.805 1.286 88.846.723c18.087-1.065 36.236-.974 54.325.397 9.041.717 18.07 1.714 27.042 3.225 8.972 1.485 17.895 3.444 26.649 6.253 4.37 1.426 8.697 3.083 12.878 5.243a42.11 42.11 0 0 1 6.094 3.762c1.954 1.44 3.823 3.2 5.283 5.485a12.515 12.515 0 0 1 1.63 3.88c.164.706.184 1.463.253 2.193-.063.73-.094 1.485-.247 2.195-.652 2.886-2.325 5.141-4.09 6.934-3.635 3.533-7.853 5.751-12.083 7.688-8.519 3.778-17.394 6.09-26.296 7.998-8.917 1.86-17.913 3.152-26.928 4.104-18.039 1.851-36.17 2.295-54.239 1.622-18.062-.713-36.112-2.535-53.824-6.23-5.941-1.31-5.217-2.91.361-1.852" />
                </svg>
              </em>
            </h1>
            <p className="text-lg text-zinc-500 mb-8">
              We're a team of passionate creators, developers, and innovators,
              dedicated to crafting extraordinary digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-zinc-600 mb-4">
                Founded in 2015, PlayPals Studio began as a small team of game
                enthusiasts with a big dream. We've since grown into a diverse
                studio, pushing the boundaries of both gaming and web
                development.
              </p>
              <p className="text-zinc-600">
                Our journey has been marked by creativity, innovation, and a
                relentless pursuit of excellence, resulting in a portfolio of
                captivating games and cutting-edge web solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="/images/about-image.jpg"
                alt="PlayPals Studio Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Interactive Navigation */}
          <div id="about" className="flex justify-center space-x-4 mb-16">
            {["Mission", "Team", "Stats"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeSection === section.toLowerCase()
                    ? "bg-zinc-900 text-white shadow-lg"
                    : "bg-white text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Dynamic Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeIn}
              className="max-w-6xl mx-auto mb-24"
            >
              {activeSection === "mission" && (
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Our Mission",
                      content:
                        "To create immersive, innovative, and unforgettable digital experiences that inspire and entertain users worldwide.",
                    },
                    {
                      title: "Our Vision",
                      content:
                        "To become a leading force in the gaming and web development industries, known for innovation, quality, and user-centric design.",
                    },
                    {
                      title: "Our Values",
                      content:
                        "Creativity, collaboration, continuous learning, and a commitment to excellence in everything we do.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      custom={index}
                      className="bg-white p-8 rounded-xl shadow-md backdrop-blur-sm bg-white/80"
                    >
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-zinc-600">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeSection === "team" && (
                <div className="grid md:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      custom={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden backdrop-blur-sm bg-white/80"
                    >
                      <div className="relative h-48">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-1">
                          {member.name}
                        </h3>
                        <p className="text-zinc-500 text-sm mb-3">
                          {member.role}
                        </p>
                        <p className="text-zinc-600 text-sm">{member.bio}</p>
                      </div>
                      
                    </motion.div>
                  ))}
                </div>
                
              )}

              {activeSection === "stats" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Stats />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.section>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals to join our growing
              team. If you're passionate about creating amazing digital
              experiences, we'd love to hear from you.
            </p>
            <a
              href="#footer"
              className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 shadow"
            >
              View Open Positions
            </a>
          </motion.div>
      </main>
    </>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Leading innovation in AI and machine learning.",
    image: "/images/team/member-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    bio: "Expert in scalable architecture and cloud solutions.",
    image: "/images/team/member-2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in React and Node.js.",
    image: "/images/team/member-3.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Creative Director",
    bio: "Visionary designer with a passion for user experience.",
    image: "/images/team/member-4.jpg",
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "Marketing Manager",
    bio: "Digital marketing expert with a focus on growth strategies.",
    image: "/images/team/member-5.jpg",
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Game Designer",
    bio: "Innovative game designer with a knack for engaging gameplay.",
    image: "/images/team/member-6.jpg",
  },
];
