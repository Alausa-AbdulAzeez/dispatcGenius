import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { arrowRight } from "../assets/icons";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const ServiceCard = ({ imgURL, label, subtext, index, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={() => navigate(`${link}`)}
      className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10 max-md:px-[16px] max-md:min-w-[260px] maxWidth`}
    >
      <div className=" w-full h-[200px] overflow-hidden ">
        <img
          src={imgURL}
          alt="bg"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold max-md:text-2xl">
        {label}
      </h3>
      {subtext?.map((sub, index) => {
        return (
          <li
            className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray"
            key={index}
          >
            {sub}
          </li>
        );
      })}
    </motion.div>
  );
};

export default ServiceCard;
