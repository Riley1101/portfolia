import React from "react";
import type { Project } from "@/types/projects";
import { LanguageLogo } from "../logos";

type Props = {
  data: Project;
};

export function ProjectCard({ data }: Props) {
  return (
    <div className="border-theme-primary border-opacity-10 transition-all duration-300 relative border hover:border-opacity-[0.2] hover:border-theme-primary group overflow-hidden rounded-lg  cursor-pointer  min-h-[200px]  p-4 flex flex-col justify-between">
      <div
        className=" top-[0%] right-[-10%] transform-center translate-y-[-1/2] 
        group-hover:w-[30%] w-[25%] duration-200 origin-center  transition-all
        aspect-square  absolute  translate-x-[-1/2] gradient-one"
      ></div>
      <div
        className="w-[40px] p-2 grid place-items-center aspect-square border rounded-full
      border-theme-accent-opaque group-hover:border-theme-primary-opaque group-hover:rotate-[30deg] transition-all duration-500" 
      >
        <LanguageLogo type={data.language} />
      </div>
      <div>
        <h2 className="text-base  mb-1 font-bold text-white">{data.title}</h2>
        <p className="text-sm text-gray-400">{data.description}</p>
      </div>
    </div>
  );
}
