// components/Hero.js
import Image from "next/image";
import HeroImage from "@/public/images/hero.png"; // Ensure this path is correct

export default function HeroSection() {
  return (
    <>
      <section className=" bg-background">
        <div className="flex flex-col md:flex-row items-center justify-between w-full p-10 min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-lg mt-20 md:mt-14 lg:mt-10 px-7">
            <div className="flex items-center space-x-3">
              <h1 className="text-6xl font-bold text-[#111111]">Vadodara</h1>
              <Image
                src={"/asset/rocket.png"} // Ensure this path is correct
                width={1000}
                height={1000}
                alt="Rocket"
                className="object-contain h-20 w-20"
              />
            </div>
            <span className="text-[#111111] text-5xl font-bold mt-2 inline-block">
              Startup Studio
            </span>
            <p className="text-base text-[#111111] font-semibold mt-4">
              Empowering Innovators: Crafting, Launching, and Scaling Startups
              with Expert Guidance and Resources
            </p>

            {/* Input Field and CTA Button */}
            <div className="mt-8 flex justify-center items-center bg-[#E9E9E9] border-[1px] border-[#6C7C88] w-96 rounded-3xl md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 ml-4 w-full bg-[#E9E9E9] rounded-l-full text-[#62717B] font-bold focus:outline-none"
              />
              <button className="bg-[#E93C3C] text-white my-2 mr-4 text-sm w-[40%] py-2 rounded-full font-semibold hover:bg-[#D63636]">
                Join Now
              </button>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="mt-12 md:mt-0 md:ml-12 grid grid-cols-2 gap-4 max-w-md">
            {/* Main Image */}
            <div className="col-span-2">
              <Image
                src={HeroImage} // Replace with actual path in /public
                alt="Main Image"
                width={988}
                height={660}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Red Bar at the Bottom of the Section */}
        <div className="w-full h-4 bg-red-600 mt-16"></div>
      </section>
    </>
  );
}
