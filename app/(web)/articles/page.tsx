export const revalidate = 60;
import asyncComponent from "@/utils/async-component";
import Categories from "@/components/pages/article/categories";
import ArticleTimeLine from "@/components/pages/article/timeline";
import { Banner } from "@/components/pages/banner";
import { Metadata } from "next";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import client from "@/utils/client";

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

const categoryQuery = `
*[_type=='category']{
  title,
    _id
}
`;

async function ArticlePage(props: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const { searchParams } = props;
  const categories = await client.fetch(categoryQuery);
  return (
    <div className="page-container gap-4 md:gap-12">
      <div>
        <Banner></Banner>

        <div className="block md:hidden row-start-1 lg:col-start-2">
          <Categories categories={categories} />
        </div>
        <ArticleTimeLine current={searchParams?.category} />
      </div>
      <div className="hidden md:block row-start-1 lg:col-start-2">
        <Categories categories={categories} />
      </div>
    </div>
  );
}

export default asyncComponent(ArticlePage);
