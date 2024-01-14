import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const InterStateTravels = () => {
  return (
    <motion.div
      className="flex-1 h-full justify-center flex flex-col pl-[64px] text-white z-[2] max-sm:px-[20px]"
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
    >
      <div className="font-bold text-[40px] max-sm:text-[30px]">
        Inter-state travels
      </div>
      <div className="font-bold text-[32px] underline text-[#77FFE8] max-sm:text-[25px]">
        Coming soon
      </div>
      <div className="text-[20px] max-md:text-[14px]">
        Experience the freedom of boundless exploration with our interstate
        travel services.
      </div>
    </motion.div>
  );
};

export default InterStateTravels;
