import React from "react";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { navVariants } from "../utils/motion";
import { spidgeniusremovebg } from "../assets";
import { navLinks, sectionLinks } from "../utils/constants";

const Navbar = ({ isVisible }) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 w-full px-[86px] py-[10px] h-[70px] flex justify-between z-[3] ${
        isVisible ? "bg-white shadow-md" : "bg-transparent"
      }`}
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
    >
      <Link to={"/"} className="flex items-center">
        <img src={spidgeniusremovebg} alt="Logo" />
      </Link>
      <div className="flex flex-1 max-w-[800px]">
        <ul className="w-[90%] flex  h-full items-center justify-evenly max-lg:hidden z-[4] bg-white">
          {navLinks?.map((item, index) => {
            return (
              <NavLink
                key={item?.label}
                style={{ textDecoration: "none" }}
                to={item.href}
              >
                {({ isActive }) => (
                  <li
                    className={`leading-normal text-[14px]   font-semibold ${
                      isActive
                        ? "text-[#575757] underline underline-offset-4"
                        : "text-[#aaaaaa]"
                    }`}
                  >
                    {item?.label}
                  </li>
                )}
              </NavLink>
            );
          })}
          {sectionLinks?.map((sectionLink) => (
            <a
              href={sectionLink?.href}
              className="leading-normal text-[14px] text-[#aaaaaa] font-semibold"
            >
              {sectionLink?.label}
            </a>
          ))}
        </ul>

        <a href="#contactUs">
          <button className="bg-main-blue w-[120px] px-[20px] h-full max-md:px-[14px] max-md:py-[7px] border border-transparent text-white rounded-sm  cursor-pointer hover:bg-[#243469] hover:text-white transition-all duration-[3000] ease-in-out">
            Contact us
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
