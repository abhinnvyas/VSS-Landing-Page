import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className=" bg-[#15222B] pt-10 text-white">
      {/* Bottom section */}
      <div className="bg-[#15222B] pb-10 ">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/vss.png"
              alt="Vadodara Startup Studio"
              width={1000}
              height={1000}
              className="mb-4 h-20 w-60 object-contain"
            />
            <p className="text-sm max-w-md">
              BBA Building, PARUL INNOVATION & ENTREPRENEURSHIP RESEARCH CENTRE
              Parul University P.O.Limda, Ta.Waghodia - 391760 Dist. Vadodara,
              Gujarat (India)
            </p>
            <p className="mt-4 text-sm">
              Phone : 0266 - 8260350
              <br />
              Email : pierc@paruluniversity.ac.in
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-1/2 lg:w-2/3">
            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-red-600 font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>Achievements</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-red-600 font-semibold mb-4">
                Our Operational Plan
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Startup Incubation Program</li>
                <li>Startup Growthpad Program</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-red-600 font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">
                Don{"'"}t Miss To Subscribe To Our New Feeds, Kindly Fill The
                Form Below.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-r-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#15222B] border-y-2 border-[#FFFFFF1A] py-4 text-center text-sm">
        <p>© Copyright 2021. All Rights Reserved by Parul University.</p>
      </div>
    </div>
  );
}

export default Footer;
