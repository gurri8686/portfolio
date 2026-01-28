import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1625] flex justify-center items-center !py-[30px]">
      <div className="custom_container mx-auto px-6 py-12">
        <div className="flex justify-between items-center !py-10">
          {/* Left - Brand */}
          <div className="flex flex-col justify-center text-start gap-[14px] md:w-[360px]">
            <h3 className="font-inter font-bold text-[30px]">
              Gurpreet Singh
            </h3>
            <p className="font-normal text-[16px]">
              Transforming Business Ideas into Scalable Digital Products That
              Drive Revenue
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-normal text-[#A8A8A8] text-[15px]">
                Available for New Projects
              </span>
            </div>
          </div>

          {/* Middle - Navigation */}
          <div className="flex justify-center">
            <div className="md:w-[150px]">
              <h4 className="font-semibold text-[15px] leading-5 !pb-[11px]">
                Navigation
              </h4>
              <ul className="flex flex-col gap-1 !pl-[20px]">
                <li className="list-disc">
                  <a
                    href="#home"
                    className="font-normal text-[15px] leading-5"
                  >
                    Home
                  </a>
                </li>
                <li className="list-disc">
                  <a
                    href="#projects"
                    className="font-normal text-[15px] leading-5"
                  >
                    Projects
                  </a>
                </li>
                <li className="list-disc">
                  <a
                    href="#testimonials"
                    className="font-normal text-[15px] leading-5"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="list-disc">
                  <a
                    href="#about"
                    className="font-normal text-[15px] leading-5"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Contact */}
          <div className="flex justify-end items-center ">
            <div className="md:w-[190px]">
              <h4 className="font-semibold text-[15px] leading-5 !pb-[23px]">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:contact@gurpreet.dev"
                  className="flex items-center gap-2 font-inter font-normal text-sm leading-5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@gurpreet.dev
                </a>
                <p className="flex items-center gap-2 font-inter font-normal text-sm leading-5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Response time: &lt; 2 hours
                </p>
                <p className="flex items-center gap-2 font-inter font-normal text-sm leading-5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Timezone: IST (UTC+5:30)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 !pt-[14px] border-t border-[#2a2540] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter font-normal text-[15px] leading-5 tracking-normal">
            © {currentYear} gurpreet. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-inter font-normal text-[15px] leading-5 tracking-normal">Available on</span>
            <span className="font-inter font-normal text-[15px] leading-5 tracking-normal">Upwork</span>
            <span>•</span>
            <span className="font-inter font-normal text-[15px] leading-5 tracking-normal">Toptal</span>
            <span>•</span>
            <span className="font-inter font-normal text-[15px] leading-5 tracking-normal">Fiverr Pro</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;