import React from "react";
import Image from "next/image";
import type { Project } from "@/types/page/testimonials";
import cx from "classnames";

interface Props {
  index: number;
  data: Project;
}

export function Project({ index, data }: Props) {
  const { title, description, technologies } = data;
  const isOdd = index % 2 === 0;
  return (
    <div
      className={cx(
        "hover:bg-gradient-to-r rounded-md hover:from-theme-accent-opaque flex gap-6 cursor-pointer flex-col glass-box border p-6",
        isOdd ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div>
        <Image
          className="rounded-md"
          src={"/images/articles.png"}
          width={380}
          height={350}
          alt="Image"
        />
      </div>
      <div className="basis-1/2 flex gap-2 flex-col justify-center">
        <h4 className="text-xl text-theme-primary"> {title}</h4>
        <p className="text-sm text-theme-body mb-2 leading-relaxed">
          {description}
        </p>
        <ul className="flex items-center gap-4 text-theme-accent text-sm glass-box">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
