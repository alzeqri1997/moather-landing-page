import React from 'react'
import ImgLogo from '../public/images/logo.svg'

const Header = () => {
  return (
    <header className=" text-[#5B315E] mt-[33px]  flex justify-between items-center container" >
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
        <span className="py-[17px] px-[36px] bg-[#5B315E] text-[1.6rem] rounded-[6px] text-[#fff]" >تواصل معنا</span>
      </a>
    </header>
  )
}

export default Header
