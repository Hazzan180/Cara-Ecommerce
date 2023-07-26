import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import {motion} from 'framer-motion'
import './slider.css';

import {useNavigate} from 'react-router-dom'

// import required modules
import { Navigation } from 'swiper/modules';

import PopularData from '../../assets/data/popularData';

export default function App() {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={-50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
      >
         {
          PopularData.map((item, index) => (
            <SwiperSlide key={index}>
            <div className='category-item'>
              <motion.img whileHover={{scale: 0.9}} className='category-img' src={item.img}/>
              <h4 className='category-title'>{item.title}</h4>
            </div>
            </SwiperSlide>
          ))
         }
      </Swiper>
    </>
  );
}
