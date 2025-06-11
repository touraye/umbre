import Award from "@/components/Award";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import ReasonsToChoose from "@/components/ReasonsToChoose";
import Request from "@/components/Request";
import Services from "@/components/Services";
import StatsGrid from "@/components/StatsGrid";
import SuccessStory from "@/components/SuccessStory";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
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

