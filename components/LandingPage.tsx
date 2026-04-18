"use client"
import Image from 'next/image'
import Link from 'next/link';
import profile from '@/public/p.png'
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
import ContactSection from './Contact';
import Information from './Information';

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
      github: "[github.com](https://github.com/aakashsaini09/Silent-Shout)",
      live: "[silent-shout.netlify.app](https://silent-shout.netlify.app)",
      timeline: "Nov 2024 – Nov 2024",
      image: ss,
      description: "Share your unique URL to collect anonymous feedback effortlessly. Features include login/signup, message controls, and a feedback dashboard."
    },
    {
      title: "Github Roast",
      tech: ["Next.js", "Shad-CN", "Tailwind CSS"],
      github: "[github.com](https://github.com/aakashsaini09/github-roast)",
      live: "[github-war.netlify.app](https://github-war.netlify.app/)",
      timeline: "Jan 2025 – Jan 2025",
      image: gr,
      description: "GitHub Profile Battleground. A platform where GitHub profiles are compared by AI, showcasing the coding champs and humorously trolling the underdogs."
    },
    {
      title: "Quill Vibes",
      tech: ["React.js", "Node.js", "AWS", "Tailwind CSS"],
      github: "[github.com](https://github.com/aakashsaini09/QuillVibes)",
      live: "[quill-vibes.vercel.app](https://quill-vibes.vercel.app)",
      timeline: "May 2024 – Jun 2024",
      image: quill,
      description: "Users can write and publish their own blogs or generate content with AI assistance. The scalable, open- source web application includes multiple features."
    },
    {
      title: "CodeCollab",
      tech: ["React.js", "Web-Socket", "Tailwind"],
      github: "[github.com](https://github.com/aakashsaini09/CodeCollab)",
      live: "[coding-bros.netlify.app](https://coding-bros.netlify.app/)",
      timeline: "Apr 2024 – May 2024",
      image: cc,
      description: "Write code with your friends, create your own room or join the existing room using roomId and code together. "
    },
    {
      title: "ToolsHub",
      tech: ["TypeScript", "Web-APIs", "Tools"],
      github: "[github.com](https://github.com/aakashsaini09/ToolsHub)",
      live: "[mini-tool.netlify.app](https://mini-tool.netlify.app/)",
      timeline: "Mar 2024 – Apr 2024",
      image: minitools,
      description: "An Open-Source platform which offers a variety of utilities designed to enhance your productivity and simplify common tasks."
    },
    {
      title: "ChatNest",
      tech: ["React-Vite", "Web-Socket", "MongoDB"],
      github: "[github.com](https://github.com/aakashsaini09/ChatNest)",
      live: "[github.com](https://github.com/aakashsaini09/ChatNest)",
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
      link: "[kuk.ac.in](https://kuk.ac.in/)",
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
      link: "[crsu.ac.in](https://crsu.ac.in/)",
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
      link: "[bseh.org.in](https://bseh.org.in/home/)",
      img: hbsc,
      description: [
        "Majors: Commerce and Mathematics",
        "Scored 90% in 12th"
      ]
    },
  ]

 

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? project : project.slice(0, 4);

  return (
    <>
      <div className='min-h-screen bg-[#08080a] flex justify-center items-center'>
        <div className="container w-full px-4 sm:w-11/12 md:w-4/5 min-h-screen pt-8 sm:pt-14 md:px-10 lg:px-44">
          
          {/* Hero Section */}
          <div className="top flex flex-col md:flex-row items-center md:items-start">
            <div className="left w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
              <div className='rounded-full w-fit overflow-hidden'>
                <Image 
                  className='' 
                  src={profile} 
                  alt='Img not found' 
                  loading="eager" 
                  height={200}
                  width={200}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
            <div className="right w-full md:w-2/3 flex flex-col justify-center text-center md:text-left py-3">
              <div className='flex items-center gap-2 justify-center md:justify-start'>
                <h1 className='font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3 pt-4 md:pt-7 md:pl-7'>
                  Hey, I'm Aakash
                </h1>
              </div>
              <div className='flex gap-1.5 items-center justify-center md:justify-start'>
                <span className='font-bold text-md text-[#9b9ba3] md:pl-7'>@_aakashsaini</span>
                <Image src={bluetik} alt='img not found' className='w-6 h-6 sm:w-8 sm:h-8 pb-1' />
              </div>
              <div className='text-sm sm:text-md pt-3 font-bold px-4 md:px-0 md:pl-7'>
                22 y/o • Full Stack Developer • CS Graduate '24 • MCA • Building things people can actually use • Exploring DevOps & curious about Web3 ⚡
              </div>
            </div>
          </div>

          {/* Info Section */}
          <Information/>
          <div className='gap bg-[#0c0c11] min-h-10 sm:min-h-14 w-full'></div>
          <AboutMe />
          <div className='gap bg-[#0c0c11] min-h-10 sm:min-h-14 w-full'></div>
          <Skills />

          {/* Education */}
          <section className='my-6 sm:my-8'>
            <h2 className='font-bold text-2xl sm:text-3xl pl-4 sm:pl-10 pt-5 sm:pt-7 pb-4 sm:pb-5 bg-[#0c0c11]'>
              Education
            </h2>
            {Education.map((data, index) => (
              <div key={index}>
                <EducationCard data={data} />
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className='my-6 sm:my-8'>
            <h2 className='font-bold text-2xl sm:text-3xl pl-4 sm:pl-10 pt-5 sm:pt-7 pb-4 sm:pb-5 bg-[#0c0c11]'>
              Experience
            </h2>
            {Experience.map((data, index) => (
              <div key={index}>
                <ExpCard data={data} />
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="my-6 sm:my-8">
            <h2 className="font-bold text-2xl sm:text-3xl pl-4 sm:pl-10 pt-5 sm:pt-7 bg-[#0c0c11] pb-4 sm:pb-5 mb-3">
              Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-6">
              {visibleProjects.map((data: any, index: number) => (
                <ProjectCard key={index} data={data} />
              ))}
            </div>
            {project.length > 4 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-sm text-gray-800 hover:text-black bg-white cursor-pointer font-bold border border-white/10 px-4 py-2 rounded-md transition hover:border-white/30"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </section>

          {/* Github graph */}
          <section className='my-6 sm:my-8'>
            <h2 className='font-bold text-2xl sm:text-3xl pl-4 sm:pl-10 pt-5 sm:pt-7 bg-[#0c0c11] pb-4 sm:pb-5 mb-3'>
              Github
            </h2>
            <div className='w-full px-4'>
  <GithubGraph username='aakashsaini09' />
</div>
          </section>

          <section>
            <ContactSection />
          </section>
        </div>
      </div>
    </>
  )
}

export default LandingPage
