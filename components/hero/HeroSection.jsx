// components/Hero.js
import Image from "next/image";
import HeroImage from "@/public/images/hero.png";
import Rocket from "@/public/images/rcket.png";

export default function HeroSection() {
  return (
    <section className="p-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-10 min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl ">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <h1 className="text-[80px] font-bold text-gray-900">Vadodara </h1>
            <Image
              className="object-contain h-20 w-20"
              src={Rocket}
              width={1000}
              height={1000}
            />
          </div>
          <h1 className="text-[80px] font-bold text-gray-900">
            <span className="">Startup Studio</span>
          </h1>
          <p className="text-lg font-semibold text-[#111111] mt-4">
            Empowering Innovators: Crafting, Launching, and Scaling Startups
            with Expert Guidance and Resources
          </p>

          {/* Input Field and CTA Button */}
          <div className="mt-8 flex justify-center  rounded-2xl border-[1px] bg-[#E9E9E9] border-[#6C7C88] w-[500px] md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="border bg-transparent border-gray-300 rounded-l-2xl p-3 w-full "
            />
            <button className="bg-primary text-white px-5 py-3 rounded-r-2xl  font-semibold hover:bg-primary-dark">
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
    </section>
  );
}
