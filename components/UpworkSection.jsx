"use client";

import React from "react";

export const UpworkSection = () => {
  return (
    <section className="bg-[#0a0a1a] !py-30 !pt-30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE - Text and CTA */}
          <div className="space-y-6">
            {/* Upwork Badge */}
            <div className="flex items-center gap-3">
              <span className="text-white text-xl">Up work with us on</span>
              <div className="bg-[#14A800] px-6 py-3 rounded-full">
                <span className="text-white font-bold text-2xl">Upwork</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white text-lg leading-relaxed max-w-md">
              Connect with us on upwork for top-tier solution tailored to your
              needs
            </p>

            {/* CTA Link */}
            <a
              href="https://www.upwork.com/freelancers/~YOUR_UPWORK_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#EF4444] text-lg font-semibold hover:gap-4 transition-all group"
            >
              Click here to view our Profile
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* RIGHT SIDE - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 - Jobs Completed */}
            <div className="bg-gradient-to-br from-[#FF8A3D] to-[#FF6B35] rounded-3xl p-8 text-center">
              <div className="text-white text-6xl font-bold mb-2">1800+</div>
              <div className="text-white text-xl font-medium">
                Job completed
              </div>
            </div>

            {/* Card 2 - Total Earned */}
            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <div className="text-gray-900 text-6xl font-bold mb-2">$9M</div>
              <div className="text-gray-700 text-xl font-medium">
                Total Earned
              </div>
            </div>

            {/* Card 3 - Top Talent (Full Width) */}
            <div className="col-span-2 bg-gray-100 rounded-3xl p-8 text-center">
              <div className="text-gray-900 text-4xl font-bold mb-3">
                Top 3% Talent Worldwide
              </div>
              <div className="text-gray-600 text-base">
                Flexible engagements from hourly to full time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpworkSection;