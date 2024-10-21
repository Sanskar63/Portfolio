import React from 'react'



const skills = [
    { label: 'HTML', src: '/skills/html-5.png' },
    { label: 'CSS', src: '/skills/css3.png' },
    { label: 'Tailwind', src: '/skills/tailwind.png' },
    { label: 'Sass', src: '/skills/sass.png' },
    { label: 'JavaScript', src: '/skills/js.png' },
    { label: 'TypeScript', src: '/skills/typescript.png' },
    { label: 'React.js', src: '/skills/react.png' },
    { label: 'Node.js', src: '/skills/nodejs.png' },
    { label: 'Express.js', src: '/skills/expressjs.png' },
    { label: 'MongoDB', src: '/skills/mongodb.svg' },
    { label: 'Mongoose', src: '/skills/mongoose.png' },
    { label: 'SQL', src: '/skills/sql.png' },
    { label: 'Next.js', src: '/skills/nextjs.png' },
    { label: 'Git', src: '/skills/git.png' },
    { label: 'GitHub', src: '/skills/GitHub-logo.png' },
    { label: 'Python', src: '/skills/python.png'},
    { label: 'Django', src: '/skills/django.png'}
  ];
  

  const Container = ({ src, label }) => {
    return (
      <div className='flex flex-col items-center justify-center w-[28%] md:w-[10%] relative hover:scale-[105%] duration-200'>
        <img src={src} alt={label} className=' w-[85%] object-cover pb-10 md:pb-12' />
        <span className='absolute bottom-2 text-center text-sm md:text-lg font-semibold text-gray-800 dark:text-white'>{label}</span>
      </div>
    );
  };
  
const Skills = () => {
  return (
    <div className='w-[100%] flex flex-col items-center bg-white dark:bg-gray-800 gap-6 '>
      <h1 className="font-archivo-black text-gray-800 dark:text-white text-xl md:text-2xl lg:text-3xl">Skills</h1>
      <div className={`w-[95%] md:w-[90%] flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 p-4`}>
        {skills.map(skill => (
          <Container key={skill.label} src={skill.src} label={skill.label} />
        ))}
      </div>
    </div>
  )
}

export default Skills
