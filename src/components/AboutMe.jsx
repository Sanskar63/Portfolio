import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col gap-2 md:gap-4 lg:gap-6'>
      <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>About Me</span>
      <p className='w-[80%] font-mono text-sm md:text-xl lg:text-2xl text-gray-800 dark:text-white'>
        Hello there, I am Sanskar. <br /> 
        I love designing and developing websites and I'm good at it.<br />
        I read non-fiction books, listen songs and watch Harry Potter Movies in my free time. <br />

      </p>
    </div>
  )
}

export default AboutMe
