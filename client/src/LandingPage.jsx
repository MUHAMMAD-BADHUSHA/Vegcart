import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
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
      
    </div>
     
    </>
  )
}

export default LandingPage
