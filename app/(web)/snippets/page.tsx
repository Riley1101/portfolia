export const revalidate = 60;

import Hero from "@/components/pages/hero";
import { Metadata } from "next";
import { SnippetTimeLine } from "@/components/pages/snippets/timeline";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import { getSnippets } from "@/actions/snippetActions";

const hero = {
  title: "Snippets",
  subtitle: " Code Snippets",
  description:
    "Some of the code snippets that I came across in my explore or the internet !",
};

export const metadata: Metadata = {
  title: "Snippets | Arkar Myat",

  openGraph: getOpenGraph(
    "/images/snippets.png",
    "Snippets | " + metaData.title,
    metaData.description,
    new URL("/snippets", metaData.url),
    "article",
  ),

  twitter: getTwitterCard(
    "/images/snippets.png",
    "Snippets | " + metaData.title,
    metaData.description,
  )
};

async function ArticlePage() {
  const snippets = await getSnippets();
  return (
    <div className="page-container">
      <div>
        <Hero
          title={hero.title}
          description={hero.description}
          subtitle={hero.subtitle}
        />
        <SnippetTimeLine data={snippets} />
      </div>
    </div>
  );
}

export default ArticlePage;
