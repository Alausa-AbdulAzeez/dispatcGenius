import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { arrowRight } from "../assets/icons";
import { Link } from "react-router-dom";

const InsightCard = ({ imgUrl, title, subtitle, index, id, date }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Link
        className="flex md:flex-row flex-col gap-4"
        to={`/blog`}
        state={{ index: id }}
      >
        <div className="relative">
          <img
            src={imgUrl}
            alt="planet-01"
            className="md:w-[400px] w-full h-[180px] rounded-[32px] object-cover"
            width={270}
            height={250}
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col max-w-[650px] flex-1 md:ml-[62px]">
            <div className="font-semibold text-[24px] text-[#797979] leading-normal">
              {title}
            </div>

            <p className="mt-[5px] font-light  text-[18px] text-secondary-white leading-tight">
              {subtitle}
            </p>
            <p className="mt-[5px] text-[14px] font-bold text-main-blue text-secondary-white leading-tight">
              {date}
            </p>
          </div>

          <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-main-blue cursor-pointer">
            <img
              src={arrowRight}
              alt="arrow"
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default InsightCard;
