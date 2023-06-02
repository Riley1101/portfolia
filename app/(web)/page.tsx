export const revalidate = 60;

import Hero from "@/components/pages/hero";
import { NewsLetter } from "@/components/common/newsletter";
import LatestPostHome from "@/components/pages/home/latest-blogs";
import { BurmaSocial } from "@/components/pages/home/burma-social";
import { GithubFeed } from "@/components/pages/home/github";
import LatestSnippets from "@/components/pages/home/latest-snippets";
import type { Metadata } from "next";

const hero = {
  title: "Home",
  subtitle: "Arkar Dev",
  description:
    "I’m an inspiring full-stack engineer. I do Web development as a developer, and love teaching and sharing about technology, computer science and design.",
};
export const metadata: Metadata = {
  title: "Arkar Kaung Myat",
};

export default async function Home() {
  return (
    <div className="page-container">
      <LatestPostHome />
      <LatestSnippets></LatestSnippets>
      <div className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        <GithubFeed />
        <BurmaSocial />
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
}
