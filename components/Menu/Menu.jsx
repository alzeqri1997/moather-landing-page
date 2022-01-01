import React from 'react'
import ImgLogo from '../../public/images/logo.svg'
import { motion } from 'framer-motion'

const Menu = ({ setIsMenuOpen }) => {
  return (
    <motion.div initial={{ top: '-100vh' }} animate={{ top: '0' }} className="absolute  top-0 right-2/4 translate-x-2/4 w-full">
      <div className="container text-center " >
        <div className="flex items-center justify-between bg-white px-[20px]  pt-[37px] " >
          <button onClick={() => { setIsMenuOpen(false) }}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
              <g id="x-mark" transform="translate(0 0)">
                <path id="Path_148774" data-name="Path 148774" d="M159.12,160.288a1.162,1.162,0,0,1-.825-.342L146.629,148.28a1.166,1.166,0,0,1,1.65-1.65L159.945,158.3a1.167,1.167,0,0,1-.825,1.992Zm0,0" transform="translate(-146.287 -146.288)" fill="#5b315e" />
                <path id="Path_148775" data-name="Path 148775" d="M147.452,160.287a1.167,1.167,0,0,1-.825-1.992l11.667-11.667a1.166,1.166,0,0,1,1.65,1.65l-11.666,11.667A1.162,1.162,0,0,1,147.452,160.287Zm0,0" transform="translate(-146.286 -146.287)" fill="#5b315e" />
              </g>
            </svg>
          </button>
          <img className="w-[46.43px] h-[46.43px]" src={ImgLogo.src} alt="logo moather" />
        </div>


        <ul className="bg-white text-center pt-[70px] pb-[40px]  flex-col top-0 text-[1.8rem] flex lg:gap-[57px]" >
          <li className="active pt-[18px] pb-[15px]" >
            <a href="#"> الرئيسية </a>
          </li>
          <li className="pt-[18px] pb-[15px]">
            <a href="#"> الحملات </a>
          </li>
          <li className="pt-[18px] pb-[15px]">
            <a href="#"> من نحن </a>
          </li>
          <li className="pt-[18px] pb-[15px]">
            <a href="#"> المدونة </a>
          </li>
        </ul>

        <div className="w-full bg-white h-full pb-[51px] rounded-b-[5px] rounded" >
          <a className="" href="">
            <span className="py-[16px] px-[36px] bg-[#5B315E] text-[1.6rem] rounded-[6px] text-[#fff]" >تواصل معنا</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Menu
