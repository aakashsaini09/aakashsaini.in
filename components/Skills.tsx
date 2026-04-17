import Image from 'next/image'
import docker from '@/public/skills/docker.png'
import git from '@/public/skills/git.png'
import js from '@/public/skills/js.png'
import mongo from '@/public/skills/mongo.png'
import kuber from '@/public/skills/kuber.png'
import next from '@/public/skills/next.png'
import node from '@/public/skills/node.png'
import python from '@/public/skills/python.png'
import react from '@/public/skills/react.png'
import redis from '@/public/skills/redis.png'
import tailwind from '@/public/skills/tailwind.png'
import ts from '@/public/skills/ts.png'
import shadcn from '@/public/skills/shadcn.svg'
import aws from '@/public/skills/aws.png'
import vite from '@/public/skills/vite.png'
import prisma from '@/public/skills/prisma.png'
import linux from '@/public/skills/linux.png'
import socket from '@/public/skills/socket.jpg'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const Skills = () => {
    const skills = [
        {
            name: "React.JS",
            img: react
        },
        {
            name: "Javascript",
            img: js
        },
        {
            name: "Typescript",
            img: ts
        },
        {
            name: "Python",
            img: python
        },
        {
            name: "Redis",
            img: redis
        },
        {
            name: "Docker",
            img: docker
        },
        {
            name: "Node.JS",
            img: node
        },
        {
            name: "Git",
            img: git
        },
        {
            name: "MongoDB",
            img: mongo
        },
        {
            name: "Kubernetes",
            img: kuber
        },
        {
            name: "Tailwind CSS",
            img: tailwind
        },
        {
            name: "ShadCN",
            img: shadcn
        },
        {
            name: "React Vite",
            img: vite
        },
        {
            name: "Next.JS",
            img: next
        },
        {
            name: "Prisma",
            img: prisma
        },
        {
            name: "AWS",
            img: aws
        },
        {
            name: "Linux",
            img: linux
        },
        {
            name: "Socket.io",
            img: socket
        },
    ]
 return (
  <>
    <div className='bg-[#08080a] flex flex-col'>
      <h2 className='font-bold text-3xl pl-10 pt-7 pb-1'>Stack</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 px-7 py-4">
        {skills.map((data, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={data.img}
                    alt={data.name}
                    loading="eager"
                    width={65}
                    height={65}
                    className='rounded-full object-cover'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{data.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </div>
  </>
)
}

export default Skills
