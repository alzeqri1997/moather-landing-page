import React from 'react'
import photo3 from '../../public/images/articles/photo3.svg'
import photo2 from '../../public/images/articles/photo2.svg'
import photo1 from '../../public/images/articles/photo1.svg'

const Articles = () => {
  return (
    <section className="container" >
      <div className="text-center py-[40px] md:py-[70px]" >
        <h2 className="text-[1.2rem] md:text-[1.6rem] text-[#E6427A]" >المدونة</h2>
        <h1 className="text-[1.8rem] md:text-[3.8rem] text-[#2E1A46] font-shamel-bold  " >تابع اخر مقالاتنا</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-[10px] 1xl:gap-0 place-items-center">
        <div>
          <img className=" w-[303px] h-[323px] md:w-[358px] md:h-[352px] mx-auto" src={photo3.src} alt="image photo" />
          <div className="bg-white drop-shadow-shadow-bg rounded-[6px] max-w-[270px] md:max-w-[325px] mx-auto -translate-y-[71px] " >
            <div className=" py-[18px] md:py-[25px] px-[16px] md:px-[20px] w-fit md:w-[325px]" >
              <h2 className="text-[1.2rem] md:text-[1.8rem] text-[#333333] font-shamel-bold" >
                فعالية التسويق عبر المؤثرين
                على العلامات التجارية
              </h2>
              <div className="flex items-center justify-between mt-[15px]" >
                <a className=" text-[1.2rem] md:text-[1.3rem] text-[#E6427A] underline" href="">اقرأ المزيد</a>
                <p className=" text-[1.2rem] md:text-[1.3rem] text-[#B7B7BA]" >2021/06/13</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className=" w-[303px] md:w-[358px] h-[323px] md:h-[352px] mx-auto" src={photo2.src} alt="image photo" />
          <div className="bg-white drop-shadow-shadow-bg rounded-[6px] max-w-[270px] md:max-w-[325px] mx-auto -translate-y-[71px] " >
            <div className=" py-[18px] md:py-[25px] px-[16px] md:px-[20px] w-fit md:w-[325px]" >
              <h2 className="text-[1.2rem] md:text-[1.8rem] text-[#333333] font-shamel-bold" >
                فعالية التسويق عبر المؤثرين
                على العلامات التجارية
              </h2>
              <div className="flex items-center justify-between mt-[15px]" >
                <a className=" text-[1.2rem] md:text-[1.3rem] text-[#E6427A] underline" href="">اقرأ المزيد</a>
                <p className=" text-[1.2rem] md:text-[1.3rem] text-[#B7B7BA]" >2021/06/13</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <img className=" w-[303px] md:w-[358px] h-[323px] md:h-[352px] mx-auto" src={photo1.src} alt="image photo" />
          <div className="bg-white drop-shadow-shadow-bg rounded-[6px] max-w-[270px] md:max-w-[325px] mx-auto -translate-y-[71px] " >
            <div className=" py-[18px] md:py-[25px] px-[16px] md:px-[20px] w-fit md:w-[325px]" >
              <h2 className="text-[1.2rem] md:text-[1.8rem] text-[#333333] font-shamel-bold" >
                فعالية التسويق عبر المؤثرين
                على العلامات التجارية
              </h2>
              <div className="flex items-center justify-between mt-[15px]" >
                <a className=" text-[1.2rem] md:text-[1.3rem] text-[#E6427A] underline" href="">اقرأ المزيد</a>
                <p className=" text-[1.2rem] md:text-[1.3rem] text-[#B7B7BA]" >2021/06/13</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
