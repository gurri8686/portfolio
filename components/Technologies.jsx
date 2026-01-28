"use client";

import React from "react";

export default function Technologies() {
  const technologies = [
    {
      name: "HTML & CSS",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="#E34F26" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 3h18l-1.5 16.5L12 22l-7.5-2.5L3 3z M8 8h8M8.5 12h7M9 16h6" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
          <text x="12" y="17" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">
            JS
          </text>
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg className="w-12 h-12" fill="#61DAFB" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg className="w-12 h-12" fill="#339933" viewBox="0 0 24 24">
          <path d="M12 1.5c-.5 0-1 .1-1.4.4L3.5 6.1c-.9.5-1.4 1.4-1.4 2.4v7c0 1 .5 1.9 1.4 2.4l7.1 4.2c.4.2.9.4 1.4.4s1-.1 1.4-.4l7.1-4.2c.9-.5 1.4-1.4 1.4-2.4v-7c0-1-.5-1.9-1.4-2.4L13.4 1.9c-.4-.3-.9-.4-1.4-.4z"/>
        </svg>
      ),
    },
    {
      name: "Vite.js",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="vite-gradient" x1="3" y1="3" x2="12" y2="21">
              <stop offset="0%" stopColor="#41D1FF"/>
              <stop offset="100%" stopColor="#BD34FE"/>
            </linearGradient>
          </defs>
          <path d="M21 3L12 21L3 3L12 9L21 3Z" fill="url(#vite-gradient)" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
          <text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
            TS
          </text>
        </svg>
      ),
    },
  ];

  // duplicate list for infinite scroll
  const items = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden !py-30">
      <div className="custom_container mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center gap-2 !mb-10">
          <h2 className="font-bold text-[32px] text-white">
            Technologies
          </h2>
        </div>

        {/* Side blur */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-20 bg-gradient-to-l from-black to-transparent" />

          {/* Scroller */}
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">
              {items.map((tech, index) => (
                <div
                  key={index}
                  className="group w-[190px] h-[140px]
                  bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e]
                  border-1 border-gray-500
                  rounded-xl
                  flex flex-col items-center justify-center gap-3
                  cursor-pointer
                  shrink-0
                  hover:border-[#F59E0B]
                  transition-all"
                >
                  {tech.icon}
                  <span className="text-white text--[20px]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
