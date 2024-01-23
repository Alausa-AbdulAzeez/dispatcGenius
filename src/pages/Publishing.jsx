import React from 'react'
import { printBlue, printing } from '../assets/index'
import { motion } from 'framer-motion'
import { navVariants, staggerContainer } from '../utils/motion'
import PublishingHeroText from '../components/PublishingHeroText'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { TypingText } from '../components/CustomTexts'
import Button from '../components/Button'
import { arrowRight, arrowRightWhite } from '../assets/icons'
import Navbar from '../components/Navbar'
import BackToTop from '../components/BackToTop'
import StartSteps from '../components/StartSteps'
import { pressFeatures } from '../utils/constants'

const Publishing = ({ isVisible, scrollToTop }) => {
  return (
    <>
      <div
        className={`w-full min-h-[100vh] relative transition-opacity duration-[3000] ease-in-out flex flex-col `}
      >
        {isVisible && <BackToTop scrollToTop={scrollToTop} />}
        <Navbar isVisible={isVisible} />

        <div className={` w-full h-[100vh] absolute flex items-center `}>
          <div className='bg-white w-full h-full absolute top-0 left-0 overflow-hidden'>
            <img
              src={printing}
              alt='bg'
              className='h-[100%] w-[100%] object-cover'
            />
          </div>
          <PublishingHeroText />
          <div className='flex-1 h-full flex items-center justify-center max-sm:hidden'>
            {/* <img
              src={printBlue}
              alt='delivery-boy-image'
              className='object-fill h-[460px] w-[370px]'
            /> */}
          </div>
        </div>
      </div>
      <section className='py-[30px] pt-[50px] bg-slate-50'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className={` mx-auto flex flex-col items-center`}
        >
          <TypingText
            title='| Publishing (Graphics and General Printing):'
            textStyles='text-center text-[24px] max-md:text-[14px] visible max-md:hidden'
          />
          <div className='text-center text-[24px] max-md:text-[18px] max-md:w-[80%] font-normal md:hidden max-md:visible '>
            Publishing (Graphics and Geeeneral Printing)
          </div>
          <motion.div
            className='mt-[8px] font-normal text-[24px] text-center w-[70%] mb-[40px] max-md:w-[80%] max-md:text-[16px]'
            variants={navVariants}
            initial='hidden'
            whileInView={'show'}
          >
            <h1 className='text-[50px] mb-[30px]'>
              We render services such as
            </h1>
            <div className='flex flex-col gap-[10px] mt-[30px]'>
              {pressFeatures?.map((pressFeature, index) => {
                return (
                  <StartSteps
                    key={pressFeature}
                    number={index + 1}
                    text={pressFeature}
                  />
                )
              })}
            </div>
          </motion.div>
          <Link to={'https://wa.me/+2348090987851'} target='_blank'>
            <Button
              label='Make enquiries'
              iconUrl={arrowRightWhite}
              backgroundColor='bg-[#999]'
              textColor='text-white'
            />
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  )
}

export default Publishing
