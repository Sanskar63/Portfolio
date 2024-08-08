import { useState, useEffect } from 'react'
import './index.css';
import './App.css'
import Hero from './components/Hero'
import DarkModeToggle from './components/DarkMode';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import ParallaxScroll from './components/Parallax';

function App() {



  return (
    <>
      <Navbar />
      <div className='bg-white dark:bg-gray-800 flex flex-col gap-[10vw] lg:gap-[6vw]'>
        <Hero />
        <AboutMe />
        <ParallaxScroll />
        {/* <Projects /> */}
        <Experience />
        <Skills />
      </div>

    </>
  )
}

export default App
