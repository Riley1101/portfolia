"use server";

import client from "@/utils/client";
import type { Project } from "@/types/projects";
import { cache } from "react";

export const getHomeProjects = cache(
  async function (): Promise<Project[]> {
    const query = `
    *[_type=='project' && pinned==true][0..6]{
            ...,
            "slug": slug.current
        }
`;

    return await client.fetch(query);
  },
);
