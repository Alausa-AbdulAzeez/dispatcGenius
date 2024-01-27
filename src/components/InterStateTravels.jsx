import { Link } from "react-router-dom";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import HeroBtn from "./HeroBtn";

const InterStateTravels = () => {
  return (
    <motion.div
      className="flex-1 h-full justify-center flex flex-col pl-[64px] text-textGray z-[2] max-sm:px-[20px]"
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
    >
      <div className="font-bold text-[40px] max-sm:text-[30px] text-[#1649EB]">
        Unleash the Journey
      </div>

      <div className="text-[20px] max-md:text-[14px]">
        Seamless Interstate Travel, Personalized Hire Services, and
        Unforgettable Group Picnics
      </div>
      <div className="flex gap-5 mt-[30px] ">
        <Link to={"https://wa.me/+2348090987851"} target="_blank">
          <HeroBtn text={"Contact us"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default InterStateTravels;
