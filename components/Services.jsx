"use client";
import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

function Services() {
  return (
    <div
      id="services"
      className="w-full px-4 sm:px-8 lg:px-[12%] scroll-mt-32 py-24 relative overflow-hidden bg-transparent"
    >
      {/* Background removed to show main theme */}
      <div className="text-center mb-12 relative z-10">
        <h4 className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500 inline-block"></span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            What I offer
          </span>
          <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-500 inline-block"></span>
        </h4>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold text-white mb-6">
          My Services
        </h2>
      </div>

      <p className="text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-lg text-white/90 leading-relaxed">
        I offer a diverse range of services combining full-stack development,
        data analysis, machine learning, and AI solutions. From building
        responsive web and mobile applications to creating intelligent systems
        and data-driven insights, I help businesses solve complex problems
        efficiently.
      </p>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-10 max-w-7xl mx-auto relative z-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group relative bg-white/90 backdrop-blur-sm border border-gray-300/50 rounded-2xl px-8 py-10 hover:shadow-2xl cursor-pointer hover:-translate-y-3 duration-500 transition-all overflow-hidden
            hover:border-purple-500/50
            hover:bg-white"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Icon with Background */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Image src={icon} alt={title} className="w-10" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold my-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {description}
              </p>

              {/* Arrow Indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                <div className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
