import Image from "next/image";
import HeroImage from "@/public/images/SAFE/safeheroimage.png"; // Ensure this path is correct

const Hero = () => {
  return (
    <section className=" bg-background">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-10 min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="text-center  md:text-left max-w-lg mt-20 md:mt-14 lg:mt-10 px-7">
          <div className="flex items-center space-x-3"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[500]  text-[#111111]">
            Simple Agreement For Future Equity (SAFE)
          </h1>

          {/* <p className="text-base text-[#111111] font-semibold mt-4">
            Empowering Innovators: Crafting, Launching, and Scaling Startups
            with Expert Guidance and Resources
          </p> */}

          <button className="bg-[#E93C3C] font-bold text-white my-2 mt-5 mr-4 text-lg px-6 py-2 rounded-full  hover:bg-[#D63636]">
            Download the SAFE
          </button>
        </div>

        {/* Right Images Section */}
        <div className="mt-12 grid grid-cols-2 gap-4 max-w-md">
          {/* Main Image */}
          <div className="col-span-2">
            <Image
              src={HeroImage} // Replace with actual path in /public
              alt="Main Image"
              width={988}
              height={660}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* Red Bar at the Bottom of the Section */}
      <div className="w-full h-4 bg-red-600 mt-16"></div>
    </section>
  );
};

export default Hero;
