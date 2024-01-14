import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

const PublishingHeroText = () => {
  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
      className="flex-1 h-full justify-center flex flex-col pl-[64px] text-white z-[2]"
    >
      <div className="font-bold text-[40px]">Publishing</div>
      <div className="font-bold text-[32px] underline text-[#77FFE8]">
        (Graphics and{" "}
        <span className="italic no-underline text-[#00F0FF]">
          General printing)
        </span>
      </div>
      <div className="text-[20px]">
        Step into a world of creativity and precision with our publishing
        services.
      </div>
      <div className="flex gap-5 mt-[30px] ">
        <Link to={"https://wa.me/+2348090987851"} target="_blank">
          <button className="bg-white px-[20px] py-[14px] border border-transparent text-black rounded-lg  cursor-pointer hover:bg-transparent hover:text-white hover:border-white transition-all duration-[3000] ease-in-out">
            Contact us
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PublishingHeroText;
