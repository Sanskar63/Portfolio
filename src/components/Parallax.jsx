// src/ParallaxScroll.jsx
import React, { useState, useEffect } from 'react';


// const SupportiveSouls = [
//   "/Project/SupportiveOne.png",
//   "/Project/SupportiveTwo.png",
//   "/Project/SupportiveThree.png"
// ]

const ParallaxScroll = () => {

  return (
    <div className="flex flex-col items-center">
      <span className='font-archivo-black text-gray-800 dark:text-white text-xl md:text-2xl lg:text-3xl'>Projects</span>

      <div className='w-[100%] flex flex-col md:flex-row '>

        <div className='w-[100%] md:w-[40%] h-[30vh] pb-3 md:pb-0 md:h-[110vh] bg-white dark:bg-gray-800 sticky top-0 left-0 pl-[5%] flex flex-col justify-end md:justify-center gap-2 md:gap-4 lg:gap-6'>
          <div className='w-[100%] flex gap-3 md:gap-4 lg:gap-6'>
            <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>SupportiveSouls</span>
            <a href="https://supportivesouls.netlify.app/">
              <img className='w-7 md:w-10 hover:scale-[105%] cursor-pointer' src="/link.png" alt="" />
            </a>
          </div>
          <span className='font-archivo-black text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>Full Stack - UI Design</span>

          <p className='w-[95%] font-mono text-xs md:text-sm lg:text-xl text-justify text-gray-800 dark:text-white'>NGO web app with dedicated pages for showcasing initiatives and works. It have a Payment Portal for donation to NGO.</p>
          <span className='font-mono text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>Next.js, Typescript, React.js, MongoDB</span>
        </div>

        {/* Images Section */}
        <div className='w-[100%] md:w-[60%] flex flex-col'>
          <div className=' w-[100%] flex flex-col'>
            <img className='w-[90%]' src="/Project/SupportiveOne.png" alt="" />
          </div>


          <div className='w-[100%] flex flex-col'>
            <img className='w-[90%]' src="/Project/SupportiveTwo.png" alt="" />

          </div>


          <div className='w-[100%] flex flex-col'>
            <img className='w-[90%]' src="/Project/SupportiveThree.png" alt="" />
            {/* <span className='text-white text-5xl relative bottom-[25%]'>Integrated Payment Portal</span> */}
          </div>



        </div>
      </div>



      <div className='w-[100%] flex flex-col md:flex-row  '>

        <div className='w-[100%] md:w-[40%] h-[30vh] pb-3 md:pb-0 md:h-[110vh] bg-white dark:bg-gray-800 sticky top-0 left-0 pl-[5%] flex flex-col justify-end md:justify-center gap-2 md:gap-4 lg:gap-6'>
          <div className='w-[100%] flex gap-3 md:gap-4 lg:gap-6'>
            <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>IIITU Assist</span>
            <a href="https://college-site-sand.vercel.app/">
              <img className='w-7 md:w-10 hover:scale-[105%] cursor-pointer' src="/link.png" alt="" />
            </a>
          </div>

          <span className='font-archivo-black text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>Full Stack - UI Design</span>

          <p className='w-[95%] font-mono text-xs md:text-sm lg:text-xl text-justify text-gray-800 dark:text-white'>College Site for students with features like- Student Profile, News and Announcements, Application and Complaints and many more.</p>
          <span className='font-mono text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>React.js, MongoDB, Express.js, Node.js, Tailwind</span>
        </div>

        <div className='w-[100%] md:w-[60%] flex flex-col'>
          <div className=' w-[100%] flex'>
            <img className='w-[90%] mx-auto' src="/Project/clgOne.png" alt="" />
          </div>


          <div className='w-[100%] flex flex-col'>
            <img className='w-[90%] mx-auto' src="/Project/clgTwo.png" alt="" />

          </div>


          <div className='w-[100%] flex flex-col'>
            <img className='w-[90%] mx-auto' src="/Project/clgThree.png" alt="" />
            {/* <span className='text-white text-5xl relative bottom-[25%]'>Integrated Payment Portal</span> */}
          </div>



        </div>
      </div>



      <div className='w-[100%] flex flex-col md:flex-row '>

        <div className='w-[100%] md:w-[40%] h-[30vh] pb-3 md:pb-0 md:h-[110vh] bg-white dark:bg-gray-800 sticky top-0 left-0 pl-[5%] flex flex-col justify-end md:justify-center gap-2 md:gap-4 lg:gap-6'>
          <div className='w-[100%] flex gap-3 md:gap-4 lg:gap-6'>
            <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>Music Academy</span>
            <a href="https://music-academy-sanskar.vercel.app/">
              <img className='w-7 md:w-10 hover:scale-[105%] cursor-pointer' src="/link.png" alt="" />
            </a>
          </div>

          <span className='font-archivo-black text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>Front-End - UI Design</span>

          <p className='w-[95%] font-mono text-xs md:text-sm lg:text-xl text-justify text-gray-800 dark:text-white'>Music Website made using Next.js and React.js with AceternityUi.</p>
          <span className='font-mono text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>Next.js, React.js</span>
        </div>
        <div className=' w-[100%] md:w-[60%] flex flex-col'>
          <div className=' w-[100%] flex flex-col'>
            <img className='w-[90%] mx-auto' src="/Project/Music1.png" alt="" />
          </div>


          <div className='w-[100%] flex flex-col'>
            <img className='w-[90%] mx-auto' src="/Project/Music3.png" alt="" />

          </div>


          <div className='w-[100%] flex flex-col'>
            <img className='w-[90%] mx-auto' src="/Project/Music2.png" alt="" />
            {/* <span className='text-white text-5xl relative bottom-[25%]'>Integrated Payment Portal</span> */}
          </div>



        </div>
      </div>

    </div>
  );
};

export default ParallaxScroll;


// const Project = ({ name, link, para, buildUsing, arrayImage }) => {

//   return (
//     <div className='w-[100%] flex  '>

//       <div className='w-[40%] h-[110vh] sticky top-0 left-0 pl-[5%] flex flex-col justify-center md:gap-4 lg:gap-6'>
//         <div className='w-[100%] flex md:gap-4 lg:gap-6'>
//           <span className='font-archivo-black text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white'>{name}</span>
//           <a href={link}>
//             <img className='w-10 hover:scale-[105%] cursor-pointer' src="/link.png" alt="" />
//           </a>
//         </div>

//         <p className='w-[95%] font-mono text-xs md:text-sm lg:text-xl text-justify text-gray-800 dark:text-white'>{para}</p>
//         <span className='font-mono text-xs md:text-sm lg:text-xl text-gray-800 dark:text-white'>{buildUsing}</span>
//       </div>


//       <div className='w-[60%] flex flex-col'>

//         {arrayImage.map((item, index) => {
//           <div key={index} className=' w-[100%] flex flex-col'>
//             <img className='w-[90%]' src={item} alt="hello" />
//           </div>

//         })}

//       </div>
//     </div>

//   );
// }