import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
import {
  ADVERTNOW,
  FLIERCHIJIOKE,
  FLIERDIGIT,
  captAdaba,
  flier1,
  flier2,
  flierAdmission,
  kInstan,
  po,
  videoFlier1,
  videoFlier2,
} from '../assets/gallery'

export default function SwiperComponent() {
  return (
    <div className='h-[400px] overflow-auto'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={kInstan} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FLIERCHIJIOKE} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FLIERDIGIT} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={po} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ADVERTNOW} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={captAdaba} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flierAdmission} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flier1} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flier2} className='h-[300px]' />
        </SwiperSlide>
        <SwiperSlide>
          <iframe src={videoFlier1} className='h-[300px]' allowFullScreen />
        </SwiperSlide>
        <SwiperSlide>
          <iframe src={videoFlier2} className='h-[300px]' allowfullscreen />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
