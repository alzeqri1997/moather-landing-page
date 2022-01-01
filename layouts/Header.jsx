import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ImgLogo from '../public/images/logo.svg'
import Hero from '../components/Hero/Hero'
import Menu from '../components/Menu/Menu'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
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
      <div className={`fixed w-full z-[100] transition-all ${isScrolled ? 'nav-scrolled' : ''}`}  >
        <header className=" relative text-[#5B315E] pt-[33px] pb-[33px]  flex justify-between items-center container transition-all" >
          <button onClick={() => { setIsMenuOpen(true) }} className=" md:hidden" >
            <svg id="menu" xmlns="http://www.w3.org/2000/svg" width="26.869" height="19.405" viewBox="0 0 26.869 19.405">
              <path id="Path_148767" data-name="Path 148767" d="M25.75,124.907H1.12a1.12,1.12,0,0,1,0-2.239H25.75a1.12,1.12,0,1,1,0,2.239Zm0,0" transform="translate(0 -114.085)" fill="#5b315e" />
              <path id="Path_148768" data-name="Path 148768" d="M25.75,2.239H1.12A1.12,1.12,0,0,1,1.12,0H25.75a1.12,1.12,0,1,1,0,2.239Zm0,0" fill="#5b315e" />
              <path id="Path_148769" data-name="Path 148769" d="M25.75,247.571H1.12a1.12,1.12,0,1,1,0-2.239H25.75a1.12,1.12,0,1,1,0,2.239Zm0,0" transform="translate(0 -228.166)" fill="#5b315e" />
            </svg>
          </button>

          <img className="w-[46.43px] h-[46.43px]" src={ImgLogo.src} alt="logo moather" />
          <AnimatePresence>
            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
          </AnimatePresence>

          <ul className=" text-[1.8rem] hidden md:flex gap-[40px] lg:gap-[57px]" >
            <li className="text-[#E6427A]" >
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
          <a className="hidden md:block" href="">
            <span className="py-[16px] px-[36px] bg-[#5B315E] text-[1.6rem] rounded-[6px] text-[#fff]" >تواصل معنا</span>
          </a>
        </header>
      </div>
      <Hero />
    </div>
  )
}

export default Header
