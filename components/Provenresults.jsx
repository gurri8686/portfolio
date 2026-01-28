"use client";

import React from "react";

export default function ProvenResults() {
  const results = [
    {
      value: "25+",
      label: "Projects Delivered",
      description: "Successfully completed projects across industries",
      gradient: "from-[#1A81EA] to-[#FFD300]",
      icon: "projects-delivered.png",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Average client rating across all platforms",
      gradient: "from-[#E948A9] to-[#FFD300]",
      icon: "customer-feedback.png",
    },
    {
      value: "99.9%",
      label: "Average Uptime",
      description: "System reliability across all deployments",
      gradient: "from-[#F66D14] to-[#FCA649]",
      icon: "reliability-shield.png",
    },
    {
      value: "80%",
      label: "Faster Deployments",
      description: "Reduction in deployment time via CI/CD",
      gradient: "from-[#20BE5A] to-[#FCA649]",
      icon: "rapid-deployment.png",
    },
    {
      value: "25+",
      label: "Projects Delivered",
      description: "Successfully completed projects across industries",
      gradient: "from-[#8855F4] to-[#FCA649]",
      icon: "system-performance.png",
    },
    {
      value: "85%",
      label: "Client Retention",
      description: "Long-term partnerships and repeat clients",
      gradient: "from-[#09849D] to-[#FCA649]",
      icon: "client-retention.png",
    },
  ];

  return (
    <section class="min-h-screen bg-gradient-to-b from-[#130F26] to-[#19152B] text-white flex justify-center items-center !py-30 w-full">
      <div className="custom_container mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-2 !mb-[40px]">
          <div className="w-[60%] text-center">
            <p className="font-light text-[20px] text-[#FF7262]">
              TRACK RECORD
            </p>
            <h2 className="font-bold text-[32px]">Proven Results</h2>
            <p className="font-light text-[22px]">
              Measurable outcomes that drive business growth and operational
              efficiency
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="w-[390px] h-[242px] border border-[#595959]
      flex flex-col justify-center items-center gap-[9px]"
            >
              {/* Icon Wrapper */}
              <div className="relative mb-8">

                {/* Gradient Box */}
                <div
                  className={`w-16 h-16 rounded-2xl
          bg-gradient-to-br ${result.gradient}
          shadow-lg z-10`}
                />

                {/* Dynamic Icon */}
                <img
                  src={result.icon}
                  alt={result.label}
                  className="absolute top-[16px] left-1/2
          -translate-x-1/2 w-8 h-8 object-contain z-0"
                />
              </div>

              {/* Value */}
              <div className="font-inter font-bold text-[34px] leading-[50px] bg-gradient-to-l from-[#FEA302] to-[#FF7262] bg-clip-text text-transparent">
                {result.value}
              </div>

              {/* Label */}
              <div className="font-inter font-bold text-[20px] leading-[20px] text-white">
                {result.label}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-300 w-[60%] text-center">
                {result.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
