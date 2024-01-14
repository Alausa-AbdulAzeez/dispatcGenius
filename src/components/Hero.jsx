import React, { useEffect, useState } from "react";
import {
  Character,
  Character2,
  DeliveryBlue,
  Object,
  Travel2,
  TravelBlue,
  print2,
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
      <motion.div
        className="absolute flex justify-between w-full pl-[40px]  top-[30px] z-[3]"
        variants={navVariants}
        initial="hidden"
        whileInView={"show"}
      >
        <Link to={"/"}>
          <img src={spidgeniusremovebg} alt="Logo" />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks?.map((item, index) => {
            return (
              <NavLink
                key={item?.label}
                style={{ textDecoration: "none" }}
                to={item.href}
              >
                {({ isActive }) => (
                  <li
                    className={`font-montserrat leading-normal text-lg text-[#d6d6d6] ${
                      isActive ? "text-[#7ffff4]" : ""
                    }`}
                  >
                    {item?.label}
                  </li>
                )}
              </NavLink>
            );
          })}
          <li
            className={`font-montserrat leading-normal text-lg text-[#d6d6d6]`}
          >
            <a href="#contactUs">Contact us</a>
          </li>
        </ul>
      </motion.div>
      <div
        className={`bg-primaryWhine w-full h-full absolute flex items-center ${
          activeIndex === 1 ? "opacity-[1]" : "opacity-[0]"
        }`}
      >
        <PublishingHeroText />
        <div className="flex-1 h-full flex items-center justify-center">
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
        <div className="flex-1 h-full flex items-center justify-center">
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
        <div className="flex-1 h-full flex items-center justify-center">
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
