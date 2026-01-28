"use client";

import React from "react";

export default function ProvenResults() {
  const results = [
    {
      value: "25+",
      label: "Projects Delivered",
      description: "Successfully completed projects across industries",
      gradient: "from-[#1A81EA] to-[#FFD300]",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Average client rating across all platforms",
      gradient: "from-[#E948A9] to-[#FFD300]",
    },
    {
      value: "99.9%",
      label: "Average Uptime",
      description: "System reliability across all deployments",
      gradient: "from-[#F66D14] to-[#FCA649]",
    },
    {
      value: "80%",
      label: "Faster Deployments",
      description: "Reduction in deployment time via CI/CD",
      gradient: "from-[#20BE5A] to-[#FCA649]",
    },
    {
      value: "25+",
      label: "Projects Delivered",
      description: "Successfully completed projects across industries",
      gradient: "from-[#8855F4] to-[#FCA649]",
    },
    {
      value: "85%",
      label: "Client Retention",
      description: "Long-term partnerships and repeat clients",
      gradient: "from-[#09849D] to-[#FCA649]",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#130F26] to-[#19152B] text-white flex justify-center items-center !py-30 w-full">
      <div className="custom_container mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-2 !mb-[40px]">
          <div className="w-[60%] text-center">
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
              className="w-[390px] h-[242px] border border-[#595959] flex flex-col justify-center items-center gap-[9px]"
            >
              {/* Top Icon Box */}
              <div
                className={`w-16 h-16 rounded-2xl mb-6
                    bg-gradient-to-br ${result.gradient}
                    flex items-center justify-center shadow-lg`}
              >
              </div>

              {/* Value */}
              <div className="font-inter font-bold text-[34px] leading-[50px] text-[#FFD300]">
                {result.value}
              </div>

              {/* Label */}
              <div className="font-inter font-bold text-[20px] leading-[20px]">
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
