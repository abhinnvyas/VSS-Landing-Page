import Events from "@/components/events/Events";
import Footer from "@/components/Footer/footer";
import Governers from "@/components/governers/Governers";
import HeroSection from "@/components/hero/HeroSection";
import InvestmentPartners from "@/components/investmentpartners/InvestmentPartners";
import Mentor from "@/components/mentor/mentor";
import Navbar from "@/components/navbar/Navbar";
import OurStartups from "@/components/ourstartups/OurStartups";
import Slogan1Section from "@/components/slogan1/Slogan1Section";
import Slogan2Section from "@/components/slogan2/Slogan2Section";
import StatsSection from "@/components/stats/StatsSection";
import WorkspaceBanner from "@/components/workspace/WorkSpace";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <InvestmentPartners />
      <Slogan1Section />
      <OurStartups />
      <Slogan2Section />
      <Events />
      {/* <WorkspaceBanner /> */}
      <Mentor />
      <Governers />
      <Footer />
    </div>
  );
}
