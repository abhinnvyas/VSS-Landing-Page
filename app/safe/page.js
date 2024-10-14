import Footer from "@/components/Footer/footer";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/SAFE/hero/Hero";
import Section1 from "@/components/SAFE/section1/Section1";
import Section2 from "@/components/SAFE/section2/Section2";
import React from "react";

const page = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default page;
