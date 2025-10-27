import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div
      id="home"
      className="pt-[80px] lg:pt-[96px] scroll-mt-[80px] lg:scroll-mt-[96px] flex flex-col items-center"
    >
      <div className="w-full max-w-2xl text-center">
        {/* Profile Image */}
        <div className="mb-4 mt-6">
          <Image
            priority
            src={assets.profile_img}
            alt="profile image"
            className="rounded-full w-24 sm:w-32 mx-auto"
          />
        </div>

        {/* Intro */}
        <h3 className="flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-2 gap-2 font-Ovo">
          Hi, I'm Nouman Saeed
          <Image
            src={assets.hand_icon}
            alt="hand icon"
            className="w-5 sm:w-6"
          />
        </h3>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[45px] font-Ovo leading-snug mb-4 sm:mb-6 mx-auto">
          Full-Stack Developer | Data Science Professional Based in London
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-ovo mx-auto">
          I am a Full-Stack Developer with 4 years of experience in software
          engineering and a recently completed MSc in Data Science. My expertise
          spans full-stack development, machine learning, and data analysis,
          enabling me to build scalable applications, develop intelligent
          systems, and deliver actionable, data-driven insights.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 border rounded-full bg-black text-white flex items-center justify-center gap-2"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </a>

          <a
            href="/Resume-Nouman-Saeed_v2.pdf?v3"
            download
            className="w-full sm:w-auto px-8 py-3 border rounded-full flex items-center justify-center gap-2"
          >
            Resume
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
