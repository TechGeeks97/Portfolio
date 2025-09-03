import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end text-xl md:text-2xl mb-3 font-Ovo">
        Hi I'm Nouman Saeed
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[45px] font-Ovo">
        Full-Stack Developer | Data Science Professional Based in London
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a Full-Stack Developer with 4 years of experience in software
        engineering and a recently completed MSc in Data Science. My expertise
        spans full-stack development, machine learning, and data analysis,
        enabling me to build scalable applications, develop intelligent systems,
        and deliver actionable, data-driven insights
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex items-center gap-2"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/Resume-Nouman-Saeed.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
}

export default Header;
