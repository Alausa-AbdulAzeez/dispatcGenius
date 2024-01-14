import React from "react";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { motion } from "framer-motion";
import { services } from "../utils/constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-[30px] pt-[50px] bg-[#F5F6FF] h-[100vh]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center`}
      >
        <TypingText title="| Services" textStyles="text-center text-[20px]" />
        <div className="mt-[8px] font-normal text-[40px] text-center w-[70%] ">
          Navigate Boundless Possibilities with Spidgenius
        </div>
      </motion.div>

      <motion.section
        className="max-container flex justify-center flex-wrap gap-9 px-[64px] my-[30px] "
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
      >
        {services?.map((service, index) => {
          return (
            <ServiceCard
              key={service?.label}
              {...service}
              index={index}
              link={service?.link}
            />
          );
        })}
      </motion.section>
    </section>
  );
};

export default Services;
