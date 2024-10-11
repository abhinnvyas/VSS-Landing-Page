// components/OurStartups.js
import Image from "next/image";
import StartupImmage from "@/public/images/startup.jpg";
import ArrowImage from "@/public/images/arrow.png";

export default function OurStartups() {
  const startups = [
    {
      id: 1,
      name: "Startup 1",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have a...",
      imageUrl: StartupImmage, // Replace with real image paths
    },
    {
      id: 2,
      name: "Startup 2",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have a...",
      imageUrl: StartupImmage,
    },
    {
      id: 3,
      name: "Startup 3",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have a...",
      imageUrl: StartupImmage,
    },
    {
      id: 4,
      name: "Startup 4",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have a...",
      imageUrl: StartupImmage,
    },
    {
      id: 5,
      name: "Startup 5",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have a...",
      imageUrl: StartupImmage,
    },
    {
      id: 6,
      name: "Startup 6",
      description:
        "YC companies have raised $85 billion dollars from the best investors in the world. Our founders have a...",
      imageUrl: StartupImmage,
    },
  ];

  return (
    <section className="p-10 bg-[#F6F4FF] pt-20 pb-20">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Startups</h2>

        {/* Responsive grid for startup cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-transparent  overflow-hidden  transition duration-300"
            >
              {/* Image */}
              <Image
                src={startup.imageUrl}
                alt={startup.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-3xl"
              />
              <div className="flex items-center justify-between">
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{startup.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {startup.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="p-4  flex justify-end items-center hover:cursor-pointer">
                  <Image src={ArrowImage} alt="Arrow" width={60} height={60} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
