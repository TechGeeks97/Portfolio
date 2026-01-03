"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div
      id="home"
      className="relative pt-[80px] lg:pt-[120px] pb-20 scroll-mt-[80px] lg:scroll-mt-[96px] flex flex-col items-center min-h-[90vh] overflow-hidden bg-transparent"
    >
      {/* Background removed to show main theme */}

      <div className="w-full max-w-4xl text-center px-4 sm:px-6 relative z-10">
        {/* Profile Image with Animation */}
        <div className="mb-6 mt-6 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <Image
              priority
              src={assets.profile_img}
              alt="profile image"
              className="relative rounded-full w-32 sm:w-40 md:w-48 mx-auto border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Intro with Animation */}
        <h3 className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl mb-4 gap-3 font-Ovo animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            Hi, I'm Nouman Saeed
          </span>
          <Image
            src={assets.hand_icon}
            alt="hand icon"
            className="w-6 sm:w-8 animate-bounce"
          />
        </h3>

        {/* Headline with Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-Ovo leading-tight mb-6 mx-auto animate-fade-in-up animation-delay-400">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
            Full-Stack Developer
          </span>
          <br />
          <span className="text-white font-bold drop-shadow-lg">
            & Data Science Professional
          </span>
          <br />
          <span className="text-lg sm:text-xl md:text-2xl text-white/90 font-normal drop-shadow-md">
            Based in London, UK
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-ovo max-w-3xl mx-auto animate-fade-in-up animation-delay-600 drop-shadow-md">
          I am a Full-Stack Developer and Data Science Professional with{" "}
          <span className="font-bold text-purple-200">
            5 years of commercial experience
          </span>{" "}
          in software engineering and a recently completed{" "}
          <span className="font-bold text-pink-200">
            MSc in Data Science
          </span>
          {" "}from London South Bank University. I specialize in architecting scalable web and mobile applications, 
          developing machine learning models, and transforming complex datasets into strategic business insights. 
          My expertise enables me to deliver end-to-end solutions that combine cutting-edge technology with data-driven decision making.
        </p>

        {/* Hourly Rate Badge */}
        <div className="mb-8 animate-fade-in-up animation-delay-700">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white">
            <span className="text-lg font-semibold">Hourly Rate:</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">$17/hour</span>
          </div>
        </div>

        {/* Buttons with Modern Design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Contact Me
              <Image
                src={assets.right_arrow_white}
                alt="arrow"
                className="w-4 group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>

          <a
            href="/Resume-Nouman-Saeed_v3.pdf?v3"
            download
            className="group relative w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full font-semibold flex items-center justify-center gap-2 text-white hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Image
              src={assets.download_icon}
              alt="download"
              className="w-4 brightness-0 invert group-hover:animate-bounce"
            />
            Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Header;
