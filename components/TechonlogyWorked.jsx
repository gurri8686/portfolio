"use client";

import React from "react";

export default function TechnologiesWorked() {
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
              <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
              <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
            </svg>
          ),
        },
        {
          name: "Next.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#000" stroke="#fff" strokeWidth="1"/>
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
                  <stop offset="0%" stopColor="#41D1FF"/>
                  <stop offset="100%" stopColor="#BD34FE"/>
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
              <path d="M12 1.5c-.5 0-1 .1-1.4.4L3.5 6.1c-.9.5-1.4 1.4-1.4 2.4v7c0 1 .5 1.9 1.4 2.4l7.1 4.2c.4.2.9.4 1.4.4s1-.1 1.4-.4l7.1-4.2c.9-.5 1.4-1.4 1.4-2.4v-7c0-1-.5-1.9-1.4-2.4L13.4 1.9c-.4-.3-.9-.4-1.4-.4z"/>
            </svg>
          ),
        },
        {
          name: "Express.js",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#000"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">EX</text>
            </svg>
          ),
        },
        {
          name: "Django",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#092E20"/>
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
              <polygon points="12,3 3,8 3,16 12,21 21,16 21,8" fill="none" stroke="#E10098" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="#E10098"/>
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
              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" fill="#47A248"/>
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#336791"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PG</text>
            </svg>
          ),
        },
        {
          name: "MySQL",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#4479A1"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">SQL</text>
            </svg>
          ),
        },
        {
          name: "Redis",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#DC382D"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">RD</text>
            </svg>
          ),
        },
        {
          name: "AWS",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#FF9900"/>
              <text x="12" y="16" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">AWS</text>
            </svg>
          ),
        },
        {
          name: "Docker",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#2496ED"/>
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
              <path d="M12 6c-2.7 0-4.4 1.3-5.1 3.9.9-1.3 2-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3 1 1 2.1 2.1 4.6 2.1 2.7 0 4.4-1.3 5.1-3.9-.9 1.3-2 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3-1-1-2.1-2.1-4.6-2.1zm-5.1 6c-2.7 0-4.4 1.3-5.1 3.9.9-1.3 2-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3 1 1 2.1 2.1 4.6 2.1 2.7 0 4.4-1.3 5.1-3.9-.9 1.3-2 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3-1-1-2.1-2.1-4.6-2.1z" fill="#06B6D4"/>
            </svg>
          ),
        },
        {
          name: "Figma",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#F24E1E"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">F</text>
            </svg>
          ),
        },
        {
          name: "Framer",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path d="M4 4h16v8l-8 8-8-8V4z" fill="#0055FF"/>
            </svg>
          ),
        },
        {
          name: "SASS",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#CC6699"/>
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
                  <stop offset="0%" stopColor="#3776AB"/>
                  <stop offset="100%" stopColor="#FFD43B"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="2" fill="url(#python-gradient)"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PY</text>
            </svg>
          ),
        },
        {
          name: "TensorFlow",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#FF6F00"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">TF</text>
            </svg>
          ),
        },
        {
          name: "PyTorch",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#EE4C2C"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">PT</text>
            </svg>
          ),
        },
        {
          name: "OpenAI",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#412991"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">AI</text>
            </svg>
          ),
        },
        {
          name: "Pandas",
          icon: (
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#150458"/>
              <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">PD</text>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            Technologies
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-white text-2xl font-semibold">
                  {category.category}
                </h3>
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group w-full h-[140px] bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-gray-700 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#F59E0B] transition-all cursor-pointer hover:scale-105"
                  >
                    {tech.icon}
                    <span className="text-white text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}