export const revalidate = 60;

import LatestPostHome from "@/components/pages/home/latest-blogs";
import { GithubFeed } from "@/components/pages/home/github";
import type { Metadata } from "next";
import { Intro } from "@/components/pages/home/intro";
import { NewsLetter } from "@/components/common/newsletter";
import { Projects } from "@/components/pages/home/projects";

export const metadata: Metadata = {
  title: "Arkar Kaung Myat",
};

export default async function Home() {
  return (
    <div className="page-container gap-4">
      <div className="w-full flex flex-col gap-8">
        <Intro />
        <LatestPostHome />
        <Projects />
        <NewsLetter />
        <div className="max-w-[370px]">
        <GithubFeed />
        </div>
      </div>
    </div>
  );
}
