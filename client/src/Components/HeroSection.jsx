import React from 'react'
import photo from '../assets/photo.jpg'
function HeroSection() {
  return (
    <>
     <section id='home' className="top-0 bg-[#77B254] py-20 px-6 md:px-16 ">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
    {/* Text Content */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight mb-6">
      Discover the Freshest Deals in <span className='text-green-950'>Vegetables </span>     </h1>
      <p class="text-lg md:text-xl mb-8 text-emerald-100">
        Discover handpicked vegetables at honest prices — freshness at your doorstep. <br />
        <span className="italic">Nourish naturally. Live fully.</span>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#"
          className="text-green-300 bg-emerald-900 px-6 py-3 rounded-md font-semibold hover:text-white   transition"
        >
          Shop Now
        </a>
        <a
          href="#"
          className="border border-white px-6 py-3 rounded-md hover:bg-emerald-50 transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Image */}
    <div className="flex-1">
      <img
        src={photo}
        alt="Hero Product"
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>
 
    </>
  )
}

export default HeroSection
