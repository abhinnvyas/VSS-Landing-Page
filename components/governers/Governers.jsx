"use client";
import { useState } from "react";
import Image from "next/image";

const governors = [
  {
    name: "Dr. Devanshu J Patel",
    title: "President",
    description:
      "Dr. Devanshu Patel, A Dynamic Visionary President Of Parul University, Whose Unflinching Commitment Towards Education Has Made An Impact Not Only In Gujarat But In All The Diversified States Of India And Going Beyond National Borders.",
    image: "/images/devanshu.png",
  },
  {
    name: "Dr. Jane Smith",
    title: "Vice President",
    description:
      "Dr. Jane Smith is a renowned educator with over 20 years of experience in higher education. Her innovative approaches to curriculum development have transformed the learning experience for thousands of students.",
    image: "/images/devanshu.png",
  },
  {
    name: "Prof. Michael Johnson",
    title: "Dean of Sciences",
    description:
      "Professor Johnson has been at the forefront of scientific research for the past decade. His work in renewable energy has garnered international recognition and numerous awards.",
    image: "/images/devanshu.png",
  },
  {
    name: "Dr. Emily Chen",
    title: "Head of International Relations",
    description:
      "Dr. Chen has played a pivotal role in establishing global partnerships for the university. Her efforts have led to numerous exchange programs and collaborative research initiatives.",
    image: "/images/devanshu.png",
  },
  {
    name: "Mr. Robert Taylor",
    title: "Chief Financial Officer",
    description:
      "With his extensive background in finance and education, Mr. Taylor has successfully steered the university through challenging economic times while ensuring continued growth and development.",
    image: "/images/devanshu.png",
  },
  {
    name: "Dr. Sarah Patel",
    title: "Dean of Humanities",
    description:
      "Dr. Sarah Patel is a distinguished scholar in the field of comparative literature. Her passion for interdisciplinary studies has led to the creation of several innovative programs at the university.",
    image: "/images/devanshu.png",
  },
];

export default function Governers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextGovernor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % governors.length);
  };

  const prevGovernor = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + governors.length) % governors.length
    );
  };
  return (
    <div className="border-b-4  border-[#E42A2A]  bg-[#15222B] text-white">
      {/* Top section */}
      <div className="relative overflow-hidden px-10">
        <div className="absolute -top-10 left-10 w-2 h-40 bg-red-600"></div>
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[150px] border-r-[150px] border-t-transparent border-r-red-600"></div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-8 w-10">BOARD OF GOVERNORS</h2>
          <div className="flex flex-col md:flex-row items-center space-x-8">
            {/* Logo */}
            <div className="relative flex justify-center items-center  p-10">
              {/* Right Laurel Wing (Flipped) */}
              <div className="absolute ">
                <Image
                  src="/images/pngwing.png" // Same image, but flipped horizontally
                  alt="Right Laurel Wing"
                  width={300}
                  height={300}
                  className="object-contain" // Flipping the image horizontally
                />
              </div>

              {/* Center Profile Image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300 z-10">
                <Image
                  src={governors[currentIndex].image}
                  alt={governors[currentIndex].name}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-red-600">
                {governors[currentIndex].name}
              </h3>
              <p className="text-gray-400">{governors[currentIndex].title}</p>
              <p className="mt-2 text-xs md:text-sm max-w-xl">
                {governors[currentIndex].description}
              </p>
              <div className="flex mt-4 space-x-2">
                {governors.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-red-600" : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevGovernor}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={nextGovernor}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
