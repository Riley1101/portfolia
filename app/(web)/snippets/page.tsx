export const revalidate = 60;

import Hero from "@/components/pages/hero";
import SnippetTimeLine from "@/components/pages/snippets/timeline";
import { Metadata } from "next";
import client from "@/utils/client";
import type { ArticlCardType } from "@/types/articles";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

const hero = {
  title: "Snippets",
  subtitle: " Code Snippets",
  description:
    "Some of the code snippets that I came across in my explore or the internet !",
};

export const metadata : Metadata = {
  title:  "Snippets",
  openGraph: getOpenGraph("/images/snippets.png","Snippets | " + metaData.title, metaData.description, new URL("/snippets", metaData.url)),
  twitter:getTwitterCard("/images/snippets.png","Snippets | " + metaData.title, metaData.description),
}
async function ArticlePage() {
  let query = `
*[_type=='snippet'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  'categories':categories[]->title,
  description,
  releasedAt
}
`;

  const raw_data: ArticlCardType[] = await client.fetch(query);
  return (
    <>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
      <SnippetTimeLine data={raw_data} />
    </>
  );
}
export default ArticlePage;
