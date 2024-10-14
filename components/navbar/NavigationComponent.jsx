"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationComponent = ({ activeNavItem, onNavItemClick }) => {
  const pathname = usePathname();
  const isCurrentPage = (path) => {
    return pathname === path;
  };

  const navItems = [
    "Home",
    "SAFE",
    "Find a Co-founder",
    "Internship",
    "About Us",
  ];

  const navitems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "SAFE",
      link: "/safe",
    },
    {
      name: "Find a Co-founder",
      link: "/find-a-co-founder",
    },
    {
      name: "Internship",
      link: "/internship",
    },
    { name: "About Us", link: "/about-us" },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row bg-background">
      {navitems.map((item) => (
        <div
          key={item.id}
          className="relative "
          onClick={() => onNavItemClick(item.name)}
        >
          <Link
            href={`${item.link}`}
            className={`py-2 px-4  ${
              isCurrentPage(item.link) ? "text-primary" : "text-black"
            }`}
          >
            {item.name}
          </Link>
          {isCurrentPage(item.link) && (
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-2 h-2 bg-primary rounded-full hidden md:flex" />
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationComponent;
