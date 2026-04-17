"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BiCollapseVertical } from "react-icons/bi";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useState } from "react";

type Education = {
  img: any;
  deg: string;
  university: string;
  timeline: string;
  link?: string;
  description?: string[];
};

const EducationCard = ({ data }: { data: Education }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 hover:bg-[#0a0a0c] transition">
      <Collapsible open={open} onOpenChange={setOpen}>
        
        {/* Header */}
        <div className="px-6 py-5 flex justify-between items-start">

          {/* Left */}
          <div className="flex gap-4">
            <Image
              src={data.img}
              alt="education logo"
              className="h-14 w-14 rounded-full object-cover"
            />

            <Link
              href={data.link || "#"}
              target="_blank"
              className="flex flex-col justify-center group"
            >
              <span className="text-white flex items-center gap-1 text-md font-medium">
                {data.deg}
                <IoIosArrowForward className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </span>

              <span className="text-gray-400 text-md">
                {data.university}
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <span className="text-md">
              {data.timeline}
            </span>

            <CollapsibleTrigger asChild>
              <button className="text-gray-400 hover:text-white transition">
                <BiCollapseVertical
                  className={`text-sm transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </CollapsibleTrigger>
          </div>
        </div>

        {/* Content */}
        <CollapsibleContent>
          <div className="px-6 pb-5 text-xs text-gray-400 leading-relaxed">
            {data.description ? (<ul className="text-xs text-gray-400 leading-relaxed space-y-1">
  {data.description.map((item: string, i: number) => (
    <li key={i} className="flex gap-2">
      <span>•</span>
      <span>{item}</span>
    </li>
  ))}
</ul>): "No additional details provided."}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default EducationCard;