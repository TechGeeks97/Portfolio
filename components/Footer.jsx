"use client";
import { navItems, social_mediaLinks } from "@/utils/constants";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 sm:py-16 px-4 sm:px-8 lg:px-[12%] overflow-hidden mt-0 pb-[calc(5rem+max(env(safe-area-inset-bottom),20px))] sm:pb-[calc(3rem+max(env(safe-area-inset-bottom),20px))] lg:pb-[calc(2rem+max(env(safe-area-inset-bottom),20px))]">
      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nouman Saeed
          </h2>
          <p className="text-sm text-gray-400 max-w-xs">
            Full-Stack Developer & Data Science Professional
            <br />
            Building innovative solutions in London, UK
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-purple-400 transition-colors duration-300 text-sm group">
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-2 text-white">Contact</h3>
          <div className="flex items-start gap-3 hover:text-purple-400 transition-colors duration-300 text-sm">
            <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
            <span>London, England, United Kingdom</span>
          </div>
          <a href="mailto:noumansaeed831@gmail.com" className="flex items-start gap-3 hover:text-purple-400 transition-colors duration-300 text-sm">
            <FaEnvelope className="text-purple-400 mt-1 flex-shrink-0" />
            <span className="break-all">noumansaeed831@gmail.com</span>
          </a>
          <a href="tel:+447832178137" className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300 text-sm">
            <FaPhoneAlt className="text-purple-400 flex-shrink-0" />
            <span>+44 7832 178137</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <h3 className="font-bold mb-3 text-xl sm:text-base bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent sm:bg-none sm:text-white">Follow Me</h3>
          <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
            <a href={social_mediaLinks.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 rounded-xl flex items-center justify-center text-white text-xl sm:text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation">
              <FaGithub />
            </a>
            <a href={social_mediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 rounded-xl flex items-center justify-center text-white text-xl sm:text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation">
              <FaLinkedin />
            </a>
            <a href={social_mediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 rounded-xl flex items-center justify-center text-white text-xl sm:text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="z-10 mt-12 border-t border-gray-700 pt-6 pb-[calc(3rem+max(env(safe-area-inset-bottom),20px))] sm:pb-[calc(2rem+max(env(safe-area-inset-bottom),20px))] md:pb-[calc(1.5rem+max(env(safe-area-inset-bottom),20px))] text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Nouman Saeed. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-400">Built with Next.js, React, and Tailwind CSS</p>
      </div>
    </footer>
  );
}
