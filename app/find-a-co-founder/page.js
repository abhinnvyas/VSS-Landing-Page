import HeroSection from "@/components/FIND A CO FOUNDER/hero/HeroSection";
import Section1 from "@/components/FIND A CO FOUNDER/section1/Section1";
import Section2 from "@/components/FIND A CO FOUNDER/section2/Section2";
import Section3 from "@/components/FIND A CO FOUNDER/section3/Section3";
import TopCofounders from "@/components/FIND A CO FOUNDER/top cofounders/TopCofounders";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <Section1 />
      <Section2 />
      <TopCofounders />
      <Section3 />
      <Footer />
    </div>
  );
};

export default page;
