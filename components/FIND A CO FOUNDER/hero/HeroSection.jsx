import Image from "next/image";
import React from "react";
import HeroImage from "@/public/images/cofounderhero.png";

const HeroSection = () => {
  return (
    <div className="w-full p-10 min-h-[calc(100vh-80px)] bg-background">
      <div className="flex flex-col items-center">
        {/* Text */}
        <div className="mt-20 md:mt-14 lg:mt-20 text-center">
          <h1 className="font-[600] text-4xl md:text-5xl lg:text-5xl">
            Find a Co-founder
          </h1>
          <p className="font-[500] text-lg lg:text-xl md:text-xl  text-[#6C7C88] mt-2 md:mt-4">
            Where savvy founders go to meet potential co‑founders
          </p>
        </div>

        {/* Image */}
        <div className="mt-5 w-[80%]  md:w-[70%] lg:w-[60%]">
          <Image
            src={HeroImage}
            width={1000}
            height={1000}
            alt="Logo"
            className="w-full object-contain cursor-pointer "
          />
        </div>

        <button className="bg-[#E93C3C] font-bold text-white my-2 mt-5 mr-4 text-lg px-6 py-2 rounded-full  hover:bg-[#D63636]">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
