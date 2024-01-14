import React from "react";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { navVariants } from "../utils/motion";
import { spidgeniusremovebg } from "../assets";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  return (
    <motion.div
      className="absolute flex justify-between w-full pl-[40px]  top-[30px] z-[3]"
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
    >
      <Link to={"/"}>
        <img src={spidgeniusremovebg} alt="Logo" />
      </Link>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks?.map((item, index) => {
          return (
            <NavLink
              key={item?.label}
              style={{ textDecoration: "none" }}
              to={item.href}
            >
              {({ isActive }) => (
                <li
                  className={`leading-normal text-lg text-[#d6d6d6] ${
                    isActive ? "text-pale-blue" : "text-[#d6d6d6]"
                  }`}
                >
                  {item?.label}
                </li>
              )}
            </NavLink>
          );
        })}
        <li className={`font-montserrat leading-normal text-lg text-[#d6d6d6]`}>
          <a href="#contactUs">Contact us</a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
