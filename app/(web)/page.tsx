export const revalidate = 60;
import LatestPostHome from "@/components/pages/home/latest-blogs";
import LatestSnippets from "@/components/pages/home/latest-snippets";
import { NewsLetter } from "@/components/common/newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arkar Kaung Myat",
};

export default async function Home() {
  return (
    <div className="page-container">
      <LatestPostHome />
      <LatestSnippets></LatestSnippets>
      <NewsLetter></NewsLetter>
    </div>
  );
}
