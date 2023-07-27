export const revalidate = 60;
import LatestPostHome from "@/components/pages/home/latest-blogs";
import { Intro } from "@/components/common/intro/Intro";
import type { Metadata } from "next";
import { NewsLetter } from "@/components/common/newsletter";

export const metadata: Metadata = {
  title: "Arkar Kaung Myat",
};

export default async function Home() {
  return (
    <div className="page-container">
      <div className="w-full flex flex-col gap-4">
        <Intro />
        <LatestPostHome />
        <NewsLetter/>
      </div>
    </div>
  );
}
