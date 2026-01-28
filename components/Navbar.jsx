"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About", href: "/about" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex justify-center items-center bg-[#1a1625]">
      <div className="mx-auto px-6 lg:px-8 custom_container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group max-w-[250px]"
          >
            <img className="w-full" src="logo.png" alt="Comapny Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-inter font-light text-[18px] leading-[100%] tracking-[0%] ${
                  isActive(item.href)
                    ? "text-[#FF7262]"
                    : "text-white-600 hover:text-[#FF7262]"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className=""
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Get in Touch Button */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block !px-[24px] !py-[9px] 
bg-gradient-to-r from-[#FFA600] to-[#FF7262]
text-white text-sm font-normal rounded-full transition-all
"
          >
            GET IN TOUCH
          </a>

          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Get in Touch
          </a> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-stone-800"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-400 bg-stone-900"
                    : "text-stone-400 hover:text-white hover:bg-stone-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=YOUR_TEAMS_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
