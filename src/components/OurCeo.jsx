import React from "react";
import { roundCeo, spidgenius2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const OurCeo = () => {
  return (
    <div className="flex items-center flex-col h-auto pb-[30px] bg-gray-50 max-md:h-auto max-md:pb-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center mt-[40px]`}
      >
        <TypingText title="| Our CEO" textStyles="text-center text-[20px]" />
        {/* <div className="mt-[8px] font-normal text-[40px] text-center w-[100%]   max-md:text-[30px] mb-[10px]">
          Micheal Mureni
        </div> */}
      </motion.div>

      <div className="flex mt-[24px] max-md:flex-col">
        <motion.div
          className="  h-full flex-1 relative"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="absolute w-full h-full bg-[#00000067] top-0 left-0"></div>
          <img
            src={spidgenius2}
            alt="customer"
            className="object-cover bg-center "
          />
        </motion.div>
        <motion.div
          className="flex flex-col flex-1 items-center gap-[60px] justify-center max-md:mb-[30px]"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col">
            <div className="mt-[8px] font-normal text-[40px] text-center w-[100%] max-md:text-[30px] text-main-blue">
              Olutayo Michael M.
            </div>
            <div className=" font-semibold italic text-[20px] text-center w-[100%]  max-md:text-[30px] mb-[40px] max-md:mb-[0px]">
              Associate Chartered Accountant CEO, SpidGenius
            </div>
          </div>
          <blockquote className="mt-6 text-[20px] text-center w-[90%] max-md:w-full px-4">
            Join us in redefining the landscape of dispatch, travel, and
            publishing. At SpidGenius, we don't just meet expectations; we
            exceed them. Let's embark on a journey together – where every
            dispatch, every trip, and every print is a testament to our
            commitment to excellence. Explore the possibilities with us as we
            navigate the roads, transcend boundaries, and bring your ideas to
            fruition.
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default OurCeo;
