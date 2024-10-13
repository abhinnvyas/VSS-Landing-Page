// components/WorkspaceBanner.js
import React from 'react';
import Image from 'next/image';
import BackgroundImage from '@/public/images/background.jpg'; // Ensure the correct path to the image

const WorkspaceBanner = () => {
  return (
    <div className="relative h-[924px] w-[1095px] flex-shrink-0">
      {/* Background Image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.00) 3.25%, rgba(21, 34, 43, 0.50) 40.43%, rgba(21, 34, 43, 0.74) 50.78%, #15222B 76.67%), url('/images/background.jpg')`,
        }}
      ></div>

      {/* Content inside the banner */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-start p-10 text-white">
        <h1 className="text-5xl font-bold mb-6">Your Workspace Awaits – Reserve Now!</h1>
        <p className="text-lg mb-8 max-w-xl">
          Book your coworking space in just a few clicks! Whether you need a quiet desk for focused
          work or a collaborative environment for your team, our startup studio offers flexible,
          professional workspaces designed to boost productivity. Reserve your ideal spot and enjoy
          access to modern amenities, high-speed internet, and a vibrant community of innovators.
          Get started today!
        </p>

        {/* Arrow Button */}
        <div className="mt-8">
          <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceBanner;
