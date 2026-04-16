import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
const EducationCard = ({data}: any) => {
      // title: "Silent Shout",
      // tech: ["Next.js", "prisma"],
      // github: "https://github.com/Silent-Shout.com",
      // live: "https://silent-shout.netlify.app",
      // img: bluetik,
      // des: "slfdjs"
  return (
     <>
      <div className='py-5 border-b hover:bg-[#0a0a0c]'>
        <div className="row px-7 flex justify-between w-full text-md font-mono">
          <div className='flex gap-5'>
            <Image src={data.img} alt='Image not found' className='h-16 w-16 rounded-full' />
            <Link href={data.link} className="flex flex-col h-full justify-center font-bold group">
              <span className='text-white cursor-pointer flex gap-1 items-center text-left'>{data.deg} <IoIosArrowForward className='opacity-0 group-hover:opacity-100 transition-opacity duration-400'/></span>
              <span className='text-gray-400'>{data.university}</span>
            </Link>
          </div>
          <div className='font-bold pt-3'>
            {data.timeline}
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationCard
