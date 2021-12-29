import React from 'react'
import castIcon from '../../public/images/cast.svg'
import layerIcon from '../../public/images/layer1.svg'
import usersIcon from '../../public/images/users_icon.svg'


const Clients = () => {
  return (
    <section className="my-[82px] container" >
      <div className="flex items-center justify-center flex-col" >
        <div className="text-center" >
          <h3 className="text-[1.6rem] text-[#E6427A]" >خدماتنا</h3>
          <h1 className="font-shamel-bold text-[3.8rem] text-[#2E1A46]" >خدمات العملاء</h1>
        </div>


        <div className="grid grid-cols-2 1xl:grid-cols-3 gap-[30px] mt-[60px]" >
          <div className="w-[320px] drop-shadow-shadow-text rounded-[6px] bg-white" >
            <div className="mt-[50px] mr-[69px] mb-[40px]" >
              <img src={castIcon.src} alt="cast icon" />
              <p className="text-[1.8rem] mt-[29px]" >نقدم لك خدمات المؤثرين
                حسب المجالات</p>
            </div>
          </div>
          <div className="w-[320px] drop-shadow-shadow-text rounded-[6px] custom-gradient" >
            <div className="mt-[50px] mr-[54px] mb-[40px] text-white" >
              <img src={layerIcon.src} alt="layer icon" />
              <p className="text-[1.8rem] mt-[29px]" >نعمل معك علي اختيار المثر
                المناسب لهدفك</p>
            </div>
          </div>
          <div className="w-[320px] drop-shadow-shadow-text rounded-[6px] bg-white" >
            <div className="mt-[50px] mr-[60px] mb-[40px]">
              <img src={usersIcon.src} alt="cast" />
              <p className="text-[1.8rem] mt-[29px]" >نعد السناريو الاعلاني بطرق
                مبتكره ومبدعة</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Clients