import React from "react";
import { TravelBlue } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "../utils/motion";
import InterStateTravels from "../components/InterStateTravels";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { TypingText } from "../components/CustomTexts";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Interstate = () => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] relative transition-opacity duration-[3000] ease-in-out flex flex-col `}
      >
        <Navbar />

        <div
          className={`bg-primaryPurple w-full h-[100vh] absolute flex items-center `}
        >
          <InterStateTravels />
          <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
            <img
              src={TravelBlue}
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
            title="| Inter-state travels"
            textStyles="text-center text-[24px]"
          />
          <motion.div
            className="mt-[8px] font-normal text-[24px] text-center w-[70%] mb-[40px] max-md:w-[80%] max-md:text-[16px]"
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
          >
            Experience the freedom of boundless exploration with
            <span className="font-extrabold text-black">SpidGenius'</span>{" "}
            interstate travel services. We don't just take you from one place to
            another; we craft journeys filled with comfort, convenience, and
            unforgettable moments. Our commitment to safety and efficiency
            ensures that every trip becomes a memorable adventure.
          </motion.div>
          <Link to={"#"}>
            <Button
              label="Coming soon"
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

export default Interstate;
