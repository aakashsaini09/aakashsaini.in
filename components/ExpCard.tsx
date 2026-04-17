"use client";

import Image from "next/image";
import logo from "@/public/skills/afame.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { BiCollapseVertical } from "react-icons/bi";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useState } from "react";

type Exp = {
  company: string;
  role: string;
  timeline: string;
  description?: string[];
};

const ExpCard = ({ data }: { data: Exp }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 hover:bg-[#0a0a0c] transition">
      <Collapsible open={open} onOpenChange={setOpen}>
        
        {/* Header */}
        <div className="px-6 py-5 flex justify-between items-start">

          {/* Left */}
          <div className="flex gap-4">
            <Image
              src={logo}
              alt="company logo"
              className="h-14 w-14 rounded-full object-cover"
            />

            <div className="flex flex-col justify-center group">
              <span className="text-white flex items-center gap-1 font-medium">
                {data.company}
                <IoIosArrowForward className="opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </span>
              <span className="text-gray-400 text-md">
                {data.role}
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <span className="text-md">
              {data.timeline}
            </span>

            <CollapsibleTrigger asChild>
              <button className="text-gray-400 hover:text-white transition cursor-pointer">
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
          <div className="px-6 pb-5 text-md text-gray-400 leading-relaxed">
            {data.description ? (
              <ul className="text-xs text-gray-400 leading-relaxed space-y-1">
  {data.description.map((item: string, i: number) => (
    <li key={i} className="flex gap-2">
      <span>•</span>
      <span>{item}</span>
    </li>
  ))}
</ul>
            ) : "No details provided."}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ExpCard;