import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Info from './components/Info'
import Venues from './components/Venues'
import Business from './components/Business'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import WhatsCookin from './components/WhatsCookin'
import Email from './components/Email'
import { Footer } from 'flowbite-react'

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Info />
      <Venues />
      <Business />
      <Services />
      <Testimonial />
      <WhatsCookin />
      <Email />
      <Footer />
    </>

  )
}

export default App
