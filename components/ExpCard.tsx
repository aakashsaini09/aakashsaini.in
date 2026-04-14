import Image from 'next/image'
import React from 'react'
import logo from '@/public/skills/afame.jpg'
const ExpCard = ({data}: any) => {
  {/* {data.title}
  {data.role}
  {data.company}
  {data.timeline} */}
  return (
    <>
      <div className='border py-5'>
        <div className="row px-3 flex justify-between w-full">
          <div className='flex'>
            <Image src={logo} alt='Image not found' className='h-20 w-20 rounded-full' />
            <div className="flex flex-col h-full justify-center items-center font-bold text-xl">
              <span className='text-white'>{data.company}</span>
              <span className='text-gray-400'>{data.role}</span>
            </div>
          </div>
          <div>
            {data.timeline}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpCard
