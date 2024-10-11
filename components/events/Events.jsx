import React from "react";
import Image from "next/image";
import StartupImmage from "@/public/images/startup.jpg";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Events = () => {
  return (
    <div className="p-10 mt-20 mb-20">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          {/* Card 1 */}
          <div className="bg-[#15222B] p-4 rounded-3xl">
            <Image
              src={StartupImmage}
              alt="Card Image"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-3xl"
            />
            {/* Text */}
            <div>
              <h1 className="text-lg font-semibold text-white">Event 1</h1>
              <p className="text-gray-400 text-sm">
                This a event held by startup foundations for startups to present
                their idea
              </p>
              <div className="flex items-center justify-start space-x-2">
                <div className="bg-[#28353F] px-4 py-2 rounded-full">
                  <h1 className="text-white text-xs">20th Jan 2024</h1>
                </div>
                <div className="bg-[#28353F] px-4 py-2 rounded-full">
                  <h1 className="text-white text-xs">10:00 AM</h1>
                </div>
                <div className="bg-white  rounded-full w-10 h-10 flex items-center justify-center">
                  <ArrowUpRightIcon
                    className="text-[#15222B]"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Events;
