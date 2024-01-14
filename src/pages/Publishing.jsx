import React from "react";
import { printBlue } from "../assets/index";
import { motion } from "framer-motion";
import { navVariants, staggerContainer } from "../utils/motion";
import PublishingHeroText from "../components/PublishingHeroText";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { TypingText } from "../components/CustomTexts";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import Navbar from "../components/Navbar";

const Publishing = () => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] relative transition-opacity duration-[3000] ease-in-out flex flex-col `}
      >
        <Navbar />

        <div
          className={`bg-primaryWhine w-full h-[100vh] absolute flex items-center `}
        >
          <PublishingHeroText />
          <div className="flex-1 h-full flex items-center justify-center max-sm:hidden">
            <img
              src={printBlue}
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
            title="| Publishing (Graphics and General Printing):"
            textStyles="text-center text-[24px] max-md:text-[14px] visible max-md:hidden"
          />
          <div className="text-center text-[24px] max-md:text-[18px] max-md:w-[80%] font-normal md:hidden max-md:visible ">
            Publishing (Graphics and Geeeneral Printing)
          </div>
          <motion.div
            className="mt-[8px] font-normal text-[24px] text-center w-[70%] mb-[40px] max-md:w-[80%] max-md:text-[16px]"
            variants={navVariants}
            initial="hidden"
            whileInView={"show"}
          >
            Step into a world of creativity and precision with our publishing
            services. From striking graphics to impeccable general printing,{" "}
            <span className="font-extrabold text-black">SpidGenius</span>{" "}
            transforms ideas into tangible reality. Our team of skilled
            professionals merges innovation with expertise, delivering
            high-quality prints that leave a lasting impression. Whether it's a
            promotional campaign or personalized designs, we bring your vision
            to life on paper.
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

export default Publishing;
