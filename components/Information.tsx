"use client"
import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { toast } from "sonner"
import Link from 'next/link';
const Information = () => {
     const [time, setTime] = useState("");
      const [offset, setOffset] = useState("");
    
      useEffect(() => {
        const updateTime = () => {
          const now = new Date();
          const indiaTime = new Date(
            now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
          );
          const userTime = new Date();
          const formattedTime = indiaTime.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
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
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
      }, []);
      function copyFunction(value: string){
        return (e: React.MouseEvent<SVGElement>) => {
          const textToCopy = value === 'email' ? 'aakashsaini948585@gmail.com' : '+91-9485858534';
          if(value == "email"){
              toast.success("Email copied")
          }else{
            toast.success("Mobile number copied")
          }
          navigator.clipboard.writeText(textToCopy);
        };
      }
  return (
    <>
       <div className="second flex flex-col sm:flex-row mt-5">
            <div className='left w-full sm:w-1/2 py-3'>
              <div className="list flex flex-col px-4 sm:px-3 py-3 sm:pl-7 gap-4 sm:gap-7 text-sm sm:text-md">
                <span className="code flex items-center gap-3">
                  <FaCode className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} /> 
                  Full Stack Developer
                </span>
                <span className="edu flex items-center gap-3">
                  <RiGraduationCapFill className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} />
                  <span className='wrap-break-word'>Doing Masters in Computer Science (MCA)</span>
                </span>
                <span className="loc flex items-center gap-3">
                  <FaLocationDot className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} />
                  Haryana, India
                </span>
                <span className="web flex items-center gap-3">
                  <FaLink className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} />
                  <Link href={'[aakashsaini.in](https://aakashsaini.in)'} target='_blank' className='hover:underline'>
                    aakashsaini.in
                  </Link>
                </span>
              </div>
            </div>
            <div className='right w-full sm:w-1/2 py-3'>
              <div className="list flex flex-col px-4 sm:px-3 py-3 gap-4 sm:gap-7 text-sm sm:text-md">
                <span className="time flex items-center gap-3 sm:mt-7">
                  <MdAccessTimeFilled className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} />
                  <span>{time} <span className='text-gray-400'>{offset && ` // ${offset}`}</span></span>
                </span>
                <span className="email flex items-center gap-2 group">
                  <MdEmail className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} />
                  <span className='hover:underline break-all text-xs sm:text-sm md:text-base'>
                    aakashsaini948585@gmail.com
                  </span>
                  <FaCopy onClick={copyFunction('email')} className='opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-200 shrink-0' size={18} />
                </span>
                <span className="phone flex items-center gap-3 group">
                  <FaPhone className='text-gray-400 font-bold bg-[#262629] rounded-sm p-1 shrink-0' size={27} />
                  <span className='hover:underline'>+91-9485858534</span>
                  <FaCopy onClick={copyFunction('mobile')} className='opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-200 shrink-0' size={18} />
                </span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Information
