import React, { useEffect, useState } from "react";
import {
  DeliveryBlue,
  TravelBlue,
  bgLg,
  designerDude,
  logisticsDude,
  printBlue,
  printing,
  spidgeniusremovebg,
  transport,
  travelingDude,
  whiteBg,
} from "../assets/index";
import HeroText from "./HeroText";
import PublishingHeroText from "./PublishingHeroText";
import InterStateTravels from "./InterStateTravels";
import Navbar from "./Navbar";
import { animateScroll as scroll } from "react-scroll";
import BackToTop from "./BackToTop";

const Hero = () => {
  // ACTIVE INDEX
  const [activeIndex, setActiveIndex] = useState(0);

  // SCROLL VIEW
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down enough to show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can adjust the scroll behavior here
    });
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      className={`w-full h-full min-h-[500px] relative transition-opacity duration-[3000] ease-in-out`}
    >
      {isVisible && <BackToTop scrollToTop={scrollToTop} />}
      <Navbar isVisible={isVisible} pageType={"mainPage"} />
      <div
        className={` w-full h-full absolute flex items-center ${
          activeIndex === 1 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <div className="bg-white w-full h-full absolute top-0 left-0 overflow-hidden">
          <img
            src={printing}
            alt="printing press"
            className="h-[100%] w-[100%] object-cover max-md:hidden"
          />
          <img
            src={whiteBg}
            alt="printing press"
            className="h-[100%] w-[100%] object-cover hidden max-md:block"
          />
        </div>

        <PublishingHeroText />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden"></div>
      </div>
      <div
        className={` w-full h-full absolute flex items-center ${
          activeIndex === 0 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <div className="bg-white w-full h-full absolute top-0 left-0 overflow-hidden">
          <img
            src={bgLg}
            alt="bg"
            className="h-[100%] w-[100%] object-cover max-md:hidden object-left"
          />
          <img
            src={whiteBg}
            alt="printing press"
            className="h-[100%] w-[100%] object-cover hidden max-md:block"
          />
        </div>

        <HeroText />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden"></div>
      </div>
      <div
        className={` w-full h-full absolute flex items-center ${
          activeIndex === 2 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <div className="bg-white w-full h-full absolute top-0 left-0 overflow-hidden">
          <img
            src={transport}
            alt="transport"
            className="h-[100%] w-[100%] object-cover max-md:hidden"
          />
          <img
            src={whiteBg}
            alt="printing press"
            className="h-[100%] w-[100%] object-cover hidden max-md:block"
          />
        </div>

        <InterStateTravels />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden"></div>
      </div>
    </div>
  );
};

export default Hero;
