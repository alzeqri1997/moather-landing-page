import React from 'react'
import feedBackImg from '../../public/images/feedbackimg.svg'
import Slide from '../Slider/Slide'

const FeedBack = () => {
  return (
    <section className="container" >
      <div className="pb-[56px]">
        <div className="text-center py-[70px]" >
          <h2 className="text-[1.6rem] text-[#E6427A]" >اراء العملاء</h2>
          <h1 className="text-[3.8rem] text-[#2E1A46] font-shamel-bold " >ماذا قالوا عن مؤثر</h1>
        </div>
        <div className=" flex justify-center items-center gap-[67px] relative" >
          <img src={feedBackImg.src} alt="image feedback" />
          <Slide />
        </div>
      </div>
    </section>
  )
}

export default FeedBack
