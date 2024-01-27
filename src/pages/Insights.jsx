import React from "react";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { insights } from "../utils/constants";
import { TypingText } from "../components/CustomTexts";
import InsightCard from "../components/InsightCard";

const Insights = () => {
  return (
    <section
      className={`py-[30px] pt-[50px] bg-[#F5F6FF] max-md:h-auto h-auto px-[64px] max-sm:px-[20px] max-md:px-[100px]`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col `}
      >
        <TypingText title={"| Blog posts"} textStyles={"text-center"} />

        <div className="flex flex-col gap-[30px] mt-[50px]">
          {" "}
          {insights?.map((insight, index) => {
            return (
              <InsightCard
                key={`insight-${index}`}
                {...insight}
                index={index + 1}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
