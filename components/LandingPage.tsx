"use client"
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
import EducationCard from './EducationCard';
import kuk from '@/public/rest/kuk.png'
import csru from '@/public/rest/crsu.png'
import hbsc from '@/public/rest/hbsc.webp'
import ProjectCard from './ProjectCard';
import gr from '@/public/projects/gr.png'
import quill from '@/public/projects/quill.png'
import ss from '@/public/projects/ss.png'
import minitools from '@/public/projects/minitools.png'
import cc from '@/public/projects/cc.png'
import chatnest from '@/public/projects/chatnest.png'
import GithubGraph from './GithubCal2';
import { useEffect, useState } from 'react';
const LandingPage = () => {
  const Experience = [
    {
      company: "Afame Technologies",
      role: "Frontend Dev Intern",
      timeline: "Apr 2024 - May 2024",
      title: "Worked as a frontend developer and build a product from scrach.",
      description: [
              "Built 4 core UI components from scratch for a startup website",
              "Collaborated with a senior developer to integrate features seamlessly",
              "Worked across frontend and backend on multiple production tasks",
              "Improved understanding of real-world full-stack workflows"
            ]
    },
  ]

  const project = [
    {
      title: "Silent Shout",
      tech: ["Next.js", "prisma", "Tailwind CSS"],
      github: "https://github.com/aakashsaini09/Silent-Shout",
      live: "https://silent-shout.netlify.app",
      timeline: "Nov 2024 – Nov 2024",
      image: ss,
      description: "Share your unique URL to collect anonymous feedback effortlessly. Features include login/signup, message controls, and a feedback dashboard."
    },
    {
      title: "Github Roast",
      tech: ["Next.js", "Shad-CN", "Tailwind CSS"],
      github: "https://github.com/aakashsaini09/github-roast",
      live: "https://github-war.netlify.app/",
      timeline: "Jan 2025 – Jan 2025",
      image: gr,
      description: "GitHub Profile Battleground. A platform where GitHub profiles are compared by AI, showcasing the coding champs and humorously trolling the underdogs."
    },
    {
      title: "Quill Vibes",
      tech: ["React.js", "Node.js", "AWS", "Tailwind CSS"],
      github: "https://github.com/aakashsaini09/QuillVibes",
      live: "https://quill-vibes.vercel.app",
      timeline: "May 2024 – Jun 2024",
      image: quill,
      description: "Users can write and publish their own blogs or generate content with AI assistance. The scalable, open- source web application includes multiple features."
    },
    {
      title: "CodeCollab",
      tech: ["React.js", "Web-Socket", "Tailwind"],
      github: "https://github.com/aakashsaini09/CodeCollab",
      live: "https://coding-bros.netlify.app/",
      timeline: "Apr 2024 – May 2024",
      image: cc,
      description: "Write code with your friends, create your own room or join the existing room using roomId and code together. "
    },
    {
      title: "ToolsHub",
      tech: ["TypeScript", "Web-APIs", "Tools"],
      github: "https://github.com/aakashsaini09/ToolsHub",
      live: "https://mini-tool.netlify.app/",
      timeline: "Mar 2024 – Apr 2024",
      image: minitools,
      description: "An Open-Source platform which offers a variety of utilities designed to enhance your productivity and simplify common tasks."
    },
    {
      title: "ChatNest",
      tech: ["React-Vite", "Web-Socket", "MongoDB"],
      github: "https://github.com/aakashsaini09/ChatNest",
      live: "https://github.com/aakashsaini09/ChatNest",
      timeline: "Jan 2024 - Feb 2024",
      image: chatnest,
      description: "A chating Application which allow users to connect with peoples. Easy to connect with Audio and Video call options."
    },
  ]

  const Education = [
    {
      deg: "Masters of Computer Application (MCA)",
      timeline: "2025 - 2027",
      university: "Kurukshetra University, Kurukshetra  ", 
      link: "https://kuk.ac.in/",
      img: kuk,
      description: [
        "Currently pursuing MCA, focusing on core CS concepts and development skills",
        "Actively building real-world full-stack projects"
      ]
    },
    {
      deg: "Batchlors of Computer Application (BCA)",
      timeline: "2021 - 2024",
      university: "Chaudhry Ranbir singh University", 
      link: "https://crsu.ac.in/",
      img: csru,
      description: [
        "Lead a team of 4 students while building final year project.",
        "Get the 3rd place in class final year."
      ]
    },
    {
      deg: "12th Class",
      timeline: "2019 - 2021",
      university: "Haryana Board of School Education", 
      link: "https://bseh.org.in/home/",
      img: hbsc,
      description: [
        "Majors: Commerce and Mathematics",
        "Scored 90% in 12th"
      ]
    },
  ]
    const [time, setTime] = useState("");
  const [offset, setOffset] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // 🇮🇳 Your time (IST)
      const indiaTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      // 🌍 User's local time
      const userTime = new Date();

      // ⏱ Format IST time (NO seconds, NO am/pm)
      const formattedTime = indiaTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      // ⏳ Calculate difference in hours
      const diff =
  (indiaTime.getTime() - userTime.getTime()) / (1000 * 60 * 60);

const rounded = Math.floor(Math.abs(diff));

let offsetText = "";
if (diff > 0) offsetText = `${rounded}h ahead`;
if (diff < 0) offsetText = `${rounded}h behind`;

      setTime(formattedTime);
      setOffset(offsetText);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className='min-h-screen bg-[#08080a] flex justify-center items-center'>
        <div className="container w-4/5 min-h-screen pt-14 px-44">
          <div className="top h-1/3  flex">
            <div className="left w-1/3 flex justify-center items-center">
              <div className='rounded-full -2 -white w-fit overflow-hidden'>
                <Image className='' src={profile} alt='Img not found' height={270} />
              </div>
            </div>
            <div className="right w-2/3  flex flex-col justify-center text-center py-3">
              <div className='flex items-center gap-2'>
                <h1 className='font-extrabold text-5xl text-left mb-3 pt-7 pl-7'>Hey, I'm Aakash</h1>
              </div>
              <div className='flex gap-1.5 items-center'>
              <span className='font-bold text-md text-left flex text-[#9b9ba3] pl-7'>@_aakashsaini</span>
                <Image src={bluetik} alt='img not found' className='w-8 h-8 text-center pb-1'/>
              </div>
              <div className='text-md pt-3 font-bold text-left pl-7'>22 y/o • Full Stack Developer • CS Graduate ’24 • MCA • Building things people can actually use • Exploring DevOps & curious about Web3 ⚡


                {/* <ContainerTextFlip words={["Building Stuff that matters", "Full Stack Developer", "Open Source Contributor"]}/> */}
              </div>
            </div>
          </div>


          <div className="second h-1/3  flex mt-5">
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
                <MdAccessTimeFilled className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><span > {time} <span className='text-gray-400'>{offset && ` // ${offset}`}</span></span>
              </span>
              <span className="email flex items-center gap-2 group">
                <MdEmail className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><span className='hover:underline'>aakashsaini948585@gmail.com</span><FaCopy className='opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-200'></FaCopy>
              </span>
              <span className="phone flex items-center gap-3 group">
                <FaPhone className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1' size={27}/><span className='hover:underline'>+91-9485858534</span><FaCopy className='opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-200'></FaCopy>
              </span>
            </div>
            </div>
          </div>

          <div className='gap bg-[#0c0c11] min-h-14 w-full'></div>
          <AboutMe/>
          <div className='gap bg-[#0c0c11] min-h-14 w-full'></div>

          {/* <div className="third h-1/3  flex">
            <div className="socials flex flex-wrap w-full">
              <div className='w-1/3 flex gap-1  hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1  hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={github} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Github</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1  hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={linkedin} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Linkedin</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1  hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1  hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
              <div className='w-1/3 flex gap-1  hover:bg-[#0c0c11]'>
                <div className='px-1 py-3 pl-5'><Image src={discord} className='rounded-md' height={50} alt="img not found"/></div>
                <div className='gap-16 text-xl w-full flex justify-around items-center'><span >Discord</span><MdArrowOutward/></div>
              </div>
            </div>
          </div> */}
          <Skills/>
          {/* Education */}
          <section className='my-8'>
            <h2 className='font-bold text-3xl pl-10 pt-7 pb-5 bg-[#0c0c11]'>Education</h2>
            {Education.map((data, index)=>{
              return <div key={index}>
                <EducationCard data={data}/>
              </div>
            })}
          </section>
          {/* Experience */}
          <section className='my-8'>
            <h2 className='font-bold text-3xl pl-10 pt-7 pb-5 bg-[#0c0c11]'>Experience</h2>
            {Experience.map((data, index)=>{
              return <div key={index}>
                <ExpCard data={data}/>
              </div>
            })}
          </section>
          {/* Projects */}
          <section className='my-8'>
            <h2 className='font-bold text-3xl pl-10 pt-7 bg-[#0c0c11] pb-5 mb-3'>Projects</h2>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2'>
              {project.map((data, index)=>{
                return <div key={index}>
                  <ProjectCard data={data}/>
                </div>
              })}
            </div>
          </section>
          {/* Projects */}
          <section className='my-8'>
            <h2 className='font-bold text-3xl pl-10 pt-7 bg-[#0c0c11] pb-5 mb-3'>Github</h2>
            <div className='w-full flex items-center justify-center'>
              <GithubGraph username='aakashsaini09'/>
            </div>
          </section>
          <div className='my-48'>.</div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
