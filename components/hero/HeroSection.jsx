// components/Hero.js
import Image from "next/image";
import HeroImage from "@/public/images/hero.png";

export default function HeroSection() {
  return (
    <section className="p-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-10 min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-6xl font-bold text-gray-900">
            Vadodara <span className="text-primary">Startup Studio</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Empowering Innovators: Crafting, Launching, and Scaling Startups
            with Expert Guidance and Resources
          </p>

          {/* Input Field and CTA Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md p-3 w-full md:w-64"
            />
            <button className="bg-primary text-white px-5 py-3 rounded-r-md font-semibold hover:bg-primary-dark">
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
