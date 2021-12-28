import React from 'react'
import img1 from '../../public/images/clients/1.svg'
import img2 from '../../public/images/clients/2.svg'
import img3 from '../../public/images/clients/3.svg'
import img4 from '../../public/images/clients/4.svg'
import img5 from '../../public/images/clients/5.svg'
import img6 from '../../public/images/clients/6.svg'
import img7 from '../../public/images/clients/7.svg'
import img8 from '../../public/images/clients/8.svg'
import img9 from '../../public/images/clients/9.svg'
import img10 from '../../public/images/clients/10.svg'
import img11 from '../../public/images/clients/11.svg'
import img12 from '../../public/images/clients/12.svg'

const Customers = () => {
  return (
    <section className="container" >
      <div className="text-center mt-[72px] mb-[49px]" >
        <h3 className="text-[1.6rem] text-[#E6427A]" >خدماتنا</h3>
        <h1 className="font-shamel-bold mt-[15px] text-[3.8rem] text-[#2E1A46]" >خدمات العملاء</h1>
      </div>

      <div className="grid grid-cols-6 grid-row-2 gap-y-[32px] place-items-center mb-[49px]" >
        <img src={img1.src} alt="customer image logo" />
        <img src={img2.src} alt="customer image logo" />
        <img src={img3.src} alt="customer image logo" />
        <img src={img4.src} alt="customer image logo" />
        <img src={img5.src} alt="customer image logo" />
        <img src={img6.src} alt="customer image logo" />
        <img src={img7.src} alt="customer image logo" />
        <img src={img8.src} alt="customer image logo" />
        <img src={img9.src} alt="customer image logo" />
        <img src={img10.src} alt="customer image logo" />
        <img src={img11.src} alt="customer image logo" />
        <img src={img12.src} alt="customer image logo" />
      </div>
    </section>
  )
}

export default Customers
