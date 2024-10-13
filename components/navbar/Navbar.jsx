"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ColorLogo from "@/public/images/logo.png";
import NavigationComponent from "./NavigationComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [makeNavigationVisible, setmakeNavigationVisible] = useState(false);
  const [isScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home"); // Track active nav item

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <nav
      className={`fixed top-0 w-full md:h-[64px] flex items-center bg-background justify-between p-4 z-50 ${
        makeNavigationVisible ? "px-4 pt-4 pb-0 shadow-lg" : "p-4"
      } transition-all ease-in-out duration-500`}
    >
      <div className="flex items-center justify-between w-full px-10 ">
        {/* Logo on the left side */}
        <Link href={"/"}>
          <Image
            src={ColorLogo}
            width={1000}
            height={1000}
            alt="Logo"
            className="h-20 w-28 object-contain cursor-pointer"
          />
        </Link>

        {/* Centered Navigation Component */}
        <div className="flex justify-center md:block">
          <NavigationComponent
            isScrolled={isScrolled}
            activeNavItem={activeNavItem} // Pass active item
            onNavItemClick={handleNavItemClick} // Pass click handler
          />
        </div>

        {/* Mobile and additional items on the right */}
        <div className="flex items-center justify-between space-x-4">
          <Link
            href={"/"}
            className="bg-primary text-sm text-white px-6 py-2 rounded-full md:flex justify-center items-center font-semibold shadow-md transition-all duration-300 ease-in-out active:scale-90 hidden"
          >
            Join Now
          </Link>
          <Link
            href={"/"}
            className="bg-transparent text-sm border border-foreground px-6 py-2 rounded-full md:flex justify-center items-center font-semibold hidden"
          >
            Log in
          </Link>
          <button
            onClick={() => setmakeNavigationVisible(!makeNavigationVisible)}
            className="block md:hidden"
          >
            {makeNavigationVisible ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div
        className={`${
          makeNavigationVisible ? "block" : "hidden"
        } md:hidden w-full mt-4 border-t border-light`}
      >
        <NavigationComponent
          activeNavItem={activeNavItem} // Pass active item
          onNavItemClick={handleNavItemClick} // Pass click handler
        />
      </div>
    </nav>
  );
};

export default Navbar;
