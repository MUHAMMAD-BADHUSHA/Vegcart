import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import HeroSection from './Components/heroSection'
import About from './Components/About'
import Latest from './Components/Latest'
import ContactForm from './Components/ContactForm'

function LandingPage() {
  return (
    <>
    <div>
       <Navbar/>
       <HeroSection/>
       <About/>
       <Latest/>
       <ContactForm/>
      <Carousel/>
    </div>
     
    </>
  )
}

export default LandingPage
