"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { games } from "@/app/games/data/games";

export default function Features01() {
  const [tab, setTab] = useState<number>(0);

  return (
    <section id="games" className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Our Games
            </h2>
            <p className="text-lg text-zinc-500">
              Explore our collection of exciting games and immersive
              experiences.
            </p>
          </div>
          <div>
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {games.map((game, index) => (
                <button
                  key={game.id}
                  className={`text-left px-4 py-5 border border-transparent rounded ${
                    tab !== index
                      ? "bg-zinc-100 opacity-60 hover:opacity-100 transition"
                      : "[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1"
                  }`}
                  onClick={() => setTab(index)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-inter-tight font-semibold text-zinc-900">
                      {game.title}
                    </div>
                    <svg
                      className={`fill-zinc-400 shrink-0 ml-2 ${
                        tab !== index ? "hidden" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                    >
                      <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                    </svg>
                  </div>
                  <div className="text-sm text-zinc-500">
                    {game.description.substring(0, 50)}...
                  </div>
                </button>
              ))}
            </div>
            {/* Tabs items */}
            <div className="relative lg:max-w-none [mask-image:linear-gradient(white_0%,white_calc(100%-40px),_transparent_calc(100%-1px))] -mx-6">
              <div className="relative flex flex-col pt-12 md:pt-20 mx-6">
                {games.map((game, index) => (
                  <Transition key={game.id} show={tab === index}>
                    <div className="w-full text-center transition ease-in-out data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-y-4 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-4">
                      <div className="inline-flex relative align-top">
                        <Image
                          className="rounded-t-lg border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] box-content shadow-2xl"
                          src={game.thumbnail || "/placeholder.svg"}
                          width={600}
                          height={360}
                          alt={game.title}
                        />
                        <Image
                          className="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]"
                          src={game.media[0]?.url || "/placeholder.svg"}
                          width={273}
                          height={288}
                          alt={`${game.title} - Media`}
                        />
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/games/${game.id}`}
                          className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
