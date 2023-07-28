import React from "react";

type Props = {};

export function ProjectCard({}: Props) {
  return (
    <div className=" relative border-2 hover:border-theme-primary-opaque group overflow-hidden rounded-lg border-theme-accent-opaque cursor-pointer  min-h-[200px] border-gray-700 p-4 flex flex-col justify-between">
      <div
        className=" top-[0%] right-[-10%] transform-center translate-y-[-1/2] group-hover:w-[25%] duration-200 origin-center w-0 transition-all
        aspect-square  absolute  translate-x-[-1/2] gradient-one"
      ></div>
      <div className="w-[45px] aspect-square border rounded-full border-theme-accent-opaque"></div>
      <div>
        <h2 className="text-base  mb-1 font-bold text-white">Project Name</h2>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint.
        </p>
      </div>
    </div>
  );
}
