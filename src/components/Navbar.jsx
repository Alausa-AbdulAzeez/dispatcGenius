import React from "react";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { navVariants } from "../utils/motion";
import { logoMain, spidgeniusremovebg } from "../assets";
import { navLinks, sectionLinks } from "../utils/constants";

const Navbar = ({ isVisible, pageType }) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 w-full px-[86px] py-[10px] h-[70px] flex justify-between z-[3] max-lg:px-[20px] ${
        isVisible ? "bg-white shadow-md" : "bg-transparent max-md:bg-white"
      }`}
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
    >
      <Link to={"/"} className="flex items-center">
        <img src={logoMain} alt="Logo" className="w-[140px] h-[66px]" />
      </Link>
      <div className="flex flex-1 max-w-[800px] max-md:flex-none">
        <ul className="w-[90%] flex  h-full items-center justify-evenly max-md:hidden z-[4] bg-white">
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
              href={
                pageType === "mainPage"
                  ? sectionLink?.href
                  : sectionLink?.subHref
              }
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
      <div className="w-[100vw] h-[50px] top-[70px]  border-t border-t-[#ebebeb2c] absolute left-0 hidden max-md:flex justify-center  shadow-md">
        <ul className="w-[90%] flex h-full gap-[25px] overflow-x-auto nav items-center  px-[20px]  z-[4]">
          {navLinks?.map((item, index) => (
            <NavLink
              key={item?.label}
              style={{ textDecoration: "none" }}
              to={item.href}
            >
              {({ isActive }) => (
                <li
                  className={`leading-normal  text-[14px] text-nowrap font-semibold ${
                    isActive
                      ? "text-[#575757] underline underline-offset-4"
                      : "text-[#aaaaaa]"
                  }`}
                >
                  {item?.label}
                </li>
              )}
            </NavLink>
          ))}
          {sectionLinks?.map((sectionLink) => (
            <a
              key={sectionLink?.label}
              href={
                pageType === "mainPage"
                  ? sectionLink?.href
                  : sectionLink?.subHref
              }
              className="leading-normal text-[14px] text-[#aaaaaa] font-semibold"
            >
              {sectionLink?.label}
            </a>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
