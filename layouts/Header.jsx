import React, { useState, useEffect } from 'react'
import ImgLogo from '../public/images/logo.svg'
import Hero from '../components/Hero/Hero'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })


  return (
    <div className="bg-[#F9F9F9]" >
      <div className={` fixed w-full z-[100] transition-all ${isScrolled ? 'nav-scrolled' : ''}`}  >
        <header className=" text-[#5B315E] pt-[33px] pb-[33px]  flex justify-between items-center container transition-all" >
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
      </div>
      <Hero />
    </div>
  )
}

export default Header
