export const revalidate = 60;

import { ArticleTimeLine } from "@/components/pages/article/timeline";
import { Banner } from "@/components/pages/banner";
import { Categories } from "@/components/pages/article/categories";
import { Metadata } from "next";
import { getCategories } from "@/actions/categoryActions";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

export const metadata: Metadata = {
  title: "Articles | Arkar",

  openGraph: getOpenGraph(
    "/images/articles.png",
    "Articles | " + metaData.title,
    metaData.description,
    new URL("/articles", metaData.url),
  ),

  twitter: getTwitterCard(
    "/images/articles.png",
    "Articles | " + metaData.title,
    metaData.description,
  ),
};

export default async function ArticlePage({
  searchParams,
}: {
  searchParams?: Promise<{ category: string | undefined }>;
}) {
  const param = await searchParams;
  const categories = await getCategories();
  return (
    <div className="page-container gap-4 md:gap-12">
      <div className="page-left">
        <Banner></Banner>
        <div className="block md:hidden row-start-1 lg:col-start-2">
          <Categories categories={categories} />
        </div>
        <ArticleTimeLine current={param?.category} />
      </div>
      <div className="page-right hidden md:block row-start-1 lg:col-start-2">
        <Categories categories={categories} />
      </div>
    </div>
  );
}
