import React from 'react'
import { SliderData } from '../ImageSlider/SliderData'
import Slider from 'react-slick'


const Ads = () => {
  const slider = null;

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const nextSlide = () => {
    slider.slickNext()
  }

  const prevSlide = () => {
    slider.slickPrev()
  }

  return (
    <section className=" overflow-hidden max-w-[1440px] mx-auto" >
      <div className="flex items-end justify-between py-[96px] container" >
        <div>
          <h3 className="text-[#E6427A] text-[1.6rem]" >الحملات</h3>
          <h1 className="text-[#2E1A46] text-[3.8rem]" >الحملات الاعلانية</h1>
        </div>

        <div className="flex" >
          <button onClick={nextSlide} className="w-[75px] h-[42px] text-[#E6427A]  flex items-center justify-center rounded-[12px] transition-all hover:bg-[#5B315E] hover:text-white" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24.001" height="12.586" viewBox="0 0 24.001 12.586">
              <path id="fi-rr-arrow-right" d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z" transform="translate(0 -5.736)" fill="currentColor" />
            </svg>
          </button>
          <button onClick={prevSlide} className="w-[75px] h-[42px] text-[#E6427A]  flex items-center justify-center rounded-[12px] transition-all hover:bg-[#5B315E] hover:text-white">
            <svg className="scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width="24.001" height="12.586" viewBox="0 0 24.001 12.586">
              <path id="fi-rr-arrow-right" d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z" transform="translate(0 -5.736)" fill="currentColor" />
            </svg>
          </button>
        </div>

      </div>
      <div className=" mb-[70px]" >
        <Slider ref={c => (slider = c)} {...settings} >
          {SliderData.map((slide, index) => {
            return <img className="w-[319px] h-[398px] pl-[40px]" src={slide.image} alt="ads" key={index} />
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Ads
