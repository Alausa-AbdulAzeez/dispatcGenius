import React from "react";
import { handShake, roundCeo, spidgenius2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, navVariants, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { Link } from "react-router-dom";
import { logisticsFeatures, partnershipTypes } from "../utils/constants";
import StartSteps from "./StartSteps";
import { arrowRightWhite } from "../assets/icons";
import Button from "./Button";

const Partner = () => {
  return (
    <div
      className="flex items-center flex-col h-auto pb-[100px] max-md:h-auto max-md:pb-10"
      id="partnership"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center mt-[40px]`}
      >
        <TypingText
          title="| Become a partner"
          textStyles="text-center text-[20px]"
        />
        {/* <div className="mt-[8px] font-normal text-[40px] text-center w-[100%]   max-md:text-[30px] mb-[10px]">
          Micheal Mureni
        </div> */}
      </motion.div>

      <div className="flex flex-row-reverse mt-[24px] max-md:flex-col max-md:items-center">
        <motion.div
          className="  h-full flex-1 relative"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="absolute w-full h-full bg-[#00000067] top-0 left-0"></div>
          <img
            src={handShake}
            alt="customer"
            className="object-cover bg-center "
          />
        </motion.div>
        <motion.div
          className="flex flex-col flex-1 items-center  justify-center max-md:w-[90%]"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col">
            <div className="mt-[8px] font-normal text-[40px] text-center w-[100%] max-md:text-[30px] text-main-blue">
              Let's do it together
            </div>
          </div>
          <p className="mt-6 text-[20px] text-center w-[90%] max-md:w-full px-4">
            We welcome partnerships with individuals and organizations to
            mutually promote our services. Additionally, we provide
            opportunities for collaboration with bike and bus owners for
            logistics and travel services. We also invite printing presses to
            join us in producing unique prints for mutual benefit.
          </p>
          {/* <Link to={"https://wa.me/+2348090987851"} target="_blank">
            <button className="bg-main-blue mt-[20px]  px-[20px] max-md:px-[14px] max-md:py-[7px] py-[14px] border border-transparent text-white rounded-md  cursor-pointer hover:bg-dark-blue hover:text-white hover:border-white transition-all duration-[3000] ease-in-out">
              Register here
            </button>
          </Link> */}
        </motion.div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center `}
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
