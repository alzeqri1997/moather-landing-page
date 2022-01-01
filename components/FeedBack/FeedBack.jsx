import React from 'react'
import Slide from '../Slider/Slide'

const FeedBack = () => {
  return (
    <section className="container" >
      <div className="md:pb-[56px]">
        <div className="text-center pt-[40px] pb-[30px] md:py-[70px]" >
          <h2 className="text-[1.2rem] md:text-[1.6rem] text-[#E6427A]" >اراء العملاء</h2>
          <h1 className="text-[1.8rem] md:text-[3.8rem] text-[#2E1A46] font-shamel-bold " >ماذا قالوا عن مؤثر</h1>
        </div>
        <div className=" relative" >
          <Slide />
        </div>
      </div>
    </section>
  )
}

export default FeedBack
