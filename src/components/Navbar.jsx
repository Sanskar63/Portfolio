import React, { useEffect, useState } from 'react'
import DarkModeToggle from './DarkMode';


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition > windowHeight / 4) {
            setShowNav(true);
        }
        else {
            setShowNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='h-0'>
            {showNav && (
                <div className='w-[100%] flex flex-row-reverse pr-2 md:pr-5 items-center bg-white dark:bg-gray-800 fixed top-0 left-0 z-50 nav-appear gap-2'>
                    <img className='w-[6vh] md:w-[8%] lg:w-[5%] ' src="/meCircle.png" alt="" />
                    <span className='font-mono text-xs md:text-sm lg:text-xl rounded-md text-gray-800 dark:text-white'>Sanskar</span>

                    <div className='fixed top-0 md:top-[1%] left-0'>
                        <DarkModeToggle />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
