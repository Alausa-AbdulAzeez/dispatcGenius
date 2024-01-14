import React from "react";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { motion } from "framer-motion";

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
          title="| About Spidgenius"
          textStyles="text-center text-[20px]"
        />
        <div className="mt-[8px] font-normal text-[20px] text-center w-[70%] max-md:w-[80%] max-md:text-[16px]">
          Welcome to{" "}
          <span className="font-extrabold text-black">SpidGenius</span>, where
          we transcend boundaries, connect destinations, and bring your visions
          to life. We seamlessly blend{" "}
          <span className="font-extrabold text-black">dispatch services</span>{" "}
          <span className="font-extrabold text-black">interstate travels</span>,
          and cutting-edge{" "}
          <span className="font-extrabold text-black">publishing</span> ,
          creating an all-encompassing experience that goes beyond the ordinary
        </div>
      </motion.div>
    </section>
  );
};

export default About;
