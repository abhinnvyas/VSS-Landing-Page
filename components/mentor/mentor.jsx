import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mentors = [
  {
    name: "Mrs. Ray Paul",
    title: "Chief Executive Officer",
    image: "/images/paul.png",
  },
  {
    name: "Mrs. Ray Paul",
    title: "Chief Executive Officer",
    image: "/images/paul.png",
  },
  {
    name: "Mrs. Ray Paul",
    title: "Chief Executive Officer",
    image: "/images/paul.png",
  },
  {
    name: "Mrs. Ray Paul",
    title: "Chief Executive Officer",
    image: "/images/paul.png",
  },
];

export default function Mentor() {
  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Find a Mentor
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          We provide mentorship to improve your startups
        </p>

        <div className="relative flex justify-center items-center">
          <button className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md -ml-4">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <div className="flex justify-between w-full flex-wrap">
            {mentors.map((mentor, index) => (
              <div key={index} className="w-72 mx-auto mt-5 md:mt-0">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg relative">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-10 right-0  rounded-l-full bg-[#15222B]  text-white px-6 py-2">
                    <h3 className="font-bold text-base">{mentor.name}</h3>
                    <p className="text-xs">{mentor.title}</p>
                  </div>
                </div>
                <button className="w-full text-sm md:text-md mt-2 py-2 md:py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Consult
                </button>
              </div>
            ))}
          </div>

          <button className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md -mr-4">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
