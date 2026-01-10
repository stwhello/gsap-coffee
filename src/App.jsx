import React from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import MessageSection from "./sections/MessageSection.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection.jsx";
import BenefitSection from "./sections/BenefitSection.jsx";
import TestimonialSection from "./sections/TestimonialSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};
export default App;
