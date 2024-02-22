import React from "react";
import { Project } from "./Project";
import type { Project as ProjectType } from "@/types/page/testimonials";

type Props = {
  data: ProjectType[];
};

export function ProjectList({ data }: Props) {
  return (
    <div className="min-h-dvh flex flex-col justify-center ">
      <h2 className="font-theme  text-3xl my-2 mb-6 md:text-3xl">Some Of My Works</h2>
      <div className="@container flex flex-col gap-4 md:gap-6">
        {data?.map((item, idx) => (
          <Project key={item._id} data={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
