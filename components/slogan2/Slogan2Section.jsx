// components/Slogan2Section.js
import Image from "next/image";

export default function Slogan2Section() {
  return (
    <section className="p-10 mt-20 mb-20 bg-background">
      <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center space-x-4">
        {/* Lightbulb icon on the left */}
        <div className="hidden md:block absolute -bottom-3 left-20">
          {" "}
          {/* Hide on small screens for responsiveness */}
          <Image
            src="/images/bulb.png"
            alt="Lightbulb"
            width={1000}
            height={1000}
            className="object-contain h-32 w-32"
          />
        </div>

        {/* Main slogan text */}
        <h2 className="text-lg md:text-4xl text-center font-bold text-gray-800 leading-snug max-w-4xl">
          <span className="text-gray-500">
            Events that engage experiences that{" "}
          </span>
          <span className="text-gray-800">spark connections</span>,
          <span className="text-gray-800 font-semibold"> fuel creativity</span>,{" "}
          <span className="text-gray-500">and</span>{" "}
          <span className="text-gray-800 font-semibold">
            empower bold ideas
          </span>
          .
        </h2>

        {/* Quote icon on the right */}
        <div className="hidden md:block absolute -top-10 right-20">
          {" "}
          {/* Hide on small screens for responsiveness */}
          <Image
            src="/images/quote.png"
            alt="Quote"
            width={1000}
            height={1000}
            className="object-contain h-32 w-32"
          />
        </div>
      </div>
    </section>
  );
}
