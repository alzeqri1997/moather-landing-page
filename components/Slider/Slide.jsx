import SlideItem from './slideItem'
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


export default function App() {
  const navigationPrevRef = useRef()
  const navigationNextRef = useRef()

  return (
    <>
      <Swiper dir="rtl" loop={true} navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current
      }} pagination={{
        "clickable": true
      }} className="mySwiper"
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
      >
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
      </Swiper>
      <div className="md:flex hidden gap-[16px] absolute left-[50px] md:left-0 bottom-[26px] md:bottom-[60px] xl:bottom-[100px]  z-10" >
        <div className="w-full h-full translate-x-[100px] md:translate-x-0" ref={navigationPrevRef}>
          <button className="text-[#e6427a] w-[40px] h-[40px] bg-[rgba(245,179,202,0.24)]  transition-all flex items-center justify-center rounded-full" >
            <svg xmlns="http://www.w3.org/2000/svg" width="13.999" height="12.001" viewBox="0 0 13.999 12.001">
              <path id="fi-rr-arrow-small-left" d="M13.121,17.715a1,1,0,0,1,0-1.415l3.292-3.293L6,13a1,1,0,0,1,0-2l10.414.007L13.121,7.715A1,1,0,0,1,14.535,6.3l3.586,3.586a3,3,0,0,1,0,4.243l-3.586,3.586a1,1,0,0,1-1.414,0Z" transform="translate(-5.001 -6.007)" fill="currentColor" />
            </svg>
          </button >
        </div>
        <div ref={navigationNextRef} >
          <button className=" w-[40px] h-[40px] bg-[rgba(245,179,202,0.24)] bg-[#e6427a] text-white transition-all flex items-center justify-center rounded-full">
            <svg className="scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width="13.999" height="12.001" viewBox="0 0 13.999 12.001">
              <path id="fi-rr-arrow-small-left" d="M13.121,17.715a1,1,0,0,1,0-1.415l3.292-3.293L6,13a1,1,0,0,1,0-2l10.414.007L13.121,7.715A1,1,0,0,1,14.535,6.3l3.586,3.586a3,3,0,0,1,0,4.243l-3.586,3.586a1,1,0,0,1-1.414,0Z" transform="translate(-5.001 -6.007)" fill="currentColor" />
            </svg>
          </button>
        </div>

      </div>
    </>
  )
}