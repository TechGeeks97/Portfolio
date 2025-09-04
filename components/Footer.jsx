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
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-8 lg:px-[12%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">Nouman</h2>
          <p className="text-sm text-gray-400">
            Full-Stack Developer & Data Science Professional
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#about" className="hover:text-white duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Contact</h3>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>London, England, United Kingdom</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-400" />
            <span>noumansaeed831@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-400" />
            <span>+44 7832 178137</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Follow Me</h3>
          <div className="flex items-center gap-4 text-white text-2xl">
            <a
              href="https://github.com/TechGeeks97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/nouman93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/noumansaeed93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nouman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
