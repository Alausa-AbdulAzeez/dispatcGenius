import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const InterStateTravels = () => {
  return (
    <motion.div
      className="flex-1 h-full justify-center flex flex-col pl-[64px] text-white z-[2]"
      variants={fadeIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
    >
      <motion.div className="font-bold text-[40px]">
        Inter-state travels
      </motion.div>
      <div className="font-bold text-[32px] underline text-[#77FFE8]">
        Coming soon
      </div>
      <div className="text-[20px]">
        Experience the freedom of boundless exploration with our interstate
        travel services.
      </div>
    </motion.div>
  );
};

export default InterStateTravels;
