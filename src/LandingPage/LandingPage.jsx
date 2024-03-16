"use Client"
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Team from "./Team";
import Footer from "./Footer";
import Static from "./Static";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Static />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
