import React from 'react'
import contactImg from '../../public/images/contactimg.svg'

const ContactUs = () => {
  return (
    <section className="container py-[40px] md:pt-[72px] md:pb-[70px]" >
      <div className="flex flex-col gap-[30px] md:gap-[10px] lg:gap-0 md:flex-row items-center justify-center md:justify-between" >
        <div className="text-center md:text-start w-full md:w-auto" >
          <h2 className="text-[1.2rem] md:text-[1.6rem] text-[#E6427A]" >اراء العملاء</h2>
          <h1 className="text-[1.8rem] md:text-[3.8rem] text-[#2E1A46] font-shamel-bold " >ماذا قالوا عن مؤثر</h1>
          <div className=" w-full mx-auto md:mx-0 md:min-w-[504px] mt-[30px] md:mt-[60px]">
            <form className=" bg-white w-11/12 xl:w-auto text-[8px] md:text-[12px] drop-shadow-shadow-bg rounded-[10px] p-[16px] md:p-[26px]">
              <div className=" mb-[8px] md:mb-[15px]">
                <input className="appearance-none bg-[#F4F4F4]  w-full py-[12px] md:py-[20px] pr-[14px] md:pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="الاسم الكريم" />
              </div>
              <div className=" mb-[8px] md:mb-[15px]">
                <input className="appearance-none bg-[#F4F4F4]  w-full py-[12px] md:py-[20px] pr-[14px] md:pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="البريد الالكتروني" />
              </div>
              <div className=" mb-[8px] md:mb-[15px]">
                <input className="appearance-none bg-[#F4F4F4]  w-full py-[12px] md:py-[20px] pr-[14px] md:pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="اكتب عنوان الرساله" />
              </div>
              <div className=" mb-[8px] md:mb-[15px]">
                <textarea className="appearance-none bg-[#F4F4F4]  w-full py-[12px] md:py-[20px] pr-[14px] md:pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" id="" cols="5" rows="5" placeholder="التفاصيل"></textarea>
              </div>

              <button className="w-full bg-[#E6427A] pt-[15px] md:pt-[19px] pb-[14px] md:pb-[17px] text-[.9rem] md:text-[1.6rem]  text-white rounded-[10px] focus:outline-none focus:shadow-outline" type="button" >
                ارسل الان
              </button>
            </form>
          </div>
        </div>
        <img className=" w-[302.86px] lg:w-5/12 " src={contactImg.src} alt="contact us" />
      </div>
    </section>
  )
}

export default ContactUs
