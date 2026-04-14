import Image from 'next/image'
import React from 'react'
import logo from '@/public/skills/afame.jpg'
import { IoIosArrowForward } from "react-icons/io";
const ProjectCard = ({data}: any) => {
  return (
     <>
      <div className='py-5 border-b hover:bg-[#0a0a0c]'>
        <div className="row px-7 flex justify-between w-full text-md font-mono">
          <div className='flex gap-5'>
            <Image src={logo} alt='Image not found' className='h-16 w-16 rounded-full' />
            <div className="flex flex-col h-full justify-center items-center font-bold group">
              <span className='text-white cursor-pointer flex gap-1 items-center'>{data.company} <IoIosArrowForward className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'/></span>
              <span className='text-gray-400'>{data.role}</span>
            </div>
          </div>
          <div className='font-bold pt-3'>
            {data.timeline}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
