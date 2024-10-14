import Footer from "@/components/Footer/footer";
import HeroSection from "@/components/INTERNSHIP/hero/HeroSection";
import RecentlyAdded from "@/components/INTERNSHIP/recently added/RecentlyAdded";
import Section1 from "@/components/INTERNSHIP/section1/Section1";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <RecentlyAdded />
      <Section1 />
      <Footer />
    </div>
  );
};

export default page;
