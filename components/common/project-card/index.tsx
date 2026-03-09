import Link from "next/link";
import type { Project } from "@/types/projects";
import { LanguageLogo } from "../logos";

type Props = {
  data: Project;
};

export function ProjectCard({ data }: Props) {
  return (
    <Link
      href={`/projects/${data.slug}`}
      className="group relative flex min-h-[200px] cursor-pointer flex-col justify-between rounded-theme border border-theme-primary/10 p-4 overflow-hidden transition-[border-color,background-color] duration-300 hover:border-theme-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base"
    >
      <div
        className="absolute right-[-10%] top-0 aspect-square w-[25%] -translate-x-1/2 -translate-y-1/2 origin-center gradient-one transition-[width] duration-200 group-hover:w-[30%]"
        aria-hidden
      />
      <div
        className="grid aspect-square w-10 place-items-center rounded-full border border-theme-accent-opaque p-2 transition-[border-color,transform] duration-500 group-hover:border-theme-primary-opaque group-hover:rotate-[30deg]"
      >
        <LanguageLogo type={data.language} />
      </div>
      <div className="min-w-0">
        <h2 className="mb-1 text-base font-bold text-theme-body">{data.title}</h2>
        <p className="text-sm text-theme-body/80 line-clamp-2">{data.description}</p>
      </div>
    </Link>
  );
}
