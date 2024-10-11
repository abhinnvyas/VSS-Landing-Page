// components/SloganSection.js
import RocketImage from "@/public/images/rocket.png";
import Image from "next/image";

export default function Slogan1Section() {
  return (
    <section className="p-10 mt-20 mb-20 bg-white text-center relative">
      {/* Slogan */}
      <h2 className="text-xl md:text-3xl font-semibold">
        Built to <span className="text-primary">Innovate</span>, Designed to{" "}
        <span className="text-primary">Inspire</span> and <br />
        Driven to <span className="text-primary">Succeed</span>.
      </h2>

      {/* Rocket Image */}
      <div className="absolute right-0 bottom-0 mr-4 mb-4">
        <Image
          src={RocketImage} // Path to your rocket image in /public folder
          alt="Rocket"
          width={80}
          height={80}
        />
      </div>
    </section>
  );
}
