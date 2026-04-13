import Image from 'next/image'
import React from 'react'
import docker from '@/public/skills/docker.png'
import git from '@/public/skills/git.png'
import js from '@/public/skills/js.png'
import mongo from '@/public/skills/mongo.png'
import mysql from '@/public/skills/mysql.png'
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const Skills = () => {
    const skills = [
        {
            name: "Docker",
            img: docker
        },
        {
            name: "React.JS",
            img: react
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
            name: "Redis",
            img: redis
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
            name: "MongoDB",
            img: mongo
        },
        {
            name: "MySQL",
            img: mysql
        },
        {
            name: "Python",
            img: python
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
            name: "Prisma",
            img: prisma
        },
        {
            name: "AWS",
            img: aws
        },
        {
            name: "Next.JS",
            img: next
        },
    ]
  return (
      <>
      <div className='bg-[#08080a] flex flex-col'>
        <h2 className='font-bold text-3xl pl-10 pt-7 pb-1'>Stack</h2>
        <div className="container flex flex-wrap px-7 gap-5">
            {skills.map((data, index) => {
                return <div key={index}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Image src={data.img} alt={data.name} width={70}/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{data.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            })}
        </div>
     </div>
    </>
  )
}

export default Skills
