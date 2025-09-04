import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
function Services() {
  return (
    <div id="services" className="w-full px-[12%] scroll-mt-32">
      <div className="text-center mb-4">
        <h4 className="text-gray-500 uppercase tracking-widest text-sm sm:text-base font-ovo mb-2 flex items-center justify-center gap-2">
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
          What I offer
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
        </h4>
        <h2 className="text-3xl sm:text-5xl font-ovo font-bold">My Services</h2>
      </div>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I offer a diverse range of services combining full-stack development,
        data analysis, machine learning, and AI solutions. From building
        responsive web and mobile applications to creating intelligent systems
        and data-driven insights, I help businesses solve complex problems
        efficiently. Whether it’s developing scalable applications, analyzing
        datasets, implementing predictive models, or delivering actionable AI
        insights, my goal is to provide innovative solutions that drive
        real-world impact.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            {/* <a href={link} className="flex items-center gap-2 text-sm mt-5">
              {" "}
              Read more{" "}
              <Image src={assets.right_arrow} className="w-4" alt="" />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
