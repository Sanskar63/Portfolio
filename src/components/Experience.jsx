import React from 'react'

const Experience = () => {
  return (
    <div className='w-[92%] sm:w-[90%] lg:w-[85%] mx-auto flex flex-col gap-2'>
      <div className='flex gap-2 md:gap-4 lg:gap-6'>
        <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>Experience</span>
      </div>


      <div className='mb-8'>
        <div className='mb-4'>
          <div className='flex gap-3 items-center '>
            <span className=' my-2 font-extralight italic md:text-xl text-gray-800 dark:text-white'>Full Stack Developer at Welo Infosolutions pvt. ltd.</span>
            <a target='blank' href="https://weltcare.in/"><img className='w-7 md:w-10 hover:scale-[105%] cursor-pointer ' src="/link.png" alt="" /></a>
          </div>
          <span className=' font-extralight italic text-sm md:text-base text-gray-800 dark:text-white'>Next.js, TypeScript, Python, Django, Django REST Framework.</span>
        </div>

        <div className='flex gap-3 flex-col md:flex-row items-center md:items-start'>
          <img className='w-[300px] md:w-[350px] lg:w-[500px] rounded-lg shadow-lg' src="/Welt.png" alt="" />
          <div className='flex flex-col gap-2'>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Created entire business side with functionalities like- payment gateway, membership to business, transaction record  etc.
            </span>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Added functionalities like- automatic generation of multi use membership card and related works for customer.
            </span>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Build Gym app, modified models and admin panel in Django backend, and resolved code issues to optimize functionality.
            </span>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Constructed an email notification module using Django's SMTP backend with Gmail integration.
            </span>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Enhanced UI design and devised reusable components to improve user experience.
            </span>
          </div>

        </div>
      </div>


      <div>
        <div className=' mb-4'>
          <div className='flex gap-3 items-center'>
            <span className=' my-2 font-extralight italic md:text-xl text-gray-800 dark:text-white'>Backend Developer at Indian Institute of Information Technology Una.</span>
            <a target='blank' href="https://iiitu.ac.in/devteam"><img className='w-7 md:w-10 hover:scale-[105%] cursor-pointer ' src="/link.png" alt="" /></a>
          </div>
          <span className=' font-extralight italic text-sm md:text-base text-gray-800 dark:text-white'>NodeJs, ExpressJs, MongoDB</span>
        </div>

        <div className='flex gap-3 flex-col md:flex-row items-center md:items-start'>
          <img className='w-[300px] md:w-[350px] lg:w-[500px] rounded-lg shadow-lg' src="/IIITUMain.png" alt="" />
          <div className='flex flex-col gap-2'>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Engineered APIs for faculty management including registration, authentication, and CRUD operations.
            </span>
            <span className='text-justify font-mono text-sm md:text-base lg:text-xl text-gray-800 dark:text-white'>
              - Built CRUD APIs for managing the print media section, enabling seamless content management.
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience
