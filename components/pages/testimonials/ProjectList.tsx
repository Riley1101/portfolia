import React from "react";
import { Project } from "./Project";
import type { Project as ProjectType } from "@/types/page/testimonials";

type Props = {
  data: {
    projects: ProjectType[];
    title: string;
  };
};

export function ProjectList({ data }: Props) {
  const { projects, title } = data;
  return (
    <div className="min-h-screen  flex flex-col justify-center ">
      <h2 className="font-theme  text-3xl my-2 mb-6 md:text-3xl">{title}</h2>
      <div className="flex flex-col gap-4 md:gap-6">
        {projects.map((item, idx) => (
          <Project key={item._id} data={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
