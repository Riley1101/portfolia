import React from "react";
import { ProjectCard } from "@/components/common/project-card";
import type { Project } from "@/types/projects";
import asyncComponent from "@/utils/async-component";
import client from "@/utils/client";

const query = `
    *[_type=='project' && pinned==true][0..2]{
            ...,
            "slug": slug.current
        }
`;

async function ProjectsComponent() {
  const data: Project[] = await client.fetch(query);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-300 leading-relaxed">
        Some of the projects I have been working on this week to involve in
        technologies that interest me or let&apos;s say it&apos;s me trying new
        things.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {data.map((project) => (
          <ProjectCard key={project._id} data={project} />
        ))}
      </div>
    </div>
  );
}

export const Projects = asyncComponent(ProjectsComponent);
