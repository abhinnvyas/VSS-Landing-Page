// components/CTABanner.js

import Image from "next/image";
import StartUpImage from "../../public/images/startup.jpg";

export default function CTABanner() {
  return (
    <section className="bg-[#15222B] p-10 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
      {/* Left Side: Image */}
      <div className="relative w-full lg:w-[50%] h-[300px] lg:h-[500px]">
        {/* Image taking up 50% of the width */}
        <Image
          src={StartUpImage}
          alt="Startup Workspace"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="rounded-lg"
        />
      </div>

      {/* Right Side: Text and Call-to-action */}
      <div className="w-full lg:w-[50%] flex flex-col justify-between space-y-6 lg:space-y-0 lg:pl-12">
        <div className="text-white text-left space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Your Workspace Awaits – Reserve Now!
          </h1>
          <p className="text-md lg:text-lg">
            Book your coworking space in just a few clicks! Whether you need a
            quiet desk for focused work or a collaborative environment for your
            team, our startup studio offers flexible, professional workspaces
            designed to boost productivity. Reserve your ideal spot and enjoy
            access to modern amenities, high-speed internet, and a vibrant
            community of innovators. Get started today!
          </p>
        </div>

        {/* Red Button with Arrow */}
        <div className="flex justify-start lg:justify-end">
          <button className="bg-red-500 hover:bg-red-600 text-white p-4 lg:p-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 lg:h-8 lg:w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
