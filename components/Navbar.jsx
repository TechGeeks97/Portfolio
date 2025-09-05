import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { navItems, social_mediaLinks } from "@/utils/constants";

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
        className={`w-full fixed top-0 z-50 p-4 lg:px-8 xl:px-[8%] flex items-center justify-between transition-all duration-300 ${
          isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top" className="relative w-16 md:h-24 h-16">
          <Image
            src={assets.logo}
            alt="logo"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2 bg-white bg-opacity-50 shadow-sm">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block font-Ovo px-4 py-2 rounded-full hover:bg-rose-100 hover:text-rose-700 transition-all duration-300"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* <button>
            <Image src={assets.moon_icon} alt="theme toggle" className="w-6" />
          </button> */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-100 transition"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          <button onClick={openMenu} className="block md:hidden ml-2">
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Blurred Backdrop */}
          <div
            onClick={closeMenu}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Sidebar Panel */}
          <div
            ref={sideMenuRef}
            className="ml-auto w-7/12 sm:w-2/3 max-w-xs h-full bg-white shadow-xl flex flex-col px-6 py-8 rounded-l-2xl transform transition-transform duration-300 translate-x-0"
          >
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 cursor-pointer p-2 hover:bg-gray-200 rounded-full"
              onClick={closeMenu}
            >
              <Image src={assets.close_black} alt="close" className="w-5" />
            </div>

            {/* Menu Items */}
            <ul className="mt-16 flex flex-col gap-4">
              {navItems.map(({ name, id }) => (
                <li key={id}>
                  <a
                    onClick={closeMenu}
                    href={`#${id}`}
                    className="block w-full text-center text-base font-Ovo px-4 py-3 rounded-xl shadow-md text-gray-700 hover:bg-rose-500 hover:text-white transition-colors duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Optional CTA / Social Links */}
            <div className="mt-auto flex justify-center gap-4 pt-6 border-t border-gray-200">
              <a
                href={social_mediaLinks.github}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                GitHub
              </a>
              <a
                href={social_mediaLinks.linkedin}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
