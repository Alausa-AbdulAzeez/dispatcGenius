import React, { useEffect, useState } from "react";
import {
  DeliveryBlue,
  TravelBlue,
  printBlue,
  spidgeniusremovebg,
} from "../assets/index";
import HeroText from "../components/HeroText";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "../utils/motion";
import PublishingHeroText from "../components/PublishingHeroText";
import InterStateTravels from "../components/InterStateTravels";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/constants";
import Footer from "../components/Footer";
import { TypingText } from "../components/CustomTexts";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Dispatch = () => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] relative transition-opacity duration-[3000] ease-in-out flex flex-col `}
      >
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
                      className={`font-montserrat leading-normal text-lg text-[#d6d6d6] ${
                        isActive ? "text-[#7ffff4]" : ""
                      }`}
                    >
                      {item?.label}
                    </li>
                  )}
                </NavLink>
              );
            })}
            <li
              className={`font-montserrat leading-normal text-lg text-[#d6d6d6]`}
            >
              <a href="#contactUs">Contact us</a>
            </li>
          </ul>
        </motion.div>

        <div
          className={`bg-primaryGreen w-full h-[100vh] absolute flex items-center `}
        >
          <HeroText />
          <div className="flex-1 h-full flex items-center justify-center">
            <img
              src={DeliveryBlue}
              // src={Object}
              alt="delivery-boy-image"
              className="object-fill h-[460px] w-[370px]"
            />
          </div>
        </div>
      </div>
      <section className="py-[30px] pt-[50px] ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` mx-auto flex flex-col items-center`}
        >
          <TypingText
            title="| Dispatch services"
            textStyles="text-center text-[24px]"
          />
          <motion.div
            className="mt-[8px] font-normal text-[24px] text-center w-[70%] mb-[40px]"
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
          >
            At <span className="font-extrabold text-black">SpidGenius,</span> we
            pride ourselves on delivering prompt and reliable dispatch services.
            Whether it's urgent documents, packages, or specialized shipments,
            our dedicated team ensures swift and secure delivery to your
            doorstep. We go beyond logistics, providing a seamless experience
            that you can trust.
          </motion.div>
          <Link to={"https://wa.me/+2348090987851"} target="_blank">
            <Button
              label="Make enquiries"
              iconUrl={arrowRight}
              backgroundColor="bg-[#999]"
              textColor="text-white"
            />
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Dispatch;
