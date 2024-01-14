import React, { useEffect, useState } from "react";
import {
  DeliveryBlue,
  TravelBlue,
  printBlue,
  spidgeniusremovebg,
} from "../assets/index";
import HeroText from "./HeroText";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import PublishingHeroText from "./PublishingHeroText";
import InterStateTravels from "./InterStateTravels";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/constants";
import Navbar from "./Navbar";

const Hero = () => {
  // ACTIVE INDEX
  const [activeIndex, setActiveIndex] = useState(0);

  // USE EFFECT TO SET ALTERNATE BACKGROUNDS
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={`w-full h-full relative transition-opacity duration-[3000] ease-in-out`}
    >
      <Navbar />
      <div
        className={`bg-primaryWhine w-full h-full absolute flex items-center ${
          activeIndex === 1 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <PublishingHeroText />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
          <img
            src={printBlue}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          />
        </div>
      </div>
      <div
        className={`bg-primaryGreen w-full h-full absolute flex items-center ${
          activeIndex === 0 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <HeroText />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
          <img
            src={DeliveryBlue}
            // src={Object}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          />
        </div>
      </div>
      <div
        className={`bg-primaryPurple w-full h-full absolute flex items-center ${
          activeIndex === 2 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <InterStateTravels />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
          <img
            src={TravelBlue}
            // src={Travel2}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
