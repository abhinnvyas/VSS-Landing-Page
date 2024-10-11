"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ColorLogo from "@/public/images/logo.png";
import NavigationComponent from "./NavigationComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [makeNavigationVisible, setmakeNavigationVisible] = useState(false);
  //   const [Opacity, setOpacity] = useState("bg-black bg-opacity-0");
  const [isScrolled, setIsScrolled] = useState(false);

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       const handleScroll = () => {
  //         if (window.scrollY > 100) {
  //           setIsScrolled(true);
  //           setOpacity("bg-opacity-100");
  //         } else {
  //           setOpacity("bg-opacity-0");
  //           setIsScrolled(false);
  //         }
  //       };
  //       window.addEventListener("scroll", handleScroll);
  //       return () => window.removeEventListener("scroll", handleScroll);
  //     }
  //   }, []);

  return (
    <nav
      className={`fixed top-0 w-full md:h-[64px] flex items-center bg-background justify-between p-4 z-50 ${
        makeNavigationVisible ? "px-4 pt-4 pb-0 shadow-lg" : "p-4"
      }  transition-all ease-in-out duration-500`} // ${Opacity}
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={ColorLogo}
              width={70}
              height={30}
              alt="Adinath Financial Services Logo"
              className="object-contain"
            />
          </Link>
          <div className="hidden md:block">
            <NavigationComponent isScrolled={isScrolled} />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Link
              href={"/"}
              className="bg-primary text-sm  text-white px-6 py-2 rounded-full md:flex justify-center items-center font-semibold shadow-md  transition-all duration-300 ease-in-out active:scale-90 hidden"
            >
              Join Now
            </Link>
            <Link
              href={"/"}
              className="bg-transparent text-sm  border border-foreground px-6 py-2 rounded-full md:flex justify-center items-center font-semibold  hidden"
            >
              Log in
            </Link>
            <button
              onClick={() => setmakeNavigationVisible(!makeNavigationVisible)}
              className="block md:hidden"
            >
              {makeNavigationVisible ? (
                <XMarkIcon className="h-8 w-8 " />
              ) : (
                <Bars3Icon className="h-8 w-8 " />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            makeNavigationVisible ? "block" : "hidden"
          } md:hidden w-full mt-4 border-t border-light`}
        >
          <NavigationComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
