import React from "react";
import Image from "next/image";
import { heroimg } from "@/public/assets";
const Hero = () => {
  return (
    <div className="bg-primary py-12 overflow-hidden">
      <div className="container relative mx-auto px-32 flex justify-between items-center">
        <div className="absolute left-[-200px] top-0 w-[30%] h-[30%] ring-2 rounded-full ring-secondary  bg-transparent "></div>
        <h1 className="text-white text-7xl font-bold z-10">
          World's Best Report Writing Help From Top-Notch Academic Writers!{" "}
        </h1>
        <div className="relative flex items-center justify-center ">
          {/* Adjust the positioning and dimensions of the background elements */}

          <div className="absolute left-0 bottom-0 w-20 h-2 bg-secondary rounded"></div>
          <div className="absolute left-[-200px] top-0 w-[30%] h-[30%] ring-2 rounded-full ring-secondary  bg-transparent "></div>
          {/* Center the image */}
          <div className="relative">
            <Image
              src={heroimg}
              width={1400}
              height={1400}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
