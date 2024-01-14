import React from "react";
import { Character } from "../assets";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const OurCeo = () => {
  return (
    <div className="flex  items-center flex-col h-[70vh] bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center mt-[40px]`}
      >
        <TypingText
          title="| Our founder"
          textStyles="text-center text-[20px]"
        />
        <div className="mt-[8px] font-normal text-[40px] text-center w-[100%] ">
          Micheal Mureni
        </div>
      </motion.div>
      <img
        src={Character}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque
        aut veniam asperiores natus pariatur voluptatibus ab at modi esse.
      </p>

      {/* <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        Mureni Micheal || Founder
      </h3> */}
    </div>
  );
};

export default OurCeo;
