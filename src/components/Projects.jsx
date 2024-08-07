import React from 'react'

const Projects = () => {
    return (
        <div className='w-[100%] dark:bg-gray-800 flex flex-col items-center gap-2 lg:gap-8'>
            <span className='font-archivo-black text-gray-800 dark:text-white text-xl md:text-2xl lg:text-3xl'>Projects</span>
            <div className='w-[95%] lg:w-[80%] flex flex-wrap justify-center gap-3 lg:gap-5 p-2'>

                <div className='w-[90%] md:w-[45%] bg-gray-700 rounded-lg flex flex-col items-center gap-2 py-2'>
                    <div className='w-[90%] bg-white'>
                        <img src="/supportivesouls.png" alt="" />
                    </div>
                    <span className='text-white text-sm md:text-xl font-thin font-archivo-black'>SupportiveSouls</span>
                    <p className='text-white text-sm md:text-xl font-mono w-[90%]'>Build Using: Nextjs, Typescript, Nodejs, Mongodb, ReactJs, Tailwind.</p>
                </div>

                <div className='w-[90%] md:w-[45%] bg-gray-700 rounded-lg flex flex-col items-center gap-2 py-2'>
                    <div className='w-[90%] bg-white'>
                        <img src="/CollegeStudentsSite.png" alt="" />
                    </div>
                    <span className='text-white text-sm md:text-xl font-thin font-archivo-black'>IIITU Assist</span>
                    <p className='text-white text-sm md:text-xl font-mono  w-[90%]'>Build Using: Reactjs, Mongodb, ExpressJs, Nodejs, Javascript, Tailwind.</p>
                </div>

                <div className='w-[90%] md:w-[45%] bg-gray-700 rounded-lg flex flex-col items-center gap-2 py-2'>
                    <div className='w-[90%] bg-white'>
                        <img src="/MusicAcademy.png" alt="" />
                    </div>
                    <span className='text-white text-sm md:text-xl font-thin font-archivo-black'>Music Academy</span>
                    <p className='text-white text-sm md:text-xl font-mono w-[90%]'>Build Using: Nextjs, Javascript, Tailwind.</p>
                </div>
                
            </div>

        </div>
    )
}

export default Projects
