import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Carousel() {
  const slides = [
    {
      image: "/bg1.jpg",
      quote: "Fresh from the Farm to Your Home"
    },
    {
      image: "/bg2.jpg",
      quote: "Naturally Grown, Naturally Good"
    },
    {
      image: "/bg3.jpg",
      quote: "Eat Healthy. Live Healthy."
    },
    {
      image: "/bg4.jpg",
      quote: "Organic Veggies for a Better Tomorrow"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }

  return (
    <div className="w-full max-h-[400px] overflow-hidden shadow-xl relative">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold text-center px-4">
                {slide.quote}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
