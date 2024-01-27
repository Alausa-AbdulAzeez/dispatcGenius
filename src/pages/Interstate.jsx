import React from "react";
import { TravelBlue, transport, whiteBg } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "../utils/motion";
import InterStateTravels from "../components/InterStateTravels";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { TypingText } from "../components/CustomTexts";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import { transportFeatures } from "../utils/constants";
import StartSteps from "../components/StartSteps";

const Interstate = ({ isVisible, scrollToTop }) => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] relative transition-opacity duration-[3000] ease-in-out flex flex-col `}
      >
        {isVisible && <BackToTop scrollToTop={scrollToTop} />}
        <Navbar isVisible={isVisible} pageType={"subPage"} />

        <div className={`w-full h-[100vh] absolute flex items-center `}>
          <div className="bg-white w-full h-full absolute top-0 left-0 overflow-hidden">
            <img
              src={transport}
              alt="bg"
              className="h-[100%] w-[100%] object-cover max-md:hidden"
            />
            <img
              src={whiteBg}
              alt="printing press"
              className="h-[100%] w-[100%] object-cover hidden max-md:block"
            />
          </div>
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
      <section className="py-[30px] pt-[50px] ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` mx-auto flex flex-col items-center`}
        >
          <TypingText
            title="| Inter-state travels"
            textStyles="text-center text-[24px]"
          />
          <motion.div
            className="mt-[8px] font-normal text-[24px] text-center w-[70%] mb-[40px] max-lg:w-[80%] max-md:w-[90%] max-md:text-[16px]"
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
          >
            <h1 className="text-[50px] mb-[30px] max-md:text-[35px]">
              We render services such as
            </h1>
            <div className="flex flex-col gap-[10px] mt-[30px]">
              {transportFeatures?.map((transportFeature, index) => {
                return (
                  <StartSteps
                    key={transportFeature}
                    number={index + 1}
                    text={transportFeature}
                  />
                );
              })}
            </div>
          </motion.div>
          <Link to={"#"}>
            <Button
              label="Coming soon"
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

export default Interstate;
