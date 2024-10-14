import React from "react";

import Linkedin from "@/public/images/linkedin.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="bg-background text-[#767676] w-full">
      <div className=" p-10 md:p-14 lg:p-20 w-full flex flex-col items-center justify-center ">
        <h1 className="font-[600] text-2xl lg:text-3xl text-center max-w-4xl">
          Follow YC and Work at a Startup on Linkedin for career advice, startup
          stories, and more.
        </h1>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#767676] bg-[#E9E9E9]   text-sm font-bold rounded-full px-6 py-2 transition duration-300 mt-4"
        >
          <Image src={Linkedin} alt="Linkedin" className="w-8 h-8 mr-2" />
          Follow Now
        </a>
      </div>
      <div className="h-1 bg-primary"></div>
    </section>
  );
};

export default Section1;
