export const revalidate = 60;
import ArticleTimeLine from "@/components/pages/article/timeline";
import { Metadata } from "next";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

export const metadata: Metadata = {
  title: "Articles",
  openGraph: getOpenGraph(
    "/images/articles.png",
    "Articles | " + metaData.title,
    metaData.description,
    new URL("/articles", metaData.url)
  ),
  twitter: getTwitterCard(
    "/images/articles.png",
    "Articles | " + metaData.title,
    metaData.description
  ),
};

function ArticlePage() {
  return (
    <div className="page-container gap-4">
      <div>
        <ArticleTimeLine />
      </div>
      <div>
        <h3>Categories</h3>
      </div>
    </div>
  );
}
export default ArticlePage;
