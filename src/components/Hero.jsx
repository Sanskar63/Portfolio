import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkMode";


function Hero() {

  const [githubLogo, setGithub] = useState("");
  const [linkedinLogo, setLinkedin] = useState("");


  useEffect(() => {
    const updateLogos = () => {
      if (document.documentElement.classList.contains('dark')) {
        setGithub('/github-dark.svg');
        setLinkedin('/linkedin-dark.svg');
      } else {
        setGithub('/github-light.svg');
        setLinkedin('/linkedin-light.svg');
      }
    };

    // Update logos on initial render
    updateLogos();

    // Optional: listen for changes to the dark mode class
    const observer = new MutationObserver(updateLogos);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);


  return (
    <section className="bg-white w-[100%] dark:bg-gray-800 h-[100vh] flex flex-col md:flex-row-reverse items-center justify-center overflow-hidden relative">
      <div className={`w-[55%] md:w-[40%] `}>
        <img
          src='/meCircle.png'
          className='w-[100%] md:w-[80%] lg:w-[70%]'
          alt="Profile picture of Harris Johnsen"
        />
        <div className="absolute top-0 right-0">
          <DarkModeToggle />
        </div>

      </div>
      <div className='flex flex-col items-center justify-center w-[80%] md:w-[50%] mt-2'>
        <h1 className=' text-3xl text-center md:text-4xl lg:text-5xl text-gray-800 dark:text-white font-archivo-black'>
          Sanskar
          <br />
          Gupta
        </h1>
        <h2 className={`text-sm  md:text-xl py-2 text-gray-800 dark:text-white`}>Full Stack Developer</h2>
        <span className="flex items-center justify-evenly p-2 w-[40%] md:w-[35%]">

          <a href="https://github.com/Sanskar63" target="_blank">
            <img src={githubLogo} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sanskar-gupta-9b1b73256/" target="_blank">
            <img src={linkedinLogo} alt="Linkedin icon" />
          </a>
        </span>
        <p className={` mx-auto text-center w-[90%] md:w-[50%] text-gray-800 dark:text-white`}>
          With a passion for developing modern Web apps for commercial
          businesses.
        </p>
        <a href='/Resume.pdf' target="blank" className=" px-4 py-2 md:px-6 md:py-2 mt-2 text-sm  md:text-xl rounded-lg active:scale-[95%] text-white dark:text-gray-800 bg-gray-800 dark:bg-white text-center" >
          <button className="hover">Resume</button>
        </a>
      </div>
      <div className="w-[5%]"></div>
    </section>
  );
}

export default Hero;
