"use client";

import React from "react";
import Image from "next/image";
import Projects from "./ProjectsMain";
import ProvenResults from "./Provenresults";
import Technologies from "./Technologies";
import UpworkSection from "./UpworkSection";
export const Hero = () => {
  const stats = [
    { number: "25+", label: "Projects" },
    { number: "99%", label: "Satisfaction" },
    { number: "< 2 hours", label: "Response" },
  ];

  return (
    <>
      <section className="min-h-screen bg-[#1a1625] text-white flex justify-center items-center py-20">
        <div className="custom_container mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-5 w-full lg:w-[60%]">
              <h1 className="font-extrabold text-[80px] leading-[100px]">
                Gurpreet Singh
              </h1>

              <h2 className="font-extrabold text-[45px] leading-[70px] tracking-[0%] bg-gradient-to-r from-[#FEA302] to-[#FF7262] bg-clip-text text-transparent">
                Full Stack & Developer
              </h2>

              <p className="font-bold text-[24px] leading-[46px]">
                Transforming Business Ideas into Scalable Digital Products That
                Drive Revenue
              </p>

              <p className="font-inter font-normal text-[24px] leading-[34px] text-[#D8D8DA]">
                I dont just write code-I architect solutions that solve real
                business problems, reduce operational costs, and accelerate
                time-to-market. Every project includes performance optimization,
                security best practices, and scalable architecture designed for
                growth.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end w-full lg:w-[40%]">
              <div className="relative w-[400px] h-[400px] lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden">
                <Image
                src="/testimonials/profile.webp"
                alt="Profile"
                fill
                className="object-cover"
                priority
                />
              </div>
            </div>
          </div>

          {/* STATS */}
          {/* <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="inline-flex px-[30px] py-[20px] bg-[#252134] border border-[#3a3549] rounded-lg"
              >
                <span className="text-[#F59E0B] font-bold mr-1">
                  {stat.number}
                </span>
                <span className="text-gray-300">{stat.label}</span>
              </div>
            ))}
            <div className="px-6 py-3 bg-[#EF4444] rounded-lg">
              <span className="text-white font-medium">
                Available for New Projects
              </span>
            </div>
          </div> */}
        </div>
      </section>
      <section className="bg-[#040128] text-white flex justify-center items-center">
        <UpworkSection />
      </section>
      <section className="bg-black text-white flex justify-center items-center py-20">
        <Technologies />
      </section>

      <section className="min-h-screen bg-[#1a1625] text-white flex justify-center items-center py-20">
        <ProvenResults />
      </section>

      <section className="min-h-screen bg-black text-white flex justify-center items-center py-20">
        <Projects />
      </section>
    </>
  );
};
