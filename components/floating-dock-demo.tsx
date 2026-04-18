import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
} from "@tabler/icons-react";
import { SiGmail } from "react-icons/si";
import { FaDiscord, FaFilePdf } from "react-icons/fa";
export default function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/aakashsaini09",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/-aakashsaini/",
    },

    {
      title: "Gmail",
      icon: (
        <SiGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:aakashsaini948585@gmail.com",
    },
    {
      title: "Discode",
      icon: (
        <FaDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discordapp.com/users/1243529310351130704",
    },
    {
      title: "Resume",
      icon: (
        <FaFilePdf/>
      ),
      href: "https://drive.google.com/file/d/1tcu7PTb-uW7u8-pfg5hCnByFAIMrDNPg/view?usp=sharing",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/__aakashsaini",
    },
  ];
  return (
  <FloatingDock
    mobileClassName="translate-y-0"
    items={links}
  />
);
}
