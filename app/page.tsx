import Award from "@/components/Award";
import Banner from "@/components/Banner";
import CtaSection from "@/components/CtaSection";
import CustomTabs from "@/components/CustomTabs";
import Hero from "@/components/Hero";
import HeroSec from "@/components/HeroSec";
import Industry from "@/components/Industry";
import PlatformFeatures from "@/components/PlatformFeatures";
import PremiumServices from "@/components/PremiumServices";
import ReasonsToChoose from "@/components/ReasonsToChoose";
import Request from "@/components/Request";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import StatsGrid from "@/components/StatsGrid";
import SuccessStory from "@/components/SuccessStory";
import TechnologyExpertise from "@/components/TechnologyExpertise";
import WhyChooseUs from "@/components/WhyChoseUs";
import solutionData from "@/data/tabsData";

export default function Home() {
  return (
    <>
      <HeroSec />
      <PremiumServices />
      <PlatformFeatures />
      <CtaSection />
      <Solutions />
      <WhyChooseUs />
      <TechnologyExpertise />
      <Industry />
      <Banner />
      <section className="flex flex-col md:flex-row items-center justify-center bg-[#1C646D] py-4 px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <ReasonsToChoose />
        <StatsGrid />
      </section>
      <Award />
      <Services />
      <Request />
      <SuccessStory />
    </>
  );
}

