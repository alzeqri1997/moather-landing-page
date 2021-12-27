import Slider from 'react-slick'


        <Slider ref={c => (slider = c)} {...settings} >
          {SliderData.map((slide, index) => {
            return <img className="w-[319px] h-[398px] pl-[40px]" src={slide.image} alt="ads" key={index} />
          })}
        </Slider>
