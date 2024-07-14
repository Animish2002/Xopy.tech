import React from "react";
import StickyScrollRevealDemo from "../Layout/LandingPage/StickyScrollRevealDemo";
import HeroSection from "../Layout/LandingPage/HeroSection";
import Team from "../Layout/LandingPage/Team";
import XopyFeatures from "../Layout/LandingPage/XopyFeatures";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <XopyFeatures />
      <StickyScrollRevealDemo />
      <Team />
    </>
  );
};

export default LandingPage;
