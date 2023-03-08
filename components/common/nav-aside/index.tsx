"use client";
import NavIconLink from "../link";
import React from "react";
import {
  HomeIcon,
  UserIcon,
  PencilIcon,
  CodeBracketIcon,
  PlayIcon,
} from "@heroicons/react/20/solid";
import {
  Twitter,
  Github,
  LinkedIn,
  Mastaodon,
} from "@/components/common/icons";
import CommandMenu from "@/components/common/cmdk";
export type Nav = {
  id: number;
  name: string;
  href: string;
  icon: React.ReactElement;
};

export const navs: Nav[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5 " />,
  },
  {
    id: 1,
    name: "About",
    href: "/about",
    icon: <UserIcon className="w-5 h-5 " />,
  },
  {
    id: 2,
    name: "Articles",
    href: "/articles",
    icon: <PencilIcon className="w-5 h-5 " />,
  },
  {
    id: 3,
    name: "Snippets",
    href: "/snippets",
    icon: <CodeBracketIcon className="w-5 h-5 " />,
  },

  {
    id: 5,
    name: "Videos",
    href: "/videos",
    icon: <PlayIcon className="w-5 h-5 " />,
  },
];

export const social: Nav[] = [
  {
    id: 0,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arkar-kaung-myat",
    icon: <LinkedIn className="w-5 h-5 " />,
  },
  {
    id: 1,
    name: "Github",
    href: "https://github.com/Riley1101",
    icon: <Github className="w-5 h-5 " />,
  },
  {
    id: 2,
    name: "Twitter",
    href: "https://twitter.com/arkardev",
    icon: <Twitter className="w-5 h-5 " />,
  },
  {
    id: 3,
    name: "Mastadon",
    href: "https://burma.social/@arkardev",
    icon: <Mastaodon className="w-5 h-5 " />,
  },
];
function NavASide() {
  return (
    <nav className="z-[20]  flex-col pt-[8em] hidden col-start-1 gap-4 pointer-events-none lg:pointer-events-auto lg:flex ">
      <CommandMenu />
      <div className="flex flex-col gap-4 p-4 border rounded-md glass-box">
        <div className="flex flex-col gap-4 ">
          {navs.map((nav) => (
            <NavIconLink key={nav.id} href={nav.href} icon={nav.icon}>
              {nav.name}
            </NavIconLink>
          ))}
        </div>
        <hr className="h-[1px] border-gray-800 cursor-pointer" />
        <div className="flex flex-col gap-4 mt-4">
          {social.map((nav) => (
            <NavIconLink
              target="_blank"
              key={nav.id}
              href={nav.href}
              icon={nav.icon}
            >
              {nav.name}
            </NavIconLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default NavASide;
