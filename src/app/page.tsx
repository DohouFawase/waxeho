'use client'
  ;
import HeroSection from "./_components/HeroSection";
import ServiceSetion from "./_components/ServiceSection";
import SolutionSection from "./_components/SolutionSection";
import FaqSeection from "./_components/FaqSeection";
// import WaitlistPage from "./_components/WhitListSection";
import TestimonialSection from "./_components/TestimonialSection";

export default function Home() {

  return (
    <div className="">
      <div className="">
        <HeroSection />
        <ServiceSetion />
        <SolutionSection />
        <FaqSeection />
        {/* <WaitlistPage /> */}
        <TestimonialSection />
      </div>
    </div>
  );
}
