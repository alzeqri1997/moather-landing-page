import React from 'react'
import playButton from '../../public/images/play_button.svg'
import heroImage from '../../public/images/hero_image.svg'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse 1xl:flex-row justify-between items-center container pt-[183px] pb-[51px]" >
      <div className="w-[571px] mt-[30px] xl:mt-0 ">
        <h1 className="text-[5rem] font-shamel-bold text-[#5B315E] relative custom-border-1" >مؤثر</h1>
        <h1 className="text-[4.7rem] leading-[70px] font-shamel-bold max-w-[571px]" >منصة تقدم خدمات
          المؤثرين لجميع القطاعات</h1>
        <div className="flex items-center gap-[32px] mt-[74px]" >
          <a href="">
            <span className="py-[18px] px-[36px] bg-[#E6427A] text-[1.6rem] rounded-[6px] text-[#fff]" >تواصل معنا</span>
          </a>
          <div className="flex items-center gap-[11px]" >
            <img src={playButton.src} alt="" />
            <span className="text-[#E6427A] text-[1.4rem]" >شاهد الفيديو</span>
          </div>
        </div>
      </div>
      <img className="w-[575.4px] h-[519.88px]" src={heroImage.src} alt="" />
    </div>
  )
}

export default Hero
