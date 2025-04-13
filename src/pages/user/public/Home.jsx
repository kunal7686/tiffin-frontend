import React, { useState } from "react";
import HeroSection from "../../../components/HeroSection";
import AboutSection from "../../../components/AboutSection";
import Footer from "../../../components/FooterSection";

function Home() {

  return (
    <div>
      <HeroSection  />
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default Home;
