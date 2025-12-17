"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-24 md:py-32 scroll-mt-20 relative overflow-hidden"
    >
      {/* Animated Background Gradient - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.1),transparent_50%)] -z-10" />
      {/* Section Header */}
      <div className="text-center my-4 mb-16 relative z-10">
        <h4 className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500 inline-block"></span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            Introduction
          </span>
          <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-500 inline-block"></span>
        </h4>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex w-full flex-col xl:flex-row items-center gap-12 xl:gap-20 my-20 max-w-[1400px] mx-auto relative z-10">
        {/* Profile Image with Modern Frame */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative w-64 sm:w-80 xl:w-96 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
            <Image
              priority
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl mx-auto text-center xl:text-left">
          <p className="mb-10 font-ovo leading-relaxed text-lg text-gray-700 dark:text-gray-300">
            Hi, I'm <span className="font-bold text-purple-600 dark:text-purple-400">Nouman</span>! I'm a seasoned software engineer and data science
            professional with a passion for building intelligent, scalable solutions and
            enterprise-grade full-stack applications. With{" "}
            <span className="font-bold text-pink-600 dark:text-pink-400">5 years</span> of commercial experience in
            software development and a recently completed{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">MSc in Data Science</span> from London South Bank University, I bring a unique blend of technical expertise and analytical thinking. 
            I specialize in architecting robust web and mobile applications using modern technologies like React.js,
            Next.js, Node.js, React Native, Express.js, TypeScript, and databases including PostgreSQL, MySQL, and MongoDB. 
            On the data science front, I leverage Python, TensorFlow, scikit-learn, and advanced analytics tools to build predictive models, 
            perform deep data analysis, and deliver actionable insights that drive business value. My approach combines software engineering best practices 
            with data-driven methodologies to solve complex problems and deliver high-impact solutions. I'm passionate about continuous learning, 
            exploring emerging technologies, and contributing to innovative projects that make a real difference.
          </p>

          {/* Info List with Modern Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-3xl mx-auto xl:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 cursor-pointer
                hover:shadow-2xl hover:-translate-y-2 duration-500 transition-all
                hover:border-purple-300 dark:hover:border-purple-600
                hover:bg-gradient-to-br hover:from-white hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20
                ${title === "Education & Certifications" ? "xl:col-span-1" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image className="w-7" src={icon} alt={title} />
                  </div>
                  <h3 className="my-4 font-bold text-lg text-gray-800 dark:text-gray-200">{title}</h3>
                  {title === "Education & Certifications" ? (
                    <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold mt-1">🎓</span>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">MSc Data Science</p>
                          <p className="text-xs">London South Bank University</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold mt-1">🎓</span>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">BS Software Engineering</p>
                          <p className="text-xs">COMSATS</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-pink-600 dark:text-pink-400 font-semibold mt-1">🏆</span>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">AI/Machine Learning Bootcamp</p>
                          <p className="text-xs">London South Bank University</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <div className="mt-12">
            <h4 className="my-6 text-gray-800 dark:text-gray-200 font-Ovo font-bold text-xl flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></span>
              Tools I use
            </h4>
            <ul className="flex flex-wrap items-center justify-center xl:justify-start gap-4">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:-translate-y-2 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:scale-110"
                >
                  <Image src={tool} alt="Tool" className="w-6 sm:w-7 group-hover:scale-110 transition-transform duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
