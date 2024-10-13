import React from "react";
import Image from "next/image";

const WorkspaceBanner = () => {
  return (
    <div className="relative h-[70vh] w-full flex-shrink-0">
      {/* Background Image with Gradient Overlay */}
      <Image
        src="/images/workspace.png"
        alt="Workspace"
        layout="fill" // Makes the image fill the entire container
        objectFit="contain" // Ensures the image covers the area
        quality={100}
        className="h-full w-full absolute left-0"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover w-full bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.00) 3.25%, rgba(21, 34, 43, 0.50) 40.43%, rgba(21, 34, 43, 0.74) 50.78%, #15222B 76.67%)`,
        }}
      ></div>

      {/* Content placed on top of the image */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start p-6 lg:p-10 text-white">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
          Your Workspace Awaits – Reserve Now!
        </h1>
        <p className="text-base lg:text-lg mb-6 max-w-xl">
          Book your coworking space in just a few clicks! Whether you need a
          quiet desk for focused work or a collaborative environment for your
          team, our startup studio offers flexible, professional workspaces
          designed to boost productivity. Reserve your ideal spot and enjoy
          access to modern amenities, high-speed internet, and a vibrant
          community of innovators. Get started today!
        </p>

        {/* Arrow Button */}
        <div className="mt-6">
          <div className="bg-red-500 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 lg:h-8 lg:w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceBanner;
