// components/EventCard.js
import React from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const EventCard = ({
  image,
  title,
  description,
  date,
  time,
  bgColor = "#15222B",
  titleColor,
  desColor,
}) => {
  return (
    <div
      className={`relative p-4 rounded-3xl`}
      style={{ backgroundColor: bgColor }}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-40 object-cover rounded-3xl"
        />
      )}
      <div className="mt-3">
        <h1 className="text-base font-semibold " style={{ color: titleColor }}>
          {title}
        </h1>
        <p className=" text-xs w-[80%]" style={{ color: desColor }}>
          {description}
        </p>
        <div className="flex items-center gap-x-2 mt-2">
          {/* Conditionally render Calendar Icon and Date */}
          {date && (
            <div className="flex items-center bg-[#28353F] px-4 py-2 rounded-full space-x-1">
              <CalendarIcon className="text-white w-4 h-4" />
              <h1 className="text-white text-[10px]">{date}</h1>
            </div>
          )}
          {/* Conditionally render Time Icon and Time */}
          {time && (
            <div className="flex items-center bg-[#28353F] py-2 px-2 rounded-full space-x-1">
              <ClockIcon className="text-white w-4 h-4" />
              <h1 className="text-white text-[10px]">{time}</h1>
            </div>
          )}
        </div>
      </div>
      {/* Arrow Icon positioned absolutely */}
      <div className="absolute bottom-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center">
        <ArrowUpRightIcon className="text-[#15222B]" width={20} height={20} />
      </div>
    </div>
  );
};

export default EventCard;
