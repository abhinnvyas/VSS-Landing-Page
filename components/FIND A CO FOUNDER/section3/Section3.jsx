import React from "react";

const Section3 = () => {
  const steps = [
    "Create a profile and tell us about yourself",
    "Our matching engine shows you profiles that fit your preferences",
    "If a profile piques your interest, invite them to connect",
    "If they accept your invite, that's a match! Find a time to start the conversation.",
  ];

  return (
    <div>
      <div className="w-full mx-auto py-8 px-14 pb-14">
        <h2 className="text-3xl font-[700] text-center mb-10">
          How does it work?
        </h2>
        <ul className="space-y-6 md:space-y-8 lg:space-y-10">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start ">
              <span
                className="w-4 h-4 bg-red-500 rounded-full mt-1 mr-4 flex-shrink-0"
                aria-hidden="true"
              ></span>
              <span className="text-xl font-[500]">{step}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-1 bg-primary"></div>
    </div>
  );
};

export default Section3;
