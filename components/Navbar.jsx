"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { navItems, social_mediaLinks } from "@/utils/constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 p-4 lg:px-8 xl:px-[8%] flex items-center justify-between transition-all duration-500 ${
          isScroll
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="relative w-16 md:h-24 h-16 transform hover:scale-105 transition-transform duration-300"
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
                className="group relative block font-Ovo px-5 py-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10 font-semibold">{name}</span>
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

          <button
            onClick={openMenu}
            className="block md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 brightness-0 invert transition-all duration-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Blurred Backdrop */}
          <div
            onClick={closeMenu}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Sidebar Panel */}
          <div
            ref={sideMenuRef}
            className="ml-auto w-7/12 sm:w-2/3 max-w-xs h-full bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-xl shadow-2xl flex flex-col px-6 py-8 rounded-l-3xl transform transition-transform duration-300 translate-x-0 border-l border-gray-200/50 dark:border-gray-700/50"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.3),transparent_50%)]" />
            </div>

            {/* Close Button */}
            <div
              className="absolute top-4 right-4 cursor-pointer p-2 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full transition-colors z-10"
              onClick={closeMenu}
            >
              <div className="w-6 h-6 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 dark:bg-gray-300 -rotate-45"></div>
              </div>
            </div>

            {/* Logo in Sidebar */}
            <div className="relative z-10 mb-8 mt-4">
              <div className="relative w-20 h-20 mx-auto">
                <Image
                  src={assets.logo}
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center mt-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nouman Saeed
              </p>
            </div>

            {/* Menu Items */}
            <ul className="mt-4 flex flex-col gap-3 relative z-10">
              {navItems.map(({ name, id }) => (
                <li key={id}>
                  <a
                    onClick={closeMenu}
                    href={`#${id}`}
                    className="group relative block w-full text-center text-base font-Ovo px-5 py-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <span className="relative z-10 font-semibold flex items-center justify-center gap-2">
                      {name}
                      <span className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button in Sidebar */}
            <div className="mt-6 relative z-10">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block w-full text-center px-5 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-Ovo font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-auto pt-6 border-t border-gray-200/50 dark:border-gray-700/50 relative z-10">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4 font-semibold">
                Follow Me
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={social_mediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <FaGithub />
                </a>
                <a
                  href={social_mediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={social_mediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
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
