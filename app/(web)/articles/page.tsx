export const revalidate = 60;
import Hero from "@/components/pages/hero";
import ArticleTimeLine from "@/components/pages/article/timeline";
import { Metadata } from "next";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";


export const metadata : Metadata = {
  title:  "Articles",
  openGraph: getOpenGraph("/images/articles.png","Articles | " + metaData.title, metaData.description, new URL("/articles", metaData.url)),
  twitter:getTwitterCard("/images/articles.png","Articles | " + metaData.title, metaData.description),
}
const hero = {
  title: "Article",
  subtitle: "Published Articles",
  description:
    "Here is where you'll find a wealth of information on Next.js, React, JavaScript, and web development.",
};

function ArticlePage() {
  return (
    <div className="page-container">
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
      <ArticleTimeLine />
    </div>
  );
}
export default ArticlePage;
