import React from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const Analytics = () => {
  return (
    <section className='container my-[70px] ' >
      <div className="flex gap-[250px] 1xl:gap-[296px] items-center" >
        <div>
          <h2 className="text-[1.6rem] text-[#E6427A] " >احصائيات</h2>
          <h1 className="text-[3.8rem] text-[#2E1A46] font-shamel-bold " >تعرف على</h1>
          <h1 className="text-[3.8rem] text-[#2E1A46] font-shamel-bold custom-border-2 relative z-0 inline-block" >احصائيات مؤثر</h1>
        </div>
        <div className="flex gap-[52px]" >
          <div className="text-center" >
            <h1 className="text-[38px] text-[#2E1A46] font-shamel-bold " >
              <span className="text-[#E6427A]" >+</span>
              <ReactVisibilitySensor partialVisibility >
                {({ isVisible }) => (
                  <div className=" inline-block">
                    {isVisible ? <CountUp start={500} end={900} duration={2} /> : 900}
                  </div>
                )}
              </ReactVisibilitySensor>
            </h1>
            <p className="text-[14px] text-[#333333]" >اكثر من 900 حملة ناجحة</p>
          </div>
          <div className="text-center" >
            <h1 className="text-[38px] text-[#2E1A46] font-shamel-bold " >
              <span className="text-[#E6427A]" >+</span>
              <ReactVisibilitySensor partialVisibility >
                {({ isVisible }) => (
                  <div className=" inline-block">
                    {isVisible ? <CountUp start={500} end={1200} duration={2} /> : 1200}
                  </div>
                )}
              </ReactVisibilitySensor>
            </h1>
            <p className="text-[14px] text-[#333333]" >اكثر من 1200 مؤثر</p>
          </div>
          <div className="text-center" >
            <h1 className="text-[38px] text-[#2E1A46] font-shamel-bold " >
              <span className="text-[#E6427A]" >+</span>
              <ReactVisibilitySensor partialVisibility >
                {({ isVisible }) => (
                  <div className=" inline-block">
                    {isVisible ? <CountUp start={500} end={700} duration={2} /> : 700}
                  </div>
                )}
              </ReactVisibilitySensor>
            </h1>
            <p className="text-[14px] text-[#333333]" >اكثر من 1200 عميل</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Analytics
