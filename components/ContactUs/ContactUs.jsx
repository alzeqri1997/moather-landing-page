import React from 'react'
import contactImg from '../../public/images/contactimg.svg'

const ContactUs = () => {
  return (
    <section className="container pt-[72px] pb-[70px]" >
      <div className="flex items-center justify-between" >
        <div className="text-start" >
          <h2 className="text-[1.6rem] text-[#E6427A]" >اراء العملاء</h2>
          <h1 className="text-[3.8rem] text-[#2E1A46] font-shamel-bold " >ماذا قالوا عن مؤثر</h1>
          <div className="min-w-[504px] mt-[60px]">
            <form className="bg-white text-[12px] drop-shadow-shadow-bg rounded-[10px] p-[26px]">
              <div className="mb-[15px]">
                <input className="appearance-none bg-[#F4F4F4]  w-full py-[20px] pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="الاسم الكريم" />
              </div>
              <div className="mb-[15px]">
                <input className="appearance-none bg-[#F4F4F4]  w-full py-[20px] pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="البريد الالكتروني" />
              </div>
              <div className="mb-[15px]">
                <input className="appearance-none bg-[#F4F4F4]  w-full py-[20px] pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="اكتب عنوان الرساله" />
              </div>
              <div className="mb-[15px]">
                <textarea className="appearance-none bg-[#F4F4F4]  w-full py-[20px] pr-[20px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" id="" cols="5" rows="5" placeholder="التفاصيل"></textarea>
              </div>

              <button className="w-full bg-[#E6427A] text-[1.6rem]  text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline" type="button" >
                ارسل الان
              </button>
            </form>
          </div>
        </div>
        <img src={contactImg.src} alt="contact us" />
      </div>
    </section>
  )
}

export default ContactUs
