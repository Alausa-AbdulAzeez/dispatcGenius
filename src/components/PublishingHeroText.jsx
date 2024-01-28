import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";
import HeroBtn from "./HeroBtn";

const PublishingHeroText = () => {
  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
      className="flex-1 h-full justify-center flex flex-col pl-[64px] text-textGray z-[2] max-sm:px-[20px]"
    >
      <div className="font-bold text-[40px] max-md:text-[30px] max-md:text-white">
        Publishing,
      </div>
      <div className="font-bold text-[32px]    no-underline text-[#1649EB]   max-md:text-[25px] w-fit">
        Graphics and{" "}
        <span className="italic    underline text-light-blue">
          General printing
        </span>
      </div>
      <div className="text-[20px] max-md:text-[14px] max-md:text-white  w-[80%]">
        Step into a world of creativity and precision with our publishing
        services.
      </div>
      <div className="flex gap-5 mt-[30px] ">
        <Link to={"https://wa.me/+2348090987851"} target="_blank">
          <HeroBtn text={"Contact us"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default PublishingHeroText;
