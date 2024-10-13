"use client";
import Link from "next/link";
import React from "react";

const NavigationComponent = ({ activeNavItem, onNavItemClick }) => {
  const navItems = [
    "Home",
    "SAFE",
    "Find a  Co-founder",
    "Internship",
    "About Us",
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {navItems.map((item) => (
        <div
          key={item}
          className="relative"
          onClick={() => onNavItemClick(item)}
        >
          <Link
            href={`/${item.toLowerCase()}`}
            className={`py-2 px-4 ${
              activeNavItem === item ? "text-primary" : "text-black"
            }`}
          >
            {item}
          </Link>
          {activeNavItem === item && (
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-2 h-2 bg-primary rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationComponent;


