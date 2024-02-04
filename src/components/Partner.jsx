import React from "react";
import { handShake, roundCeo, spidgenius2 } from "../assets";
import { motion } from "framer-motion";
import {
  fadeIn,
  navVariants,
  slideIn,
  staggerContainer,
} from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { Link } from "react-router-dom";
import { logisticsFeatures, partnershipTypes } from "../utils/constants";
import StartSteps from "./StartSteps";
import { arrowRightWhite } from "../assets/icons";
import Button from "./Button";

const Partner = () => {
  return (
    <div
      className="flex items-center flex-col justify-center min-h-[100vh] h-auto pt-[20px]  max-md:pb-10 bg-bgHandshake bg-center bg-cover bg-no-repeat relative"
      id="partnership"
    >
      <div className="absolute w-full h-full bg-[#000000bb] top-0 left-0 z-[1] "></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center z-[2]`}
      >
        <TypingText
          title="| Become a partner"
          textStyles="text-center text-[20px] text-[white]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("left", "tween", 0.2, 1)}
        className={` mx-auto flex flex-col items-center z-[2] text-white`}
      >
        <motion.div
          className="mt-[8px] font-normal text-[24px] text-center w-[70%] max-md:w-[90%] mb-[40px] max-lg:w-[80%] max-md:text-[16px]"
          variants={navVariants}
          initial="hidden"
          whileInView={"show"}
        >
          <h1 className="text-[50px] mb-[30px] max-md:text-[35px]">
            We are open for partnership from individuals and businesses such as
          </h1>
          <div className="flex flex-col gap-[10px] mt-[30px] max-md:gap-[15px]">
            {partnershipTypes?.map((logisticsFeature, index) => {
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
    </div>
  );
};

export default Partner;
