import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { navItems } from "@/utils/constants";
const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-full");
    sideMenuRef.current.classList.add("translate-x-0");
  };

  const closeMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-0");
    sideMenuRef.current.classList.add("translate-x-full");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed p-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opaciy-50 backdrop-blur-lg" : ""
        }`}
      >
        <a href="" className="w-20">
          <Image
            fill
            src={assets.logo}
            alt="logo"
            className="object-contain object-left"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : " bg-white shadow-sm bg-opacity-50"
          }`}
        >
          {Object.values(navItems).map((nav_items, index) => (
            <li key={index}>
              <a
                href="#top"
                className="block w-full font-Ovo px-4 py-2 rounded-full hover:bg-rose-100 hover:text-rose-700 transition-all duration-300"
              >
                {nav_items}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 ">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <div>
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
            >
              Contact{" "}
              <Image src={assets.arrow_icon} alt="arrow icon" className="w-3" />
            </a>

            <button
              onClick={openMenu}
              className="block md:hidden cursor-pointer"
            >
              <Image src={assets.menu_black} alt="" className="w-6" />
            </button>
          </div>
        </div>

        {/*--------mobile menu*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col px-4 sm:px-6 fixed right-0 top-0 bottom-0 w-7/12 sm:w-2/3 max-w-xs z-50 h-screen bg-rose-50 transition-transform duration-500 translate-x-full"
        >
          {/* Close button */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeMenu}
          >
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          {/* Menu items */}
          <div className="mt-16 space-y-4">
            {Object.values(navItems).map((nav_items, index) => (
              <li key={index}>
                <a
                  onClick={closeMenu}
                  href="#top"
                  className="block w-full text-center text-sm sm:text-base font-Ovo px-4 py-3 rounded-xl shadow-sm text-gray-700 
                     hover:bg-rose-500 hover:text-white hover:shadow-md 
                     transition-all duration-300 truncate"
                >
                  {nav_items}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
