import React from "react";
import type { Experience } from "@/types/page/testimonials";

interface Props {
  data: Experience[];
}

export function Experiences({ data }: Props) {
  return (
    <div className="min-h-dvh py-24  flex flex-col justify-center">
      <h2 className="font-theme  text-3xl my-2 mb-6 md:text-3xl">
        My Work Experiences
      </h2>
      <div className="flex flex-col gap-6">
        {data.map((exp) => (
          <div key={exp._id} className="grid grid-cols-1">
            <div>
              <h4 className="mb-2 md:text-lg">
                <span className="text-theme-primary">{exp.role}</span> |{" "}
                <span className="text-theme-accent">{exp.title}</span>
              </h4>
              <ul className=" flex flex-col gap-2 list-disc leading-relaxed md:leading-loose pl-6">
                {exp.summary.map((s) => (
                  <li
                    key={s}
                    className="text-theme-body text-base first-letter:text-xl first-letter:text-theme-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
