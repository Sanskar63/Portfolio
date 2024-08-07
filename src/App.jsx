import { useState } from 'react'
import './index.css';
import './App.css'
import Hero from './components/Hero'
import DarkModeToggle from './components/DarkMode';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
        <Projects />
        <Skills />
      </div>
      
    </>
  )
}

export default App
