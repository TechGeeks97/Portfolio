"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { navItems, social_mediaLinks } from "@/utils/constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      // Close menu on escape key
      const handleEscape = (e) => {
        if (e.key === "Escape") {
          closeMenu();
        }
      };
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 p-4 lg:px-8 xl:px-[8%] flex items-center justify-between transition-all duration-500 ${
          isScroll
            ? "backdrop-blur-xl shadow-lg border-b border-gray-700/50"
            : "bg-transparent"
        }`}
        style={
          isScroll
            ? {
                background: "linear-gradient(to bottom right, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.95))",
              }
            : {}
        }
      >
        {/* Logo */}
        <a
          href="#home"
          className="w-16 md:h-24 h-16 transform hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={assets.logo}
            alt="logo"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain brightness-0 invert transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-3 rounded-full px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group block font-Ovo px-5 py-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="z-10 font-semibold">{name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-Ovo font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          {/* Side Menu Icon - Commented Out */}
          {/* <button
            onClick={openMenu}
            className="block md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 brightness-0 invert transition-all duration-300"
            />
          </button> */}
        </div>
      </nav>

      {/* Mobile Sidebar - Commented Out */}
      {false && menuOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden">
          {/* Blurred Backdrop */}
          <div
            onClick={closeMenu}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Sidebar Panel */}
          <div
            ref={sideMenuRef}
            className="ml-auto w-[85%] xs:w-4/5 sm:w-2/3 md:w-1/2 max-w-sm h-full backdrop-blur-xl shadow-2xl flex flex-col rounded-l-3xl transform transition-transform duration-300 translate-x-0 border-l border-gray-700/50 relative"
            style={{
              background: 'linear-gradient(to bottom right, #111827, #1f2937, #111827)'
            }}
          >

            {/* Close Button */}
            <button
              type="button"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer p-2 sm:p-2.5 hover:bg-white/20 active:bg-white/30 rounded-full transition-colors z-30 touch-manipulation"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-0.5 bg-gray-300 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-0.5 bg-gray-300 -rotate-45"></div>
              </div>
            </button>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-2.5 sm:px-3 py-2 sm:py-3 min-h-0">
              {/* Logo in Sidebar */}
              <div className="relative z-10 mb-2 mt-1 flex-shrink-0">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto">
                  <Image
                    src={assets.logo}
                    alt="logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 48px"
                  />
                </div>
                <p className="text-center mt-0.5 text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Nouman Saeed
                </p>
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col gap-0.5 relative z-10">
                {navItems.map(({ name, id }) => (
                  <li key={id} className="flex-shrink-0">
                    <a
                      onClick={closeMenu}
                      href={`#${id}`}
                      className="group block w-full text-center text-[11px] sm:text-xs font-Ovo px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md text-gray-300 hover:text-white active:text-white transition-all duration-300 overflow-hidden border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm touch-manipulation relative"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 rounded-md" />
                      <span className="relative z-10 font-semibold flex items-center justify-center gap-1">
                        {name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links - Fixed at bottom, always visible */}
            <div className="relative z-30 flex-shrink-0 pt-2 pb-3 px-2.5 sm:px-3 border-t-2 border-gray-700/80 bg-gray-800/90 backdrop-blur-md mt-auto">
              <p className="text-center text-[11px] sm:text-xs font-bold text-purple-300 mb-1.5">
                Follow Me
              </p>
              <div className="flex justify-center gap-2.5 sm:gap-3">
                <a
                  href={social_mediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/60 text-base sm:text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={social_mediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/60 text-base sm:text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={social_mediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/60 text-base sm:text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
