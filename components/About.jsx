import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
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
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
             !hover:bg-lightHover hover:-translate-y-1 duration-500 
             hover:shadow-[4px_4px_20px_rgba(0,0,0,0.5)]"
              >
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo"> Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
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
