import React from 'react'
import logoWhite from '../public/images/logo-white.svg'
import map from '../public/images/map.png'

const Footer = () => {
  return (
    <footer className="footer text-center md:text-right bg-[#5B315E] relative">
      <div className="container px-6">

        <div className="sm:flex sm:mt-8 text-white text-[14px] pt-[70px]">
          <div className="sm:w-full flex flex-col items-center md:items-start md:flex-row justify-between">
            <div className="flex items-center md:items-baseline flex-col">
              <img width="40.98" height="40.98" src={logoWhite.src} alt="" />
              <p className="text-[1.2rem] mt-[22px] max-w-[343px]" >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>
              <div className="mt-[21px] flex gap-[9px]" >
                <a href="https://www.facebook.com" className=" cursor-pointer w-[36px] h-[36px] bg-[#E6427A] rounded-full flex items-center justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.931" height="17.861" viewBox="0 0 8.931 17.861"><path fill="currentColor" d="M13.488,2.966h1.631V.126A21.054,21.054,0,0,0,12.743,0C10.392,0,8.781,1.479,8.781,4.2V6.7H6.187V9.873H8.781v7.989h3.181V9.874h2.489l.4-3.175H11.961V4.512C11.962,3.594,12.209,2.966,13.488,2.966Z" transform="translate(-6.187)" /></svg>
                </a>
                <a className=" cursor-pointer w-[36px] h-[36px] bg-[#E6427A] rounded-full flex items-center justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13.813" viewBox="0 0 17 13.813"><path fill="currentColor" d="M17,49.635a7.266,7.266,0,0,1-2.008.55,3.466,3.466,0,0,0,1.533-1.926,6.965,6.965,0,0,1-2.21.844,3.485,3.485,0,0,0-6.029,2.383,3.589,3.589,0,0,0,.081.795,9.865,9.865,0,0,1-7.184-3.646,3.486,3.486,0,0,0,1.071,4.658A3.442,3.442,0,0,1,.68,52.864V52.9a3.5,3.5,0,0,0,2.792,3.424,3.478,3.478,0,0,1-.914.115,3.081,3.081,0,0,1-.66-.06A3.518,3.518,0,0,0,5.155,58.81,7,7,0,0,1,.834,60.3,6.526,6.526,0,0,1,0,60.249a9.811,9.811,0,0,0,5.347,1.564,9.851,9.851,0,0,0,9.92-9.918c0-.154-.005-.3-.013-.45A6.953,6.953,0,0,0,17,49.635Z" transform="translate(0 -48)" /></svg>
                </a>
                <a className=" cursor-pointer w-[36px] h-[36px] bg-[#E6427A] rounded-full flex items-center justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.003" viewBox="0 0 16 16.003"><path fill="currentColor" d="M16.408,4.705a5.848,5.848,0,0,0-.372-1.941A4.1,4.1,0,0,0,13.694.422,5.863,5.863,0,0,0,11.753.05C10.9.009,10.624,0,8.452,0s-2.445.009-3.3.047A5.849,5.849,0,0,0,3.212.419a3.9,3.9,0,0,0-1.419.925A3.94,3.94,0,0,0,.871,2.761,5.863,5.863,0,0,0,.5,4.7C.458,5.559.449,5.83.449,8S.458,10.448.5,11.3a5.847,5.847,0,0,0,.372,1.941,4.1,4.1,0,0,0,2.341,2.342,5.863,5.863,0,0,0,1.941.372C6,15.994,6.276,16,8.449,16s2.445-.009,3.3-.047a5.846,5.846,0,0,0,1.941-.372,4.093,4.093,0,0,0,2.342-2.342A5.867,5.867,0,0,0,16.4,11.3c.037-.853.047-1.125.047-3.3s0-2.445-.041-3.3Zm-1.441,6.534a4.386,4.386,0,0,1-.275,1.485,2.655,2.655,0,0,1-1.519,1.519,4.4,4.4,0,0,1-1.485.275c-.844.038-1.1.047-3.232.047s-2.392-.009-3.233-.047a4.384,4.384,0,0,1-1.485-.275,2.463,2.463,0,0,1-.919-.6,2.488,2.488,0,0,1-.6-.919,4.4,4.4,0,0,1-.275-1.485c-.038-.844-.047-1.1-.047-3.233s.009-2.392.047-3.232a4.384,4.384,0,0,1,.275-1.485,2.432,2.432,0,0,1,.6-.919,2.484,2.484,0,0,1,.919-.6A4.4,4.4,0,0,1,5.225,1.5c.844-.037,1.1-.047,3.232-.047s2.392.009,3.233.047a4.386,4.386,0,0,1,1.485.275,2.461,2.461,0,0,1,.919.6,2.487,2.487,0,0,1,.6.919,4.4,4.4,0,0,1,.275,1.485c.037.844.047,1.1.047,3.232s-.009,2.385-.047,3.229Zm0,0" transform="translate(-0.449 0)" /><path fill="currentColor" d="M129.218,124.5a4.269,4.269,0,1,0,4.269,4.269A4.27,4.27,0,0,0,129.218,124.5Zm0,7.038a2.769,2.769,0,1,1,2.769-2.769A2.769,2.769,0,0,1,129.218,131.538Zm0,0" transform="translate(-121.215 -120.766)" /><path fill="currentColor" d="M364.291,89.523a.921.921,0,1,1-.921-.921A.921.921,0,0,1,364.291,89.523Zm0,0" transform="translate(-351.07 -85.817)" /></svg>
                </a>
                <a className=" cursor-pointer w-[36px] h-[36px] bg-[#E6427A] rounded-full flex items-center justify-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13.863" height="13.251" viewBox="0 0 13.863 13.251"><g transform="translate(0 0.668)"><path fill="currentColor" d="M1.7-.668A1.569,1.569,0,0,0,0,.9,1.557,1.557,0,0,0,1.662,2.458h.02A1.568,1.568,0,1,0,1.7-.668Zm0,0" transform="translate(0)" /><path fill="currentColor" d="M8.109,198.313h3.007v9.048H8.109Zm0,0" transform="translate(-7.932 -194.777)" /><path fill="currentColor" d="M226.933,188.625a3.768,3.768,0,0,0-2.71,1.524v-1.312h-3.007v9.048h3.007v-5.053a2.061,2.061,0,0,1,.1-.734,1.646,1.646,0,0,1,1.543-1.1c1.088,0,1.523.83,1.523,2.046v4.84h3.007V192.7c0-2.779-1.484-4.072-3.462-4.072Zm0,0" transform="translate(-216.531 -185.302)" /></g></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col mt-[32px] md:mt-0">
              <span className="font-bold text-[#E6427A] text-[1.6rem] mb-[32px] font-shamel-bold">روابط تهمك</span>
              <span className="mb-[18px]"><a href="#" className="   ">الرئيسية</a></span>
              <span className="mb-[18px]"><a href="#" className="   ">الخدمات</a></span>
              <span className="mb-[18px]"><a href="#" className="   ">الحملات</a></span>
              <span className="mb-[18px]"><a href="#" className="   ">من نحن</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#E6427A] text-[1.6rem] mt-4 md:mt-0 mb-[32px] font-shamel-bold">عن مؤثر</span>
              <span className="mb-[18px]"><a href="#" className="  ">المدونة</a></span>
              <span className="mb-[18px]"><a href="#" className="   ">عملاءنا</a></span>
              <span className="mb-[18px]"><a href="#" className="  ">سياسة الخصوصية</a></span>
              <span className="mb-[18px]"><a href="#" className="  ">شروط الإستخدام </a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#E6427A] text-[1.6rem] mt-4 md:mt-0 mb-[32px] font-shamel-bold">عنوان مؤثر</span>
              <span className="mb-[18px]"><a href="#" className="   ">الرياض شارع العليا، الملك فهد 12271</a></span>
              <div>
                <img className="w-[195px] h-[106px] mt-[14px] mx-auto md:mx-0" src={map.src} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-[0]">
        <div className="mt-16 border-t-2 border-[#F9F9F9] flex flex-col items-center">
          <div className=" text-center py-[20px]">
            <p className=" text-[1.4rem] text-white ">
              جميع الحقوق محفوظة لمنصة مؤثر © 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
