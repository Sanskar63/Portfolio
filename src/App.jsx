import React, { useRef } from 'react';
import './index.css';
import './App.css';
import Hero from './components/Hero';
import DarkModeToggle from './components/DarkMode';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import ParallaxScroll from './components/Parallax';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast';

function App() {
    const contactUsRef = useRef(null);

    const scrollToContactUs = () => {
        if (contactUsRef.current) {
            contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolling to ContactUs section');
        } else {
            console.error('contactUsRef is not assigned');
        }
    };

    return (
        <>
            <Toaster />
            <Navbar onContactClick={scrollToContactUs} />
            <div className='bg-white dark:bg-gray-800 flex flex-col gap-[10vw] lg:gap-[6vw] pb-10'>
                <Hero />
                <AboutMe />
                <Experience />
                <ParallaxScroll />
                <Skills />
                <Footer />
                <div ref={contactUsRef}>
                    <ContactUs />
                </div>
            </div>
        </>
    );
}

export default App;
