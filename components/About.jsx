import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-24 md:py-32 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="text-center my-4">
        <h4 className="text-gray-500 uppercase tracking-widest text-sm sm:text-base font-ovo mb-2 flex items-center justify-center gap-2">
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
          Introduction
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
        </h4>
        <h2 className="text-3xl sm:text-5xl font-ovo font-bold">About Me</h2>
      </div>

      {/* Main Content */}
      <div className="flex w-full flex-col xl:flex-row items-center gap-20 my-20 max-w-[1400px] mx-auto">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 xl:w-96 rounded-3xl max-w-none">
          <Image
            priority
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Content (centered on wide screens) */}
        <div className="flex-1 max-w-4xl mx-auto text-center xl:text-left">
          <p className="mb-10 font-ovo leading-relaxed">
            Hi, I’m Nouman! I’m a software engineer and data science
            professional with a passion for building intelligent solutions and
            full-stack applications. I have 4 years of commercial experience in
            software development and recently completed my MSc in Data Science
            from London South Bank University. I specialize in creating robust
            web and mobile applications using technologies like React.js,
            Node.js, Next.js, React Native, Express.js, and databases like MySQL
            and MongoDB. On the data side, I work with Python, machine learning,
            and data analysis tools to turn complex data into actionable
            insights. I love combining my software engineering experience with
            data-driven approaches to solve real-world problems. When I’m not
            coding or analyzing data, I enjoy exploring new tech trends and
            building projects that push the boundaries of what’s possible. Let’s
            connect and create something impactful together!
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-3xl mx-auto xl:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                hover:bg-lightHover hover:-translate-y-1 duration-500 
                hover:shadow-[4px_4px_20px_rgba(0,0,0,0.5)]"
              >
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="my-6 text-gray-700 font-Ovo font-bold">
            {" "}
            Tools I use
          </h4>
          <ul className="flex flex-wrap items-center justify-center xl:justify-start gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-5" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
