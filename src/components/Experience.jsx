import React from 'react'

const Experience = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col gap-2'>
      <div className='flex gap-2 md:gap-4 lg:gap-6'>
        <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>Experience</span>
        <a href="https://iiitu.ac.in/devteam"><img className='w-7 md:w-10 hover:scale-[105%] cursor-pointer ' src="/link.png" alt="" /></a>
      </div>
      <span className='w-[80%] font-mono text-sm md:text-xl lg:text-2xl text-gray-800 dark:text-white'>Worked as Backend Developer at IIITU.</span>
    </div>
  )
}

export default Experience
