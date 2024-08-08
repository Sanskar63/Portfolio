import React from 'react'

const Projects = () => {
    return (
        <div className='w-[100%] dark:bg-gray-800 flex flex-col items-center gap-2 lg:gap-8'>
            <span className='font-archivo-black text-gray-800 dark:text-white text-xl md:text-2xl lg:text-3xl'>Projects</span>
            <div className='w-[95%] lg:w-[80%] flex flex-wrap justify-center gap-3 lg:gap-5 p-2'>

                <a href='https://supportivesouls.netlify.app/' className='w-[90%] md:w-[45%] bg-gray-700 rounded-lg flex flex-col items-center gap-2 py-2 hover:scale-[102%] duration-200 cursor-pointer'>
                    <div className='w-[90%]'>
                        <img className=' rounded-lg ' src="/supportivesouls.png" alt="" />
                    </div>
                    <span className='text-white text-sm md:text-xl font-thin font-archivo-black'>SupportiveSouls</span>
                    <p className='text-white text-sm md:text-xl font-mono w-[90%]'>Nextjs, Typescript, Nodejs, Mongodb, ReactJs, Tailwind.</p>
                </a>

                <a href='https://college-site-sand.vercel.app/' className='w-[90%] md:w-[45%] bg-gray-700 rounded-lg flex flex-col items-center gap-2 py-2 hover:scale-[102%] duration-200 cursor-pointer'>
                    <div className='w-[90%]'>
                        <img className=' rounded-lg ' src="/CollegeStudentsSite.png" alt="" />
                    </div>
                    <span className='text-white text-sm md:text-xl font-thin font-archivo-black'>IIITU Assist</span>
                    <p className='text-white text-sm md:text-xl font-mono  w-[90%]'>Reactjs, Mongodb, ExpressJs, Nodejs, Javascript, Tailwind.</p>
                    <span className='text-white font-extralight font-mono'>Email: sanskar06march@gmail.com Password: 123</span>
                </a>

                <a href='https://music-academy-sanskar.vercel.app/' className='w-[90%] md:w-[45%] bg-gray-700 rounded-lg flex flex-col items-center gap-2 py-2 hover:scale-[102%] duration-200 cursor-pointer'>
                    <div className='w-[90%]'>
                        <img className=' rounded-lg ' src="/MusicAcademy.png" alt="" />
                    </div>
                    <span className='text-white text-sm md:text-xl font-thin font-archivo-black'>Music Academy</span>
                    <p className='text-white text-sm md:text-xl font-mono w-[90%]'>Nextjs, Javascript, Tailwind.</p>
                </a>
                
            </div>

        </div>
    )
}

export default Projects
