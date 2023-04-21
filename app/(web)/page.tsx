export const revalidate = 60;

import Hero from "@/components/pages/hero";
import LatestPostHome from "@/components/pages/home/latest-blogs";
import { BurmaSocial } from "@/components/pages/home/burma-social";
import LatestSnippets from "@/components/pages/home/latest-snippets";
import type { Metadata } from "next";

const hero = {
  title: "Home",
  subtitle: "Arkar Dev",
  description:
    "I’m an inspiring full-stack engineer. I do Web development as a developer, and love teaching and sharing about technology, computer science and design.",
};
export const metadata : Metadata = {
  title: 'Arkar Kaung Myat',
}

export default async function Home() {
  return (
    <div>
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
      <div className="flex gap-2 max-w-[300px]">
         <BurmaSocial />
      </div>
      <LatestPostHome />
      <LatestSnippets></LatestSnippets>
    </div>
  );
}
