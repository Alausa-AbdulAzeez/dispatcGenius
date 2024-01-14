import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { arrowRight } from "../assets/icons";
import Button from "./Button";

const ServiceCard = ({ imgURL, label, subtext, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <Button
        label="View more"
        iconUrl={arrowRight}
        backgroundColor="bg-[#999]"
        textColor="text-white"
      />
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
