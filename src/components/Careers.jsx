import React from "react";
import { career, handShake, roundCeo, spidgenius2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div
      className="flex items-center flex-col h-auto pb-[100px] max-md:h-auto max-md:pb-10 bg-[#F5F6FF]"
      id="career"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center mt-[40px]`}
      >
        <TypingText
          title="| Career opportunities"
          textStyles="text-center text-[20px]"
        />
        {/* <div className="mt-[8px] font-normal text-[40px] text-center w-[100%]   max-md:text-[30px] mb-[10px]">
          Micheal Mureni
        </div> */}
      </motion.div>

      <div className="flex flex-row-reverse mt-[24px] max-md:flex-col">
        <motion.div
          className="  h-full flex-1 relative"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="absolute w-full h-full bg-[#00000067] top-0 left-0"></div>
          <img
            src={career}
            alt="customer"
            className="object-cover bg-center w-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col flex-1 items-center  justify-center"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col">
            <div className="mt-[8px] font-normal text-[40px] text-center w-[100%] max-md:text-[30px] text-main-blue">
              Let's grow together
            </div>
          </div>
          <p className="mt-6 text-[20px] text-center w-[90%] max-md:w-full px-4">
            Ready for an exciting new challenge? If you’re ambitious, humble,
            and love working with others, then we want to hear from you!Enjoy
            flexibility, freedom and competitive earnings by working with
            SpidGenius.
          </p>
          <Link to={"https://forms.gle/vFBRt7rb6DUCoeew8"} target="_blank">
            <button className="bg-main-blue mt-[20px]  px-[20px] max-md:px-[14px] max-md:py-[7px] py-[14px] border border-transparent text-white rounded-md  cursor-pointer hover:bg-dark-blue hover:text-white hover:border-white transition-all duration-[3000] ease-in-out">
              Register here
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
