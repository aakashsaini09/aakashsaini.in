import Image from 'next/image'
import Link from 'next/link';
import profile from '@/public/p.png'
import { FaCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import AboutMe from './AboutMe';
import Skills from './Skills';
import { ContainerTextFlip } from './ui/container-text-flip';
import bluetik from '@/public/skills/bluetik.png'
import ExpCard from './ExpCard';
const LandingPage = () => {
  const Experience = [
    {
      company: "Afame Technologies",
      role: "Frontend Dev Intern",
      timeline: "Apr 2024 - May 2024",
      title: "Worked as a frontend developer and build a product from scrach."
    }
  ]
  const project = [
    {
      title: "Silent Shout",
      tech: ["Next.js", "prisma"],
      github: "https://github.com/Silent-Shout.com",
      live: "https://silent-shout.netlify.app",
      des: "slfdjs"
    },
    {
      title: "Silent Shout",
      tech: ["Next.js", "prisma"],
      github: "https://github.com/Silent-Shout.com",
      live: "https://silent-shout.netlify.app",
      des: "slfdjs"
    },
    {
      title: "Silent Shout",
      tech: ["Next.js", "prisma"],
      github: "https://github.com/Silent-Shout.com",
      live: "https://silent-shout.netlify.app",
      des: "slfdjs"
    },
    {
      title: "Silent Shout",
      tech: ["Next.js", "prisma"],
      github: "https://github.com/Silent-Shout.com",
      live: "https://silent-shout.netlify.app",
      des: "slfdjs"
    },
  ]
  return (
    <>
      <div className='min-h-screen bg-[#08080a] flex justify-center items-center'>
        <div className="container w-4/5 min-h-screen pt-14 px-32">
          <div className="top h-1/3 border flex">
            <div className="left w-1/3 flex justify-center items-center">
              <div className='rounded-full border-2 border-white w-fit overflow-hidden'>
                <Image className='' src={profile} alt='Img not found' height={270} />
              </div>
            </div>
            <div className="right w-2/3 border flex flex-col justify-center text-center py-3">
              <div className='flex items-center gap-2'>
                <h1 className='font-extrabold text-5xl text-left mb-3 py-7 pl-7'>Hi, I'm Aakash</h1>
                <Image src={bluetik} alt='img not found' className='w-14 h-14 text-center pb-1'/>
              </div>
              <div className='text-xl pt-3 font-bold text-[#9b9ba3] text-left pl-7'>Hello, I love to do
                <ContainerTextFlip words={["Building Stuff that matters", "Full Stack Developer", "Open Source Contributor"]}/>
              </div>
            </div>
          </div>


          <div className="second h-1/3 border flex mt-5">
          <div className='left w-1/2 h-full py-3'>
            <div className="list flex flex-col px-3 py-3 pl-7 gap-7 text-md">
              <span className="code flex items-center gap-3">
                <FaCode className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/> Full Stack Developer
              </span>
              <span className="edu flex items-center gap-3">
                <RiGraduationCapFill className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/>Doing Masters in Computer Science (MCA)
              </span>
              <span className="loc flex items-center gap-3">
                <FaLocationDot className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/>Haryana, India
              </span>
              <span className="web flex items-center gap-3">
                <FaLink className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><Link href={'https://aakashsaini.in'} target='_blank'>aakashsaini.in</Link>
              </span>
            </div>
          </div>
          <div className='right w-1/2 h-full py-3'>
          <div className="list flex flex-col px-3 py-3 gap-7 text-md">
               <span className="time flex items-center gap-3">
                </span>
               <span className="time flex items-center gap-3">
                <MdAccessTimeFilled className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><span >12:03 AM</span>
              </span>
              <span className="email flex items-center gap-3">
                <MdEmail className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><span className='hover:underline'>aakashsaini948585@gmail.com</span><FaCopy className='hidden hover:block'></FaCopy>
              </span>
              <span className="phone flex items-center gap-3">
                <FaPhone className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><span className='hover:underline'>+91-9485858534</span>
              </span>
            </div>
            </div>
          </div>

          <div className='gap bg-[#0c0c11] min-h-14 w-full'></div>
          <AboutMe/>
          <div className='gap bg-[#0c0c11] min-h-14 w-full'></div>

          {/* <div className="third h-1/3 border flex">
            <div className="socials flex flex-wrap w-full">
              <div className='w-1/3 flex gap-1 border hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1 border hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={github} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Github</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1 border hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={linkedin} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Linkedin</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1 border hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1 border hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1 border hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
            </div>
          </div> */}
          <Skills/>
          <section>
            <h2 className='font-bold text-3xl pl-10 pt-7 pb-1s'>Experience</h2>
            {Experience.map((data, index)=>{
              return <div key={index}>
                <ExpCard data={data}/>
              </div>
            })}
          </section>
        </div>
      </div>
    </>
  )
}

export default LandingPage
