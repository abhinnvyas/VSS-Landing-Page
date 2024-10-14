import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "@/public/images/internshipheroimage.jpeg";

const HeroSection = () => {
  return (
    <div className="relative h-[300px]  overflow-hidden mt-20">
      <Image
        src={HeroImage}
        alt="Auditorium seats"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[700] mb-2 text-center">
          Find an Internship
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center">
          Find the right internship to gain experience
        </p>
        <Link
          href="/apply"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Apply now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
