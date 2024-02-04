import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { motion } from "framer-motion";
import { spidgenius2, spidgeniusweb } from "../assets";
import { aimsAndObjectives } from "../utils/constants";
import ServiceCard from "./ServiceCard";
import AimsAndObjectivesCard from "./AimsAndObjectivesCard";

const About = () => {
  return (
    <section className="py-[30px] pt-[50px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center`}
      >
        <TypingText
          title="| About SpidGenius"
          textStyles="text-center text-[20px]"
        />
        <div className="flex mt-[24px] max-md:flex-col">
          <motion.div
            className="h-full flex-1 relative"
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
          >
            <div className="h-auto relative flex items-start">
              <div className="absolute w-full h-full left-0 bg-[#00000067]"></div>
              <img
                src={spidgeniusweb}
                alt="customer"
                className="object-cover bg-center"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col flex-1 items-center justify-center "
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
          >
            <div className="mt-[8px] font-normal max-md:w-[90%] text-[40px] text-center w-[100%] max-md:text-[30px] text-main-blue italic">
              ...Promptness with accuracy
            </div>
            <div className=" mt-6 w-[90%] max-md:w-full px-4 font-normal text-[20px] text-center  max-md:text-[16px]">
              Welcome to{" "}
              <span className="font-extrabold text-black">SpidGenius</span>,
              where we transcend boundaries, connect destinations, and bring
              your visions to life. We seamlessly blend{" "}
              <span className="font-extrabold text-black">
                dispatch services,
              </span>{" "}
              <span className="font-extrabold text-black">
                transport services
              </span>
              , and cutting-edge{" "}
              <span className="font-extrabold text-black">publishing</span> ,
              creating an all-encompassing experience that goes beyond the
              ordinary
            </div>
          </motion.div>
        </div>
        <motion.section
          className="max-container flex justify-center flex-wrap gap-9 px-[64px] my-[30px] max-md:px-[20px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
        >
          {aimsAndObjectives?.map((service, index) => {
            return (
              <AimsAndObjectivesCard
                key={service?.label}
                {...service}
                index={index}
                link={service?.link}
                maxWidth={"500px"}
              />
            );
          })}
        </motion.section>
      </motion.div>
    </section>
  );
};

export default About;
