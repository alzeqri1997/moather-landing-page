import React from 'react'
import feedBackImg from '../../public/images/feedbackimg.svg'
import Slider from 'react-slick'
import { TextData } from './TextData'

const FeedBack = () => {
  // const settings = {
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const settings = {

    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    variableWidth: true
  }
  return (
    <section className="container" >
      <div className="pb-[56px]">
        <div className="text-center py-[70px]" >
          <h2 className="text-[1.6rem] text-[#E6427A]" >اراء العملاء</h2>
          <h1 className="text-[3.8rem] text-[#2E1A46] font-shamel-bold " >ماذا قالوا عن مؤثر</h1>
        </div>
        <div className=" flex items-center justify-between" >
          <img src={feedBackImg.src} alt="image feedback" />
          <div>
            <svg id="right-quote-sign" xmlns="http://www.w3.org/2000/svg" width="59.108" height="52.173" viewBox="0 0 59.108 52.173">
              <path id="Path_148173" data-name="Path 148173" d="M578.559,57.2H560.13a3.032,3.032,0,0,0-3.031,3.031V78.657a3.032,3.032,0,0,0,3.031,3.031h8.82q-.173,7.238-3.358,11.591a18.262,18.262,0,0,1-7.6,5.686,3.027,3.027,0,0,0-1.5,4.068l2.182,4.607a3.031,3.031,0,0,0,3.947,1.479,33.7,33.7,0,0,0,10.166-6.6A25.592,25.592,0,0,0,579.717,91.5q1.873-6.147,1.873-16.78V60.228A3.032,3.032,0,0,0,578.559,57.2Z" transform="translate(-522.482 -57.197)" fill="#e6427a" />
              <path id="Path_148174" data-name="Path 148174" d="M6.427,109.107a34.267,34.267,0,0,0,10.118-6.583,25.455,25.455,0,0,0,6.971-10.985q1.873-6.1,1.873-16.822V60.228A3.032,3.032,0,0,0,22.358,57.2H3.929A3.032,3.032,0,0,0,.9,60.228V78.657a3.032,3.032,0,0,0,3.031,3.031h8.82q-.173,7.238-3.358,11.591a18.261,18.261,0,0,1-7.6,5.686,3.027,3.027,0,0,0-1.5,4.068l2.176,4.6A3.039,3.039,0,0,0,6.427,109.107Z" transform="translate(0.001 -57.197)" fill="#e6427a" />
            </svg>
            {/* <Slider {...settings} >
              {TextData.map((text, index) => (
                <div key={index}>
                  <p className="text-[1.8rem] text-[#7F8384] leading-[30px] mt-[25px] max-w-[563px]">{text.text}</p>
                </div>
              ))}
            </Slider> */}

            <p className="text-[1.8rem] text-[#7F8384] leading-[30px] mt-[25px] max-w-[563px]">{TextData[0].text}</p>



            <div className="mt-[46px] flex justify-between items-end" >
              <div>
                <p className="text-[2.2rem] text-[#2E1A46] font-shamel-bold">هيثم محمد</p>
                <p className="text-[1.2rem] text-[#E6427A] mt-[12px]" >المدير التنفيذي لـ أجير</p>
              </div>
              <div className="flex gap-[16px]" >
                <button className="text-[#e6427a] w-[40px] h-[40px] bg-[rgba(245,179,202,0.24)] hover:bg-[#e6427a] hover:text-white transition-all flex items-center justify-center rounded-full" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13.999" height="12.001" viewBox="0 0 13.999 12.001">
                    <path id="fi-rr-arrow-small-left" d="M13.121,17.715a1,1,0,0,1,0-1.415l3.292-3.293L6,13a1,1,0,0,1,0-2l10.414.007L13.121,7.715A1,1,0,0,1,14.535,6.3l3.586,3.586a3,3,0,0,1,0,4.243l-3.586,3.586a1,1,0,0,1-1.414,0Z" transform="translate(-5.001 -6.007)" fill="currentColor" />
                  </svg>
                </button >
                <button className="text-[#e6427a] w-[40px] h-[40px] bg-[rgba(245,179,202,0.24)] hover:bg-[#e6427a] hover:text-white transition-all flex items-center justify-center rounded-full">
                  <svg className="scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width="13.999" height="12.001" viewBox="0 0 13.999 12.001">
                    <path id="fi-rr-arrow-small-left" d="M13.121,17.715a1,1,0,0,1,0-1.415l3.292-3.293L6,13a1,1,0,0,1,0-2l10.414.007L13.121,7.715A1,1,0,0,1,14.535,6.3l3.586,3.586a3,3,0,0,1,0,4.243l-3.586,3.586a1,1,0,0,1-1.414,0Z" transform="translate(-5.001 -6.007)" fill="currentColor" />
                  </svg>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedBack
