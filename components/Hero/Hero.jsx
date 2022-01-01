import React from 'react'
import playButton from '../../public/images/play_button.svg'
import heroImage from '../../public/images/hero_image.svg'

const Hero = () => {
  return (
    <div className="flex flex-wrap flex-col 1xl:flex-row justify-between items-center container pt-[100px] md:pt-[183px] pb-[51px]" >
      <div className="md:w-[571px] mt-[30px] xl:mt-0 ">
        <h1 className="text-[2.6rem] md:text-[5rem] inline-block font-shamel-bold text-[#5B315E] relative custom-border-1" >مؤثر</h1>
        <h1 className="text-[2.4rem] md:text-[4.7rem] leading-[37px] md:leading-[70px] font-shamel-bold md:max-w-[571px]" >منصة تقدم خدمات
          المؤثرين لجميع القطاعات</h1>
        <div className="flex items-center gap-[32px] mt-[32px] md:mt-[74px]" >
          <a href="">
            <span className="py-[18px] px-[36px] bg-[#E6427A] text-[1.1rem] md:text-[1.6rem] rounded-[6px] text-[#fff]" >تعرف علينا</span>
          </a>
          <div className="flex items-center gap-[11px]" >
            <img className="w-[15.84px] h-[15.84px] md:w-[24px] md:h-[24px]" src={playButton.src} alt="" />
            <span className="text-[#E6427A] text-[.8rem] md:text-[1.4rem]" >شاهد الفيديو</span>
          </div>
        </div>
      </div>
      <img className=" mt-[41px] md:w-[575.4px] md:h-[519.88px]" src={heroImage.src} alt="" />
    </div>
  )
}

export default Hero
