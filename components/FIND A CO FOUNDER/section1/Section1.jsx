import React from "react";

const Section1 = () => {
  return (
    <section className="bg-background text-black w-full">
      <div className=" p-10 md:p-14 lg:p-20 w-full flex flex-col items-center justify-center ">
        <h1 className="font-[600] text-2xl lg:text-3xl text-center max-w-4xl">
          We know even the best founders don{"'"}t always have people in their
          network who are ready to start a company
        </h1>
        <p className="font-[600] text-[#6C7C88] text-xl mt-4 ">
          That's why we built co-founder matching
        </p>
      </div>
    </section>
  );
};

export default Section1;
