import React, { useEffect, useState } from "react";
import {
  DeliveryBlue,
  TravelBlue,
  bgLg,
  printBlue,
  spidgeniusremovebg,
} from "../assets/index";
import HeroText from "../components/HeroText";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "../utils/motion";
import PublishingHeroText from "../components/PublishingHeroText";
import InterStateTravels from "../components/InterStateTravels";
import { Link, NavLink } from "react-router-dom";
import { logisticsFeatures, navLinks } from "../utils/constants";
import Footer from "../components/Footer";
import { TypingText } from "../components/CustomTexts";
import Button from "../components/Button";
import { arrowRight, arrowRightWhite } from "../assets/icons";
import Navbar from "../components/Navbar";
import StartSteps from "../components/StartSteps";
import BackToTop from "../components/BackToTop";

const Dispatch = ({ isVisible, scrollToTop }) => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] relative transition-opacity duration-[3000] ease-in-out flex flex-col `}
      >
        {isVisible && <BackToTop scrollToTop={scrollToTop} />}
        <Navbar isVisible={isVisible} pageType={"subPage"} />

        <div className={` w-full h-full absolute flex items-center `}>
          <div className="bg-white w-full h-full absolute top-0 left-0 overflow-hidden">
            <img
              src={bgLg}
              alt="bg"
              className="h-[100%] w-[100%] object-cover"
            />
          </div>

          <HeroText />
          <div className="flex-1 h-full flex items-center justify-center ">
            {/* <img
            src={DeliveryBlue}
            alt="delivery-boy-image"
            className="object-fill h-[460px] w-[370px]"
          /> */}
          </div>
        </div>
      </div>
      <section className="py-[30px] pt-[50px] bg-slate-50 ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` mx-auto flex flex-col items-center `}
        >
          <TypingText
            title="| Dispatch services"
            textStyles="text-center text-[24px]"
          />
          <motion.div
            className="mt-[8px] font-normal text-[24px] text-center w-[70%] mb-[40px] max-md:w-[80%] max-md:text-[16px]"
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
          >
            <h1 className="text-[50px] mb-[30px]">
              We render services such as
            </h1>
            <div className="flex flex-col gap-[10px] mt-[30px]">
              {logisticsFeatures?.map((logisticsFeature, index) => {
                return (
                  <StartSteps
                    key={logisticsFeature}
                    number={index + 1}
                    text={logisticsFeature}
                  />
                );
              })}
            </div>
          </motion.div>
          <Link
            to={"https://wa.me/+2348090987851"}
            target="_blank"
            className="mb-[50px]"
          >
            <Button
              label="Make enquiries"
              iconUrl={arrowRightWhite}
              backgroundColor="bg-[#1649EB]"
              textColor="text-white"
            />
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Dispatch;
