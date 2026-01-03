"use client";
import React from "react";
import Image from "next/image";
import { workData } from "@/assets/assets";

const Works = () => {
  return (
    <div
      id="works"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-24 scroll-mt-28 relative overflow-hidden bg-transparent"
    >
      {/* Background removed to show main theme */}

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h4 className="text-white/80 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-300 inline-block"></span>
          <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent font-bold">
            Portfolio
          </span>
          <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-300 inline-block"></span>
        </h4>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold text-white mb-6 drop-shadow-lg">
          My Projects
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md">
          Showcasing innovative solutions and real-world applications I've built
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-purple-300 dark:hover:border-purple-600"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/50 transition-all duration-500" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-white/90 mb-3 text-lg drop-shadow-md">
                  {project.description}
                </p>
                {project.technologies && (
                  <p className="text-sm text-purple-200 font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.technologies}
                  </p>
                )}
                <div className="w-0 group-hover:w-16 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 mt-2"></div>
              </div>
            </div>

            {/* Hover Effect Indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-2 text-white text-sm font-semibold shadow-lg">
                View Project →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
