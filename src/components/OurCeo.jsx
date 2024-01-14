import React from "react";
import { roundCeo } from "../assets";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const OurCeo = () => {
  return (
    <div className="flex  items-center flex-col h-auto pb-[30px] bg-gray-50 max-md:h-auto max-md:pb-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center mt-[40px]`}
      >
        <TypingText title="| Our CEO" textStyles="text-center text-[20px]" />
        <div className="mt-[8px] font-normal text-[40px] text-center w-[100%]   max-md:text-[30px] mb-[10px]">
          Micheal Mureni
        </div>
      </motion.div>

      <div className=" w-[250px] h-[250px]  rounded-full ">
        <img
          src={roundCeo}
          alt="customer"
          className="rounded-full  object-cover bg-center  w-[250px] h-[250px]"
        />
      </div>
      <p className="mt-6 text-[20px] text-center w-[70%] max-md:w-full px-4">
        Join us in redefining the landscape of dispatch, travel, and publishing.
        At SpidGenius, we don't just meet expectations; we exceed them. Let's
        embark on a journey together – where every dispatch, every trip, and
        every print is a testament to our commitment to excellence. Explore the
        possibilities with us as we navigate the roads, transcend boundaries,
        and bring your ideas to fruition.
      </p>
    </div>
  );
};

export default OurCeo;
