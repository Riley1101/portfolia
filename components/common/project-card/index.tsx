import React from "react";

type Props = {};

export function ProjectCard({}: Props) {
  return (
    <div className="border-2 border-theme-accent-opaque cursor-pointer  min-h-[200px] border-gray-700 rounded-md p-4 flex flex-col justify-between">
      <div className="w-[45px] aspect-square border rounded-full border-theme-accent-opaque">
      </div>
      <div>
        <h2 className="text-base  mb-1 font-bold text-white">Project Name</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint.
        </p>
      </div>
    </div>
  );
}
