import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import OurCeo from "../components/OurCeo";
import Partner from "../components/Partner";
import Insights from "./Insights";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-[100vw] h-[100vh]">
        <Hero />
      </div>
      <Services />
      <About />
      <Insights />
      <Partner />
      <OurCeo />
      <Footer />
    </div>
  );
};

export default Home;
