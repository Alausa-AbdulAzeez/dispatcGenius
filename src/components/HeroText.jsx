import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import HeroBtn from "./HeroBtn";

const HeroText = () => {
  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
      className="flex-1 h-full justify-center flex flex-col pl-[64px] text-textGray z-[2]  max-sm:px-[20px]"
    >
      <div className="font-bold text-[40px] text-text max-md:text-[30px] ">
        On-Demand Dispatch
      </div>
      <div className="font-bold text-[32px] no-underline text-[#1649EB]  max-md:text-[25px]">
        Anytime,{" "}
        <span className="italic  underline    text-light-blue">Anywhere</span>
      </div>
      <div className="text-[20px] max-md:text-[14px] text-textGray">
        Ensuring prompt and secure delivery to your destination with swift
        dispatch services.
      </div>
      <div className="flex gap-5 mt-[30px] max-md:flex-col">
        <Link to={"https://wa.me/+2348090987851"} target="_blank">
          <HeroBtn text={"Request dispatch"} />
        </Link>
        {/* <Link to={"https://wa.me/+2348090987851"} target="_blank">
          <button className="bg-none px-[20px] py-[14px] max-md:px-[14px] max-md:py-[7px] text-white rounded-lg border border-white hover:bg-[#00F0FF] hover:border-[#00F0FF] hover:text-black transition-all duration-[3000] ease-in-out">
            Confirm package status
          </button>
        </Link> */}
      </div>
    </motion.div>
  );
};

export default HeroText;
