export const revalidate = 60;

import type { Metadata } from "next";
import { Intro } from "@/components/pages/home/intro";
import { NewsLetter } from "@/components/common/newsletter";
import { Projects } from "@/components/pages/home/projects";
import { HomeLatestPost } from "@/components/pages/home/latest-blogs";

export const metadata: Metadata = {
  title: "Arkar Kaung Myat",
};

export default async function Home() {
  return (
    <div className="page-container gap-4">
      <div className="w-full flex flex-col gap-8">
        <Intro />
        <HomeLatestPost />
        <Projects />
        <NewsLetter />
      </div>
    </div>
  );
}
