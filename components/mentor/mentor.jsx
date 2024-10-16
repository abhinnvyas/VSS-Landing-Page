"use client";
import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Mentor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mentors = [
    {
      name: "Mrs. Ray Paul",
      title: "Chief Executive Officer",
      image: "/images/paul.png",
    },
    {
      name: "Mrs. Jane Doe",
      title: "Chief Technology Officer",
      image: "/images/paul.png",
    },
    {
      name: "Mr. John Smith",
      title: "Chief Financial Officer",
      image: "/images/paul.png",
    },
    {
      name: "Ms. Alice Johnson",
      title: "Chief Marketing Officer",
      image: "/images/paul.png",
    },
    {
      name: "Dr. Bob Brown",
      title: "Chief Research Officer",
      image: "/images/paul.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (mentors.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (mentors.length - 2)) % (mentors.length - 2)
    );
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Top class Co-founders
      </h2>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {mentors.map((founder, index) => (
              <div key={index} className="w-full flex-shrink-0 lg:w-1/3 px-2">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-10 right-0 rounded-l-full bg-[#15222B] text-white px-6 py-2">
                    <h3 className="font-bold text-base">{founder.name}</h3>
                    <p className="text-xs">{founder.title}</p>
                  </div>
                </div>
                <button className="w-full text-sm md:text-md mt-2 py-2 md:py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Consult
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(mentors.length - 2)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
