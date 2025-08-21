import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <div>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-center text-xl md:text-2xl font-Ovo">
        Hi I'm Nouman Saeed
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack developer | Machine Learning Engineer based in London{" "}
      </h1>
      <p>
        I am a full stack devlope from England with 4 years of experience in
        multiple Software House.
      </p>
    </div>
  );
}

export default Header;
