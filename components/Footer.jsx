"use client";
import { navItems, social_mediaLinks } from "@/utils/constants";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 px-4 sm:px-8 lg:px-[12%] overflow-hidden mt-0">
      {/* Background Pattern - Matching Hero Theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                <a
                  href={`#${id}`}
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-2 text-white">Contact</h3>
          <div className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300">
            <FaMapMarkerAlt className="text-purple-400" />
            <span>London, England, United Kingdom</span>
          </div>
          <a
            href="mailto:noumansaeed831@gmail.com"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300"
          >
            <FaEnvelope className="text-purple-400" />
            <span>noumansaeed831@gmail.com</span>
          </a>
          <a
            href="tel:+447832178137"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300"
          >
            <FaPhoneAlt className="text-purple-400" />
            <span>+44 7832 178137</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-2 text-white">Follow Me</h3>
          <div className="flex items-center gap-4">
            <a
              href={social_mediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <FaGithub />
            </a>
            <a
              href={social_mediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <FaLinkedin />
            </a>
            <a
              href={social_mediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Nouman Saeed. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          Built with Next.js, React, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
