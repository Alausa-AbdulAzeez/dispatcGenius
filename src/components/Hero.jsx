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
      className={`w-full h-full relative transition-opacity duration-[3000] ease-in-out`}
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
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        {/* <div className=" w-[620px] h-[700px] absolute bottom-0 left-[40%] overflow-hidden bg-white rounded-[20px] p-[20px]">
          <img
            src={designerDude}
            alt="bg"
            className="h-[80%] w-[80%] object-cover absolute bottom-0 right-0 rounded-[20px]"
          />
        </div> */}
        <PublishingHeroText />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
          {/* <img
            src={printBlue}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          /> */}
        </div>
      </div>
      <div
        className={` w-full h-full absolute flex items-center ${
          activeIndex === 0 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <div className="bg-white w-full h-full absolute top-0 left-0 overflow-hidden">
          <img src={bgLg} alt="bg" className="h-[100%] w-[100%] object-cover" />
        </div>
        {/* <div className="w-[338px] h-[480px] absolute bottom-[10%] right-[20%] flex items-center justify-center">
          <img
            src={logisticsDude}
            alt="bg"
            className="h-[100%] w-[100%] rounded-[20px] object-cover"
          />
        </div> */}
        <HeroText />
        <div className="flex-1 h-full flex items-center justify-center ">
          {/* <img
            src={DeliveryBlue}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          /> */}
        </div>
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
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        {/* <div className=" w-[380px] h-[540px] absolute bottom-0 left-[40%] overflow-hidden bg-white rounded-[20px] p-[20px]">
          <img
            src={travelingDude}
            alt="bg"
            className="h-[80%] w-[80%] object-cover absolute bottom-0 right-0"
          />
        </div> */}
        <InterStateTravels />
        <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
          {/* <img
            src={TravelBlue}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
