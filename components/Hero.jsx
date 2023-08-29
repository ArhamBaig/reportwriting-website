import React from "react";
import Image from "next/image";
import { heroimg, dots } from "@/public/assets";

const Hero = () => {
  return (
    <div className="bg-primary py-12 overflow-hidden">
      <div className="container relative mx-auto px-1 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="absolute left-0 top-0 hidden md:block md:w-[30%] md:h-[30%] ring-2 rounded-full ring-secondary bg-transparent md:left-[-200px] md:top-0"></div>
        <h1 className="relative text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold z-10">
          World's Best Report Writing Help From Top-Notch Academic Writers
          <span className="text-secondary">!</span>
          <Image src={dots} className="w-full h-20 -z-10 absolute hidden md:block -left-60  -bottom-24 opacity-"/>
        </h1>

        <div className="relative flex items-center justify-center mt-6 md:mt-0">
          {/* Adjust the positioning and dimensions of the background elements */}
          <div className="absolute  left-0 bottom-0 w-1/4 h-1 bg-secondary rounded md:w-20 md:h-2"></div>
          <div className="absolute hidden md:block left-0 top-0 w-1/3 h-1/3 ring-2 rounded-full ring-secondary bg-transparent md:left-[-200px] md:top-0"></div>
          {/* Center the image */}
          <div className=" w-50 w-7/12 md:w-full ">
            <Image
              src={heroimg}
              width={1400}
              height={1400}
              alt="Hero Image"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
