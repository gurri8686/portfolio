"use client";

import React from "react";

export default function TechnologiesRedesigned() {
  const techCategories = [
    {
      category: "Frontend Development",
      color: "#61DAFB",
      technologies: [
        {
          name: "React",
          icon: (
            <svg className="w-12 h-12" fill="#61DAFB" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2" />
              <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
            </svg>
          ),
        },
        {
          name: "Next.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#000" stroke="#fff" strokeWidth="1" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">N</text>
            </svg>
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
              <text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">TS</text>
            </svg>
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
              <text x="12" y="17" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">JS</text>
            </svg>
          ),
        },
        {
          name: "HTML & CSS",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="#E34F26" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h18l-1.5 16.5L12 22l-7.5-2.5L3 3z M8 8h8M8.5 12h7M9 16h6" />
            </svg>
          ),
        },
        {
          name: "Vite.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="vite-gradient" x1="3" y1="3" x2="12" y2="21">
                  <stop offset="0%" stopColor="#41D1FF" />
                  <stop offset="100%" stopColor="#BD34FE" />
                </linearGradient>
              </defs>
              <path d="M21 3L12 21L3 3L12 9L21 3Z" fill="url(#vite-gradient)" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Backend Development",
      color: "#339933",
      technologies: [
        {
          name: "Node.js",
          icon: (
            <svg className="w-12 h-12" fill="#339933" viewBox="0 0 24 24">
              <path d="M12 1.5c-.5 0-1 .1-1.4.4L3.5 6.1c-.9.5-1.4 1.4-1.4 2.4v7c0 1 .5 1.9 1.4 2.4l7.1 4.2c.4.2.9.4 1.4.4s1-.1 1.4-.4l7.1-4.2c.9-.5 1.4-1.4 1.4-2.4v-7c0-1-.5-1.9-1.4-2.4L13.4 1.9c-.4-.3-.9-.4-1.4-.4z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#000" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">EX</text>
            </svg>
          ),
        },
        {
          name: "Django",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#092E20" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">DJ</text>
            </svg>
          ),
        },
        {
          name: "REST API",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="#FF6C37" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          name: "GraphQL",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <polygon points="12,3 3,8 3,16 12,21 21,16 21,8" fill="none" stroke="#E10098" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="#E10098" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Database & Cloud",
      color: "#4479A1",
      technologies: [
        {
          name: "MongoDB",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" fill="#47A248" />
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#336791" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PG</text>
            </svg>
          ),
        },
        {
          name: "MySQL",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#4479A1" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">SQL</text>
            </svg>
          ),
        },
        {
          name: "Redis",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#DC382D" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">RD</text>
            </svg>
          ),
        },
        {
          name: "AWS",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#FF9900" />
              <text x="12" y="16" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">AWS</text>
            </svg>
          ),
        },
        {
          name: "Docker",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#2496ED" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">DOC</text>
            </svg>
          ),
        },
      ],
    },
    {
      category: "UI/UX & Design",
      color: "#FF61F6",
      technologies: [
        {
          name: "Tailwind CSS",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M12 6c-2.7 0-4.4 1.3-5.1 3.9.9-1.3 2-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3 1 1 2.1 2.1 4.6 2.1 2.7 0 4.4-1.3 5.1-3.9-.9 1.3-2 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3-1-1-2.1-2.1-4.6-2.1zm-5.1 6c-2.7 0-4.4 1.3-5.1 3.9.9-1.3 2-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3 1 1 2.1 2.1 4.6 2.1 2.7 0 4.4-1.3 5.1-3.9-.9 1.3-2 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3-1-1-2.1-2.1-4.6-2.1z" fill="#06B6D4" />
            </svg>
          ),
        },
        {
          name: "Figma",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#F24E1E" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">F</text>
            </svg>
          ),
        },
        {
          name: "Framer",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M4 4h16v8l-8 8-8-8V4z" fill="#0055FF" />
            </svg>
          ),
        },
        {
          name: "SASS",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#CC6699" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">SS</text>
            </svg>
          ),
        },
      ],
    },
    {
      category: "Python & AI",
      color: "#3776AB",
      technologies: [
        {
          name: "Python",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3776AB" />
                  <stop offset="100%" stopColor="#FFD43B" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="2" fill="url(#python-gradient)" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PY</text>
            </svg>
          ),
        },
        {
          name: "TensorFlow",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#FF6F00" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">TF</text>
            </svg>
          ),
        },
        {
          name: "PyTorch",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#EE4C2C" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">PT</text>
            </svg>
          ),
        },
        {
          name: "OpenAI",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#412991" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">AI</text>
            </svg>
          ),
        },
        {
          name: "Pandas",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#150458" />
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">PD</text>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden !py-24 flex justify-center">
      <div className="custom_container mx-auto px-6">
        {/* Main Heading */}
        <div className="flex flex-col items-center gap-2 !mb-6">
          <h2 className="font-bold text-[42px] text-white">
            Technologies
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => {
            // Determine scroll direction: odd index = right-to-left, even index = left-to-right
            const isRightToLeft = categoryIndex % 2 === 0;

            return (
              <div key={categoryIndex}>
                {/* Category Title */}
                <div className="flex items-center justify-center !py-[30px] !px-0">
                  <h3 className="text-white text-[24px] font-semibold">
                    {category.category}
                  </h3>
                </div>

                {/* Side blur for scroll effect */}
                <div className="relative">
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-20 bg-gradient-to-r from-black to-transparent" />
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-20 bg-gradient-to-l from-black to-transparent" />

                  {/* Scroller */}
                  <div className="overflow-hidden !mb-10">
                    <div
                      className={`flex w-max gap-6 hover:[animation-play-state:paused] ${isRightToLeft
                          ? 'animate-infinite-scroll-rtl'
                          : 'animate-infinite-scroll-ltr'
                        }`}
                    >
                      {/* Duplicate items for infinite scroll */}
                      {[...category.technologies, ...category.technologies].map((tech, techIndex) => (
                        <div
                          key={techIndex}
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
                          <span className="text-white text-[16px]">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}