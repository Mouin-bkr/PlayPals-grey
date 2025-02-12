"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Logo from "@/public/images/logo-02.png";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-xl shadow-md mb-8 relative before:absolute before:-top-12 before:w-52 before:h-52 before:bg-zinc-900 before:opacity-[.08] before:rounded-full before:blur-3xl before:-z-10">
              <Link href="/">
                <Image
                  src={Logo || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt="Logo"
                />
              </Link>
            </div>
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Start your journey{" "}
              <em className="relative not-italic inline-flex justify-center items-end">
                today
                <svg
                  className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
                </svg>
              </em>
            </h2>
            <p className="text-lg text-zinc-500 mb-8">
              Join our creative family and be part of something extraordinary.
              Are you ready to start your journey?
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="mailto:careers@playpalsstudio.com"
                  className="btn text-white bg-zinc-900 hover:bg-zinc-800 w-full mb-4 sm:w-auto sm:mb-0 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Your Resume
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/careers"
                  className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full sm:w-auto shadow"
                >
                  View Open Positions
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Client logos */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Trusted by industry leaders
            </h3>
            <ul className="inline-flex flex-wrap items-center justify-center -m-2 [mask-image:linear-gradient(to_right,transparent_8px,_theme(colors.white/.7)_64px,_theme(colors.white)_50%,_theme(colors.white/.7)_calc(100%-64px),_transparent_calc(100%-8px))]">
              {[
                "Adobe",
                "Unsplash",
                "Google",
                "WordPress",
                "Windows",
                "Pinterest",
              ].map((client) => (
                <li
                  key={client}
                  className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]"
                >
                  <Image
                    src={`/images/clients/${client.toLowerCase()}.svg`}
                    width={40}
                    height={40}
                    alt={client}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Background illustration */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none -z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/images/cta-illustration.svg"
          width={1440}
          height={274}
          alt="CTA illustration"
        />
      </motion.div>
    </section>
  );
}
