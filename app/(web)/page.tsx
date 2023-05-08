export const revalidate = 60;

import Hero from "@/components/pages/hero";
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
    <div className="w-full lg:w-[60%] ">
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      ></Hero>
      <div className="flex flex-col gap-4">
        <p>
          I now work at
          <a
            href="https://otterdev.io"
            rel="noreferrer"
            target={"_blank"}
            className="pl-4 cursor-pointer text-theme-primary"
          >
            Otterdev.io
          </a>
        </p>
      </div>
      <div className="py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        <GithubFeed />
      </div>
      <LatestPostHome />
      <LatestSnippets></LatestSnippets>
    </div>
  );
}
