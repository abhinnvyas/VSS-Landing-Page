"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationComponent = ({ isScrolled }) => {
  const pathname = usePathname();
  const isCurrentPage = (path) => {
    return pathname === path;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center space-x-0 space-y-3 bg-dark py-4 text-light md:mt-0 md:flex-row md:space-x-6 md:space-y-0 md:bg-transparent bg-white md:p-0 transition-all ease-in-out ${
        isScrolled ? "bg-transparent" : ""
      }`}
    >
      <Link
        className={`${
          isCurrentPage("/") ? "border-b-2 border-light text-sm font-bold" : ""
        }`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${
          isCurrentPage("/blog")
            ? "border-b-2 border-light text-sm font-bold"
            : ""
        }`}
        href={"/blog"}
      >
        Book
      </Link>
      <Link
        className={`${
          isCurrentPage("/contact")
            ? "border-b-2 border-light text-sm font-bold"
            : ""
        }`}
        href={"/contact"}
      >
        SAFE
      </Link>
      <Link
        className={`${
          isCurrentPage("/about")
            ? "border-b-2 border-light text-sm font-bold"
            : ""
        }`}
        href={"/about"}
      >
        Find a Co-founder
      </Link>
      <Link
        className={`${
          isCurrentPage("/about")
            ? "border-b-2 border-light text-sm font-bold"
            : ""
        }`}
        href={"/about"}
      >
        Internships
      </Link>
      <Link
        className={`${
          isCurrentPage("/about")
            ? "border-b-2 border-light text-sm font-bold"
            : ""
        }`}
        href={"/about"}
      >
        About Us
      </Link>

      <Link
        href={"/"}
        className="bg-primary text-sm  text-white px-4 py-2 rounded-full flex justify-center items-center font-semibold shadow-md  transition-all duration-300 ease-in-out active:scale-90 md:hidden"
      >
        Join Now
      </Link>
      <Link
        href={"/"}
        className="bg-transparent text-sm  border border-foreground px-6 py-2 rounded-full flex justify-center items-center font-semibold  md:hidden"
      >
        Log in
      </Link>
    </div>
  );
};

export default NavigationComponent;
