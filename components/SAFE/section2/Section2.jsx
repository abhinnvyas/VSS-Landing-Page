import React from "react";

const Section2 = () => {
  return (
    <section className="bg-background text-black w-full">
      <div className=" p-10 md:p-14 lg:p-20 w-full flex flex-col items-center justify-center">
        <p className="font-[600] text-md lg:text-xl md:text-lg text-left">
          Needless to say, VSS does not assume responsibility for the contents
          of, or the consequence of using, any version of the safe or any other
          document found on our website. Before using any of these forms, you
          should consult with a lawyer licensed in the country where your
          company was formed.
        </p>
        <button className="bg-[#E93C3C] font-bold text-white my-2 mt-5 mr-4 text-md px-6 py-2 rounded-full  hover:bg-[#D63636]">
          Download the SAFE
        </button>
      </div>
      <div className="h-1 bg-primary"></div>
    </section>
  );
};

export default Section2;
