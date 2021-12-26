import React from 'react'
import ImgLogo from '../public/images/logo.svg'
import Hero from '../components/Hero/Hero'

const Header = () => {
  return (
    <div className="bg-[#F9F9F9]" >
      <header className=" text-[#5B315E] pt-[33px]  flex justify-between items-center container" >
        <img src={ImgLogo.src} alt="logo moather" />
        <ul className="text-[1.8rem] flex gap-[57px]" >
          <li>
            <a href="#"> الرئيسية </a>
          </li>
          <li>
            <a href="#"> الحملات </a>
          </li>
          <li>
            <a href="#"> من نحن </a>
          </li>
          <li>
            <a href="#"> المدونة </a>
          </li>
        </ul>
        <a href="">
          <span className="py-[16px] px-[36px] bg-[#5B315E] text-[1.6rem] rounded-[6px] text-[#fff]" >تواصل معنا</span>
        </a>
      </header>
      <Hero />
    </div>
  )
}

export default Header
