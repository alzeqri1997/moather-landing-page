import React, { useRef, useEffect, useState } from 'react'
import { SliderData } from '../ImageSlider/SliderData'
import useWindowSize from '../../hooks/useWindowSize'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

SwiperCore.use([Navigation, Pagination]);

const Ads = () => {
  const { width } = useWindowSize()
  const navigationPrevRef = useRef()
  const navigationNextRef = useRef()
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    if (width > 1024) { setSlidesPerView(4) }
    if (width <= 1024) { setSlidesPerView(3) }
    if (width <= 768) { setSlidesPerView(2) }
    if (width <= 640) { setSlidesPerView(1) }

  }, [width])

  return (
    <section className=" relative overflow-hidden max-w-[1440px] mx-auto pb-[112px] md:pb-0" >
      <div className="flex items-center md:items-end justify-center md:justify-between py-[41px] md:py-[96px] container text-center md:text-right" >
        <div className="inline-block" >
          <h3 className="text-[#E6427A] text-[1.2rem] md:text-[1.6rem]" >الحملات</h3>
          <h1 className="text-[#2E1A46] text-[1.8rem] md:text-[3.8rem]" >الحملات الاعلانية</h1>
        </div>

        <div className="flex absolute md:static bottom-[90px] " >
          <div ref={navigationPrevRef}>
            <button className="w-[75px] h-[42px] text-[#E6427A]  flex items-center justify-center rounded-[12px] transition-all " >
              <svg xmlns="http://www.w3.org/2000/svg" width="24.001" height="12.586" viewBox="0 0 24.001 12.586">
                <path id="fi-rr-arrow-right" d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z" transform="translate(0 -5.736)" fill="currentColor" />
              </svg>
            </button>
          </div>
          <button ref={navigationNextRef} className="w-[75px] h-[42px]   flex items-center justify-center rounded-[12px] transition-all bg-[#5B315E] text-white">
            <svg className="scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width="24.001" height="12.586" viewBox="0 0 24.001 12.586">
              <path id="fi-rr-arrow-right" d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z" transform="translate(0 -5.736)" fill="currentColor" />
            </svg>
          </button>
        </div>

      </div>
      <div className=" custom-container md:pr-[80px] 1xl:pr-[140px] mb-[70px]" >

        <Swiper spaceBetween={50} slidesPerView={slidesPerView} dir="rtl" loop={true} navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
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
          }} >
          {SliderData.map((slide, index) => {
            return (
              <SwiperSlide key={index} >
                <img className="w-[319px] h-[398px] md:pr-[40px]" src={slide.image} alt="ads" key={index} />
              </SwiperSlide>
            )
          })}
        </Swiper>

      </div>
    </section>
  )
}

export default Ads
