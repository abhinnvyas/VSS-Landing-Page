// pages/events.js
import React from "react";
import StartupImage from "@/public/images/event.png"; // Ensure this path is correct for your image
import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    title: "Event 1",
    description:
      "This is an event held by startup foundations for startups to present their idea.",
    date: "20th Jan 2024",
    time: "10:00 AM",
    image: StartupImage,
    bgColor: "#15222B", // Dynamic background color
    titleColor: "#FFFFFF", // Dynamic title color
    desColor: "#A5B9C8", // Dynamic description color
  },
  {
    id: 2,
    title: "Event 2",
    description:
      "This a event held by startup foundations for startups to present their idea",
    bgColor: "#E8E8E8", // No date, time, or image
    image: StartupImage,
    titleColor: "#111111",
    desColor: "#111111",
  },
  {
    id: 3,
    title: "Event 3",
    description:
      "This is an event held by startup foundations for startups to present their idea.",
    date: "22nd Jan 2024",
    time: "2:00 PM",
    image: StartupImage,
    bgColor: "#15222B",
    titleColor: "#FFFFFF",
    desColor: "#A5B9C8",
  },
  {
    id: 4,
    title: "Event 4",
    description:
      "This a event held by startup foundations for startups to present their idea",
    bgColor: "#E8E8E8", // No image, date, or time
    textColor: "#111111",
    desColor: "#111111",
  },

  // Add more events here as needed
];

const Events = () => {
  return (
    <div className="p-10 mt-20 relative mb-20 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-b-8 block md:hidden w-[20%] grid-cols-1 border-red-600">
          <h1 className="text-5xl font-bold mb-2 text-right">EVENTS</h1>
        </div>
        {events.map((event) => (
          <div key={event.id} className="col-span-1">
            <EventCard
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              bgColor={event.bgColor}
              titleColor={event.titleColor}
              desColor={event.desColor}
            />
          </div>
        ))}
        <div className="border-b-8 w-[20%] hidden md:block  absolute bottom-10  right-10 border-red-600">
          <h1 className="text-5xl font-bold mb-2 text-right">EVENTS</h1>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-black  py-2 px-6 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
};

export default Events;
