"use client";

import React from "react";

export const UpworkSection = () => {
  return (
    <section className="custom_container !py-[155px]">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between gap-14">

          {/* LEFT */}

          <div className="h-[340px] flex flex-col justify-between items-start">

            <div className="flex flex-col gap-[18px]">
              <div className="flex items-center gap-6">
                <p className="font-inter font-normal text-[30px] leading-10">Up work with us on</p>

                <div className="w-[234px] h-[65px] inline-block rounded-[50px] bg-[#01CD5D] relative">
                  <img src="upwork_logo.png" alt="UpWork Logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>

              <p className="font-inter font-normal text-[30px] leading-[40px]">
                Connect with us on upwork for top-tier solution tailored to your needs
              </p>
            </div>

            <a
              href="#"
              className="font-semibold text-[30px] leading-[40px] text-[#FF7262] inline-block border-b-2 border-[#FF7262] group"
            >
              <span className="inline-block">
                Click here to view our Profile
              </span>
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>



          </div>

          {/* RIGHT */}

          <div className="flex justify-center items-center gap-[30px] flex-col">

            {/* 1800 */}

            <div className="flex justify-between items-center gap-[30px]">
              <div className="bg-gradient-to-b from-[#FFA305] to-[#FF745F] text-center w-[276px] h-[191px] flex flex-col items-center justify-center rounded-[20px] gap-[13px]">
                <h2 className="font-bold text-[60px] leading-[40px]">1800+</h2>
                <p className="font-inter font-semibold text-[30px] leading-[40px]">Job completed</p>
              </div>

              {/* $9M */}

              <div className="rounded-3xl bg-white text-center w-[276px] h-[191px] flex flex-col items-center justify-center rounded-[20px] gap-[13px]">
                <h2 className="font-bold text-[60px] leading-[40px] text-[#424242]">$9M</h2>
                <p className="font-inter font-semibold text-[30px] leading-[40px] text-[#424242]">Total Earned</p>
              </div>
           </div>

            {/* Bottom wide card */}

            <div className="w-[582px] h-[191px] flex flex-col items-center justify-center rounded-[20px] text-center bg-gradient-to-b from-white to-[#DADADA]">
              <h3 className="font-inter font-bold text-[#424242] text-[42px] leading-[40px]">
                Top 3% Talent Worldwide
              </h3>

              <p className="font-light text-[20px] text-[#424242] leading-[40px]">
                Flexible engagements from hourly to full time
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UpworkSection;
