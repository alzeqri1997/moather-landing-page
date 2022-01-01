import React from 'react'
import videoImg from '../../public/images/video_player.svg'

const AboutUs = () => {
  return (
    <section  >
      <div className="bg-[#5B315E]" >
        <div className="text-center pt-[31px] md:pt-[72px] pb-[90px] md:pb-[266px]" >
          <h2 className="text-[1.2rem] md:text-[1.6rem] text-[#E6427A]" >من نحن</h2>
          <h1 className="text-[1.8rem] md:text-[3.8rem] text-white font-shamel-bold " >لماذا منصة مؤثر</h1>
        </div>
      </div>
      <div className="container relative max-h-[833px]" >
        <img className="absolute left-2/4 -translate-x-2/4 top-2/4 -translate-y-[35%]" src={videoImg.src} alt="" />
      </div>
    </section>
  )
}

export default AboutUs
