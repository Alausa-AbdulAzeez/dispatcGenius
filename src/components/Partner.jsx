import React from "react";
import { handShake, roundCeo, spidgenius2 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";
import { Link } from "react-router-dom";

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
          {/* <p className="mt-6 text-[20px] text-center w-[90%] max-md:w-full px-4">
            Join us in redefining the landscape of dispatch, travel, and
            publishing. At SpidGenius, we don't just meet expectations; we
            exceed them. Let's embark on a journey together – where every
            dispatch, every trip, and every print is a testament to our
            commitment to excellence. Explore the possibilities with us as we
            navigate the roads, transcend boundaries, and bring your ideas to
            fruition.
          </p> */}
          <Link to={"https://wa.me/+2348090987851"} target="_blank">
            <button className="bg-main-blue mt-[20px]  px-[20px] max-md:px-[14px] max-md:py-[7px] py-[14px] border border-transparent text-white rounded-md  cursor-pointer hover:bg-dark-blue hover:text-white hover:border-white transition-all duration-[3000] ease-in-out">
              Register here
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
