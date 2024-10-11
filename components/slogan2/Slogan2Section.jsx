// components/Slogan2Section.js
import { FaLightbulb, FaQuoteRight } from "react-icons/fa"; // Importing icons from react-icons

export default function Slogan2Section() {
  return (
    <section className="p-10 mt-20 mb-20">
      <div className="container  mx-auto text-center flex items-center justify-center space-x-4 ">
        {/* Lightbulb icon on the left */}
        <FaLightbulb className="text-gray-300 text-4xl hidden sm:block" />

        {/* Main slogan text */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 leading-snug">
          <span className="text-gray-500">
            Events that engage experiences that
          </span>{" "}
          <span className="text-gray-800">spark connections</span>,
          <span className="text-gray-800 font-semibold"> fuel creativity</span>,
          <span className="text-gray-500">and</span>
          <span className="text-gray-800 font-semibold">
            {" "}
            empower bold ideas
          </span>
          .
        </h2>

        {/* Quote icon on the right */}
        <FaQuoteRight className="text-gray-300 text-4xl hidden sm:block" />
      </div>
    </section>
  );
}
