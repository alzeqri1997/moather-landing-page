import React from 'react'


const ImageSlider = ({ slides, swipe }) => {
  console.log(swipe);
  return (
    <div className="flex gap-[40px] overflow-hidden mr-[140px]">
      {slides.map((slide, index) => {
        return <img style={{ transform: `translateX(${swipe}px)` }} className="w-[319px] h-[398px] transition-all" src={slide.image} alt="ads" key={index} />
      })}
    </div>
  )
}

export default ImageSlider
