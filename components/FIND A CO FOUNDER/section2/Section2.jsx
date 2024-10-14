import React from "react";

const Section2 = () => {
  const newfeatures = [
    {
      name: "Good for all stages",
      description:
        "Whether you're getting to know people for the future, or ready to go now.",
    },
    {
      name: "Good for all stages",
      description:
        "Whether you're getting to know people for the future, or ready to go now.",
    },
    {
      name: "Good for all stages",
      description:
        "Whether you're getting to know people for the future, or ready to go now.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newfeatures.map((feature, index) => (
          <div key={index} className="flex  overflow-hidden">
            <div className="w-2 bg-red-500"></div>
            <div className="px-4">
              <h3 className="text-xl font-[700] mb-2">{feature.name}</h3>
              <p className="text-md font-[500]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
