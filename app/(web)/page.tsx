export const revalidate = 60;
import { NewsLetter } from "@/components/common/newsletter";
import LatestPostHome from "@/components/pages/home/latest-blogs";
import { GithubFeed } from "@/components/pages/home/github";
import LatestSnippets from "@/components/pages/home/latest-snippets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arkar Kaung Myat",
};

export default async function Home() {
  return (
    <div className="page-container">
      <div className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        <GithubFeed />
      </div>
      <LatestPostHome />
      <LatestSnippets></LatestSnippets>
      <NewsLetter></NewsLetter>
    </div>
  );
}
