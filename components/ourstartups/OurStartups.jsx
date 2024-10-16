"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArrowImage from "@/public/images/arrow.png";

const startups = [
  {
    id: 1,
    name: "TechNova",
    description: "Revolutionizing AI-driven solutions for small businesses.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 2,
    name: "EcoGrow",
    description: "Sustainable agriculture tech for urban environments.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 3,
    name: "HealthPulse",
    description: "Wearable tech for real-time health monitoring and analysis.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 4,
    name: "SpaceVenture",
    description: "Pioneering affordable space tourism solutions.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 5,
    name: "CyberShield",
    description: "Next-gen cybersecurity for IoT devices and smart homes.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 6,
    name: "QuantumLeap",
    description: "Quantum computing solutions for complex data analysis.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 7,
    name: "RoboAssist",
    description: "AI-powered robotic assistants for elderly care.",
    imageUrl: "/images/p1.png",
  },
  {
    id: 8,
    name: "GreenEnergy",
    description: "Innovative solar and wind energy storage solutions.",
    imageUrl: "/images/p1.png",
  },
];

export default function OurStartups() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % startups.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + startups.length) % startups.length
    );
  };

  const visibleStartups = isMobile
    ? [startups[currentIndex]]
    : startups.slice(0, 6);

  return (
    <section className="p-4 md:p-10 bg-[#F6F4FF] pt-20 pb-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Startups</h2>

        <div
          className={`${
            isMobile ? "relative" : "grid grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {visibleStartups.map((startup) => (
            <div
              key={startup.id}
              className="bg-transparent overflow-hidden transition duration-300 mb-8 md:mb-0"
            >
              <Image
                src={startup.imageUrl}
                alt={startup.name}
                width={400}
                height={240}
                className="w-full h-60 object-cover rounded-3xl"
              />
              <div className="flex items-center justify-between">
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{startup.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {startup.description}
                  </p>
                </div>
                <div className="p-4  flex justify-end items-center hover:cursor-pointer">
                  <Image
                    src={ArrowImage}
                    alt="Arrow"
                    width={1000}
                    height={1000}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}

          {isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        <div className={`justify-center mt-8 ${isMobile ? "hidden" : "flex"}`}>
          <button className="text-black  py-2 px-6 rounded-full">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
