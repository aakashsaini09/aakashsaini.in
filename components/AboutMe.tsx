import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className='bg-[#08080a] flex flex-col'>
        <h2 className='font-bold text-3xl pl-10 pt-7 pb-1'>About</h2>
        <p className='text-gray-400 px-10 text-md py-5'>
  Hi, I’m <span className='text-white'>Aakash Saini</span>, a developer focused on building dynamic and meaningful web experiences. 
  Currently a first-year <span className='text-white'>MCA student</span>, I’m constantly working on improving my skills and exploring new ideas. 
  In the past, I’ve built and shipped multiple <span className='text-white'>full-stack projects</span> using technologies like React, Next.js, Tailwind, Prisma, and AWS. 
  I enjoy taking ideas from concept to production and 
  <span className='text-white'> continuously learning, experimenting, and growing as a developer</span>.
</p>
        </div>
    </>
  )
}

export default AboutMe
