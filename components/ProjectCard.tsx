"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  image: any; // or StaticImageData if using local images
  title: string;
  timeline: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
};

type ProjectCardProps = {
  data: Project;
};

export default function ProjectCard({ data }: ProjectCardProps) {
  const { image, title, timeline, description, tech = [], live, github } = data;
  return (
    <div className="group border border-white/10 rounded-2xl overflow-hidden bg-black hover:border-white/30 transition-all duration-300">
      
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:brightness-125 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">

        {/* Title + Arrow */}
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-medium flex items-center gap-2">
            {title}
            <span className="opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300">
              <IoIosArrowForward />
            </span>
          </h3>

          {/* Links */}
          <div className="flex items-center gap-3 text-gray-400">
            {github && (
              <Link href={github} target="_blank">
                <FaGithub className="hover:text-white transition" />
              </Link>
            )}
            {live && (
              <Link href={live} target="_blank">
                <FiExternalLink className="hover:text-white transition" />
              </Link>
            )}
          </div>
        </div>

        {/* Timeline */}
        <p className="text-sm text-gray-400">{timeline}</p>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
  {Array.isArray(tech) &&
    tech.map((item, index) => (
      <span
        key={index}
        className="text-xs border border-white/10 px-2 py-1 rounded-md text-gray-400 hover:text-white hover:border-white/30 transition"
      >
        {item}
      </span>
    ))}
</div>
      </div>
    </div>
  );
}