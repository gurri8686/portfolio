"use client";

import React from "react";

export default function ProjectsMain() {
  const projects = [
    {
      id: 1,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      skills: ["#react", "#node", "#tailwind"],
    },
    {
      id: 2,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      skills: ["#react", "#node", "#tailwind"],
    },
    {
      id: 3,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      skills: ["#react", "#node", "#tailwind"],
      highlight: true,
    },
    {
      id: 4,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      skills: ["#react", "#node", "#tailwind"],
    },
    {
      id: 5,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      skills: ["#react", "#node", "#tailwind"],
    },
    {
      id: 6,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      skills: ["#react", "#node", "#tailwind"],
    },
  ];

  return (
    <section className="!py-24 flex justify-center">
      <div className="custom_container mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-4 !mb-[40px]">
          <div className="w-[56%] text-center">
            <h2 className="font-bold text-[32px] !mb-[10px]">Projects</h2>
            <p className="font-light text-[22px]">
              Following projects showcases my skills and experience through
              real-world examples of my work. It reflects my ability to solve
              complex problems, work with different technologies, and manage
              projects effectively.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[30px] flex-wrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden w-[438px] h-full bg-[#1D1836]
        ${project.highlight ? "" : ""}
      `}
            >
              {/* Image Placeholder */}
              <div className="w-full h-[270px] bg-[#D9D9D9] rounded-2xl" />

              {/* Content */}
              <div className="flex flex-col justify-between items-start !p-[30px_26px] gap-4">
                <h3 className="font-inter font-bold text-[24px] leading-[40px]">
                  {project.title}
                </h3>

                <p className="font-inter font-normal text-[16px] leading-[24px]">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  <span className="font-inter font-bold text-[20px] leading-[40px]">
                    Key skill:
                  </span>
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="font-inter font-normal text-[20px] leading-[40px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
