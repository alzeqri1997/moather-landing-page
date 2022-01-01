import React from 'react'
import feedBackImg from '../../public/images/feedbackimg.svg'


const SlideItem = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse sm:flex-row gap-[30px] md:gap-[69px]" >
      <img className="w-[243.63px] md:w-auto h-[303.23px] md:h-auto" src={feedBackImg.src} alt="image feedback" />

      <div>
        <svg id="right-quote-sign" xmlns="http://www.w3.org/2000/svg" width="59.108" height="52.173" viewBox="0 0 59.108 52.173">
          <path id="Path_148173" data-name="Path 148173" d="M578.559,57.2H560.13a3.032,3.032,0,0,0-3.031,3.031V78.657a3.032,3.032,0,0,0,3.031,3.031h8.82q-.173,7.238-3.358,11.591a18.262,18.262,0,0,1-7.6,5.686,3.027,3.027,0,0,0-1.5,4.068l2.182,4.607a3.031,3.031,0,0,0,3.947,1.479,33.7,33.7,0,0,0,10.166-6.6A25.592,25.592,0,0,0,579.717,91.5q1.873-6.147,1.873-16.78V60.228A3.032,3.032,0,0,0,578.559,57.2Z" transform="translate(-522.482 -57.197)" fill="#e6427a" />
          <path id="Path_148174" data-name="Path 148174" d="M6.427,109.107a34.267,34.267,0,0,0,10.118-6.583,25.455,25.455,0,0,0,6.971-10.985q1.873-6.1,1.873-16.822V60.228A3.032,3.032,0,0,0,22.358,57.2H3.929A3.032,3.032,0,0,0,.9,60.228V78.657a3.032,3.032,0,0,0,3.031,3.031h8.82q-.173,7.238-3.358,11.591a18.261,18.261,0,0,1-7.6,5.686,3.027,3.027,0,0,0-1.5,4.068l2.176,4.6A3.039,3.039,0,0,0,6.427,109.107Z" transform="translate(0.001 -57.197)" fill="#e6427a" />
        </svg>
        <p className="text-[1.2rem] md:text-[1.8rem] text-[#7F8384] leading-[30px] mt-[25px] max-w-[563px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد</p>
        <div className="mt-[46px] flex justify-between items-end" >
          <div>
            <p className="text-[1.4rem] md:text-[2.2rem] text-[#2E1A46] font-shamel-bold">هيثم محمد</p>
            <p className="text-[.9rem] md:text-[1.2rem] text-[#E6427A] mt-[12px]" >المدير التنفيذي لـ أجير</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideItem
