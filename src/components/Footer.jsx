import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] flex '>
        <div className='w-[80%] md:w-[60%] mx-auto flex flex-col gap-3 md:gap-5 lg:gap-7 items-center'>
            <span className='mx-auto font-mono text-xs md:text-sm lg:text-xl text-center text-gray-800 dark:text-white'>what's next ?</span>
            <span className='font-archivo-black text-xl md:text-2xl lg:text-4xl  text-gray-800 dark:text-white'>Get In Touch</span>
            <p className='font-mono w-[90%] md:w-[80%] text-xs md:text-sm lg:text-xl text-center text-gray-800 dark:text-white'>I am currently looking for any new opportunities. Whether you have a question or just want to say hi, i'll try my best to get back to you!</p>

            {/* <button className=' px-4 py-2 md:px-6 md:py-3 mt-2 text-sm  md:text-xl rounded-lg active:scale-[95%] text-white dark:text-gray-800 bg-gray-800 dark:bg-white text-center'>Say Hello</button> */}
        </div>
      
    </div>
  )
}

export default Footer
