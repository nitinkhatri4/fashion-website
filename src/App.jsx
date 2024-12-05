import React from 'react'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Home from './components/Home'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <Home />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      <Cards />
      <Footer />
      </div>
  )
}

export default App